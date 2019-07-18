$(function(){
  var list = [
    {
      title:'校园招聘',
      name:'xyzp',
      list:  [
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
        { title: '◆ 【校园招聘】编译器开发与性能优化工程师', link: 'javascript:;' },
        { title: '◆ 【校园招聘】软件测试工程师', link: 'javascript:;' },
        { title: '◆ 【校园招聘】Java虚拟机软件工程师', link: 'javascript:;' },
        { title: '◆ 【校园招聘】Linux内核工程师', link: 'javascript:;' },
        { title: '◆ 【校园招聘】浏览器软件工程师', link: 'javascript:;' },
      ],
    },
    {
      title:'社会招聘',
      name:'shzp',
      list:[
        { title: '◆ 【社会招聘】技术支持工程师', link: 'javascript:;' },
        { title: '◆ 【社会招聘】销售经理（龙芯大学计划）', link: 'javascript:;' },
        { title: '◆ 【社会招聘】Linux操作系统开源软件工程师', link: 'javascript:;' },
        { title: '◆ 【社会招聘】软件测试工程师', link: 'javascript:;' },
      ]
    }
  ]
  
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
    for (let i=0; i <(pageData.max-pageData.min+1);i++) {
      createPageItem(pageData.min+i).insertBefore(d);
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
  // 初始化分页按钮的样式（设置类名）
  function genPageBtnsClass($pageBtns, pageData) {
    $($pageBtns[pageData.page - pageData.min + 2]).addClass('active');
    if (pageData.page === 1) {
      $($pageBtns[1]).addClass('disabled');
    } else if (pageData.page === pageData.pageCount) {
      $($pageBtns[$pageBtns.length - 2]).addClass('disabled');
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
  function pageBtnsAddListen($pageBtns, pageData, pageBtnsHandle) {
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
  
  // 创建tab-item
  function createTabItem(obj) {
    var $tabItem = $(
      `<div class="tab-item ${obj.name}">
                  
      </div>`
    );
    // var $tabItem=$(
    //   `<div class="tab-item ${obj.name}">
    //     <div></div>
    //     <div></div>
    //   </div>`
    // );
    // console.dir($tabItem.children()[0]);
  
    // 分页按钮
    var list=obj.list;
    var currentList;
    var pageData;
    var $listGroup
    var $pagination;
    var $pageBtns;
  
    // 创建分页相关数据对象
    pageData = new cPageData({ page: 1, pageSize: 10, num: 6, count: list.length });
    // 生成列表并挂载到dom树中
    genListGroup();
    // 创建分页按钮并挂载到dom树中
    if (pageData.pageCount > 1) {
      genPagination();
    }
  
    // 生成列表并挂载到dom树中
    function genListGroup() {
      currentList = createList(pageData, list);
      $listGroup=createListGoup(currentList);
      $listGroup.appendTo($tabItem);
      // $($tabItem.children()[0]).replaceWith($listGroup);
    }
    function updateListGroup(){
      currentList = createList(pageData, list);
      let $oldListGroup=$listGroup;
      $listGroup=createListGoup(currentList);
      $oldListGroup.replaceWith($listGroup);
    }
    // 创建分页按钮并挂载到dom树中
    function genPagination() {
      $pagination = createPagination(pageData);
      $pagination.appendTo($tabItem);
      // $($tabItem.children()[1]).replaceWith($pagination);
      $pageBtns = $pagination.children();
      genPageBtnsClass($pageBtns, pageData);
      pageBtnsAddListen($pageBtns, pageData, pageBtnsHandle); // 添加事件监听器
    }
    function updatePagination(){
      let $oldPagination=$pagination;
      $pagination = createPagination(pageData);
      $oldPagination.replaceWith($pagination);
      $pageBtns = $pagination.children();
      genPageBtnsClass($pageBtns, pageData);
      pageBtnsAddListen($pageBtns, pageData, pageBtnsHandle); // 添加事件监听器
    }
  
    // 分页按钮事件处理函数
    function pageBtnsHandle(page) {
      if (page === pageData.page) { return };
      var min = pageData.min;
      pageData.update(page);
      // genListGroup();
      updateListGroup();  
      if (min !== pageData.min) {
        // genPagination();
        updatePagination();
        return;
      };
      updatePageBtnsClass($pageBtns, pageData);
    }
  
    return $tabItem;
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
    // console.log($container);
    gen();
    initTabs();  
  }
  function gen() {
    let $p=$container.children()[1];
    list.forEach((elem, i) => {
      createTabItem(elem).appendTo($p);
    })
  }
  
  // 初始化标签页
  function initTabs() {
    tabsData = { tgt: 0, tgtOld: 0 };
    $tabs = $($container.children()[0]).children();
    $tabContents = $($container.children()[1]).children();
    // 初始化样式
    $($tabs[tabsData.tgt]).addClass('active');
    $($tabContents[tabsData.tgt]).addClass('active');
    // 添加事件监听器
    tabsAddListen();
  }
  // 为标签按钮添加事件监听器
  function tabsAddListen() {
    $tabs.each((i, elem) => {
      elem.onclick = function () {
        tabsData.tgtOld = tabsData.tgt;
        tabsData.tgt = i;
        if (tabsData.tgt === tabsData.tgtOld) { return };
        showTabs(tabsData);
      }
    })
  }
  //事件处理函数tabs
  function showTabs(tabsData) {
    $($tabs[tabsData.tgtOld]).removeClass('active');
    $($tabs[tabsData.tgt]).addClass('active');
    $($tabContents[tabsData.tgtOld]).removeClass('active');
    $($tabContents[tabsData.tgt]).addClass('active');
  }

})