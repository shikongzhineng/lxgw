var list = [
  [
    { title: '◆ 【校园招聘】硬件工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】销售支持与服务', link: 'javascript:;' },
    { title: '◆ 【校园招聘】技术支持', link: 'javascript:;' },
    { title: '◆ 【校园招聘】Linux操作系统软件工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】视频媒体研发人员', link: 'javascript:;' },
    { title: '◆ 【校园招聘】图形优化工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】固件开发工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】高性能处理器后端设计工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】全定制电路设计工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】DFT设计工程师', link: 'javascript:;' },
    { title: '◆ 【校园招聘】芯片验证工程师', link: 'javascript:;' },
  ],
  [
    { title: '校园招聘 硬件工程师', link: 'javascript:;' },
    { title: '校园招聘 硬件工程师', link: 'javascript:;' },
    { title: '校园招聘 硬件工程师', link: 'javascript:;' },
    { title: '校园招聘 硬件工程师', link: 'javascript:;' },
    { title: '5543', link: 'javascript:;' },
    { title: '6', link: 'javascript:;' },
    { title: '7', link: 'javascript:;' },
    { title: '8', link: 'javascript:;' },
    { title: '9', link: 'javascript:;' },
    { title: '100', link: 'javascript:;' },
    { title: '11', link: 'javascript:;' },
  ]
]

//创建一个列表项
function createListItem(item) {
  var $listItem = $(
    `<li class="list-group-item">
      <a href="${item.link}">
        ${item.title}
      </a>
    </li>`
  );
  return $listItem;
}
// 创建一个列表组
function createListGoup(list) {
  var $listGroup = $(
    `<ul class="list-group">
      
    </ul>`
  );
  list.forEach(elem => {
    createListItem(elem).appendTo($listGroup);
  });
  return $listGroup;
}

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
  for (let i = pageData.min; i <= pageData.max; i++) {
    createPageItem(i).insertBefore(d);
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
function updateList(pageData, sourceList) {
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
function cPageData({ page, pageSize, count, num }) {
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
cPageData.prototype.update = function (page) {
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

// 定义全局需要的数据
var $container;
// 标签页导航
var tabsData;
var $tabs;
var $tabContents;

// 初始化 更新数据并渲染数据到相关dom元素当中
main();
function main() {
  // 查找容器，将列表及分页按钮放入其中
  $container = $('.content.hr>.campus>.sec1');
  console.log($container);
  initTabs();
  gen();
  
}

function gen(){
  list.forEach((elem, i) => {
    var list = elem;
    // 分页按钮
    var currentList;
    var pageData;
    var $pagination;
    var $pageBtns;
    // 创建分页相关数据对象
    pageData = new cPageData({ page: 1, pageSize: 10, num: 6, count: list.length });
    // 生成列表并挂载到dom树中
    genList();
    // 创建分页按钮并挂载到dom树中
    if (pageData.pageCount > 1) {
      genPagination();
    }

    // 生成列表并挂载到dom树中
    function genList() {
      currentList = updateList(pageData, list);
      $($tabContents[i].firstElementChild).replaceWith(createListGoup(currentList));
    }
    // 创建分页按钮并挂载到dom树中
    function genPagination() {
      $pagination = createPagination(pageData);
      $($tabContents[i].lastElementChild.firstElementChild).replaceWith($pagination);
      $pageBtns = $pagination.children();
      // console.log($pageBtns);
      genPageBtnsClass($pageBtns, pageData);
      pageBtnsAddListen(); // 添加事件监听器
    }
    // 初始化分页按钮的样式（设置类名）
    function genPageBtnsClass($pageBtns, pageData) {
      $($pageBtns[pageData.page - pageData.min + 2]).addClass('active');
      if (pageData.page === 1) {
        $($pageBtns[1]).addClass('disabled');
      } else if (pageData.page === pageData.pageCount) {
        $($pageBtns[pageData.max - pageData.min + 3]).addClass('disabled');
      };
    }
    // 更新分页按钮的样式（设置类名）
    function updatePageBtnsClass($pageBtns, pageData) {
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
    function pageBtnsAddListen() {
      $pageBtns.each((i, elem) => {
        if (i === 0) {
          elem.onclick = function () {
            page = 1;
            pageBtnsHandle(page);
          }
        } else if (i === 1) {
          elem.onclick = function () {
            if ($($pageBtns[1]).hasClass('disabled')) { return };
            page = pageData.page - 1;
            pageBtnsHandle(page);
          }
        } else if (i === $pageBtns.length - 2) {
          elem.onclick = function () {
            if ($($pageBtns[$pageBtns.length - 2]).hasClass('disabled')) { return };
            page = pageData.page + 1;
            pageBtnsHandle(page);
          }
        } else if (i === $pageBtns.length - 1) {
          elem.onclick = function () {
            page = pageData.pageCount;
            pageBtnsHandle(page);
          }
        } else {
          elem.onclick = function () {
            page = pageData.min + i - 2;
            pageBtnsHandle(page);
          }
        }
      })
    }
    // 
    function pageBtnsHandle(page) {
      if (page === pageData.page) { return };
      var min = pageData.min;
      pageData.update(page);
      genList();
      if (min !== pageData.min) {
        genPagination();
        return;
      };
      updatePageBtnsClass($pageBtns, pageData);
    }

  })
}

// 初始化标签页
function initTabs() {
  tabsData = { tgt: 0, tgtOld: 0 };
  $tabs = $($container.children()[0]).children();
  $tabContents = $($container.children()[1]).children();
  var { tgt, tgtOld } = tabsData;
  if (tgt !== tgtOld) {
    showTab(tgt, tgtOld);
  }
  tabsAddListen();
}
// 为分页按钮添加事件监听器
function tabsAddListen() {
  $tabs.each((i, elem) => {
    elem.onclick = function () {
      tabsData.tgtOld = tabsData.tgt;
      tabsData.tgt = i;
      if (tabsData.tgt === tabsData.tgtOld) { return };
      showTabs(i, tabsData.tgtOld);
    }
  })
}
//事件处理函数tabs
function showTabs(tgt, tgtOld) {
  $($tabs[tgtOld]).removeClass('active');
  $($tabs[tgt]).addClass('active');
  $($tabContents[tgtOld]).removeClass('active');
  $($tabContents[tgt]).addClass('active');
}