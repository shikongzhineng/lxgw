$(function () {
  var list = [
    {
      title: '校园招聘',
      name: 'xyzp',
      list: [
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
      title: '社会招聘',
      name: 'shzp',
      list: [
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
  // 创建tab-item
  function createTabItem(obj) {
    var $tabItem = $(
      `<div class="tab-item ${obj.name}">
                  
      </div>`
    );
    // 分页按钮
    // 创建分页相关数据对象
    var pageData = new PageData({});
    // 生成列表并挂载到dom树中
    var pageObj = new PageObj(pageData);
    pageObj.initFn({createListGoup,genList,updateList});
    (async function(){
      await pageObj.genList(obj.list);
      pageObj.genListGroup($tabItem);
      // 创建分页按钮并挂载到dom树中
      if (pageData.pageCount > 1) {
        pageObj.genPagination($tabItem);
      }
    })()

    return $tabItem;
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
    let $p = $container.children()[1];
    $tabContents = list.forEach((elem, i) => {
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