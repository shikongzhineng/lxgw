(function () {
  // 创建一组分页按钮
  function createPagination(pageData) {
    var $pagination = $(
      `<ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="javascript:;">首页</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">上一页</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">下一页</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">末页</a>
        </li>
      </ul>`
    );
    var d = $pagination.children()[2];
    for (let i = 0; i < (pageData.max - pageData.min + 1); i++) {
      createPageItem(pageData.min + i).insertBefore(d);
    }
    // console.log($pagination);
    return $pagination;
  }
  function createPageItem(n) {
    var $pageItem = $(
      `<li class="page-item">
        <a class="page-link" href="javascript:;">${n}</a>
      </li>`
    );
    // console.log($pageItem);
    return $pageItem;
  }

  // 有关页面数据操作的函数
  //更新当前页面显示的数据
  function createList(pageData, sourceList) {
    var start = (pageData.page - 1) * pageData.pageSize;
    var end = start + pageData.pageSize;
    if (end > pageData.count) {
      end = pageData.count;
    }
    // console.log(start,end);
    var tgtList = sourceList.slice(start, end);
    return tgtList;
  }
  // 创建分页相关数据对象
  function PageData({ page = 1, pageSize = 10, count, num = 11 }) {
    this.page = page;
    this.pageSize = pageSize;
    this.count = count;
    this.num = num;
    this.min = page;
    this.oldPage = page;
    Object.defineProperties(this, {
      pageCount: {
        get() {
          return Math.ceil(this.count / this.pageSize);
        }
      },
      max: {
        get() {
          var max = this.min + (this.num - 1);
          if (max >= this.pageCount) { max = this.pageCount };
          return max;
        },
        set(val) {
          console.log(val);
          if (val >= this.pageCount && (this.pageCount % (this.num - 1)) !== 0) {
            this.min = this.pageCount - (this.pageCount % (this.num - 1) - 1);
            console.log(this.pageCount % this.num);
          } else {
            this.min = val - (this.num - 1);
          }
        }
      }
    })
  }
  PageData.prototype.update = function (page) {
    this.oldPage = this.page;
    this.page = page;
    if (this.page === this.max && this.max < this.pageCount) {
      this.min = this.page;
    } else if (this.page < this.min && this.min > 1 && this.page !== 1) {
      this.max = this.page + 1;
    } else if (this.page === 1 && this.min !== 1) {
      this.min = 1;
    } else if (this.page === this.pageCount && this.max !== this.pageCount) {
      this.max = this.pageCount;
    }
  }

  Object.defineProperties(window, {
    PageData: {
      value: PageData
    },
    createList: {
      value: createList
    },
    createPagination: {
      value: createPagination
    }
  })
})();
(function () {
  // 分页按钮
  function PageObj({ list, pageData }) {
    this.list = list;
    this.currentList = null;
    this.pageData = pageData;
    this.$listGroup = null
    this.$pagination = null;
    this.$pageBtns = null;
  }
  // 生成列表
  PageObj.prototype.genListGroup = function () {
    this.currentList = this.createList(this.pageData, this.list);
    this.$listGroup = this.createListGoup(this.currentList);
  }
  // 更新列表
  PageObj.prototype.updateListGroup = function () {
    this.currentList = this.createList(this.pageData, this.list);
    let $oldListGroup = this.$listGroup;
    this.$listGroup = this.createListGoup(this.currentList);
    $oldListGroup.replaceWith(this.$listGroup);
  }
  // 创建分页按钮
  PageObj.prototype.genPagination = function () {
    this.$pagination = this.createPagination(this.pageData);
    this.$pageBtns = this.$pagination.children();
    this.genPageBtnsClass();
    this.pageBtnsAddListen(); // 添加事件监听器
  }
  // 更新分页按钮
  PageObj.prototype.updatePagination = function () {
    let $oldPagination = this.$pagination;
    this.$pagination = this.createPagination(this.pageData);
    $oldPagination.replaceWith(this.$pagination);
    this.$pageBtns = this.$pagination.children();
    this.genPageBtnsClass();
    this.pageBtnsAddListen(); // 添加事件监听器
  }
  // 初始化分页按钮的样式（设置类名）
  PageObj.prototype.genPageBtnsClass = function ($pageBtns = this.$pageBtns, pageData = this.pageData) {
    $($pageBtns[pageData.page - pageData.min + 2]).addClass('active');
    if (pageData.page === 1) {
      $($pageBtns[1]).addClass('disabled');
    } else if (pageData.page === pageData.pageCount) {
      $($pageBtns[$pageBtns.length - 2]).addClass('disabled');
    };
  }
  // 更新分页按钮的样式（设置类名）
  PageObj.prototype.updatePageBtnsClass = function ($pageBtns = this.$pageBtns, pageData = this.pageData) {
    $($pageBtns[pageData.oldPage - pageData.min + 2]).removeClass('active');
    $($pageBtns[pageData.page - pageData.min + 2]).addClass('active');
    if (pageData.page === 1 && pageData.oldPage !== 1) {
      $($pageBtns[1]).addClass('disabled');
    } else if (pageData.page !== 1 && pageData.oldPage === 1) {
      $($pageBtns[1]).removeClass('disabled');
    }
    if (pageData.page === pageData.pageCount && pageData.oldPage !== pageData.pageCount) {
      console.log('end');
      $($pageBtns[$pageBtns.length - 2]).addClass('disabled');
    } else if (pageData.page !== pageData.pageCount && pageData.oldPage === pageData.pageCount) {
      $($pageBtns[$pageBtns.length - 2]).removeClass('disabled');
    }
  }
  // 为分页按钮添加事件监听器
  PageObj.prototype.pageBtnsAddListen = function (obj = this) {
    obj.$pageBtns.each((i, elem) => {
      if (i === 0) {
        elem.onclick = function () {
          page = 1;
          obj.pageBtnsHandle(page);
        }
      } else if (i === 1) {
        elem.onclick = function () {
          if ($(obj.$pageBtns[1]).hasClass('disabled')) { return };
          page = obj.pageData.page - 1;
          obj.pageBtnsHandle(page);
        }
      } else if (i === obj.$pageBtns.length - 2) {
        elem.onclick = function () {
          if ($(obj.$pageBtns[obj.$pageBtns.length - 2]).hasClass('disabled')) { return };
          page = obj.pageData.page + 1;
          obj.pageBtnsHandle(page);
        }
      } else if (i === obj.$pageBtns.length - 1) {
        elem.onclick = function () {
          page = obj.pageData.pageCount;
          obj.pageBtnsHandle(page);
        }
      } else {
        elem.onclick = function () {
          page = obj.pageData.min + i - 2;
          obj.pageBtnsHandle(page);
        }
      }
    })
  }
  // 分页按钮事件处理函数
  PageObj.prototype.pageBtnsHandle = function (page) {
    if (page === this.pageData.page) { return };
    var min = this.pageData.min;
    this.pageData.update(page);
    this.updateListGroup();
    if (min !== this.pageData.min) {
      this.updatePagination();
      return;
    };
    this.updatePageBtnsClass();
  }
  // 
  PageObj.prototype.createList=createList;
  PageObj.prototype.createPagination=createPagination;
  PageObj.prototype.initFn = function (createListGoup) {
    this.createListGoup = createListGoup;    
  }

  Object.defineProperties(window, {
    PageObj: {
      value: PageObj
    }
  })
})()
