$(function () {
  // 新闻
  var currentNewsList = null;//当前页面显示的新闻
  var newsList = [
    {
      title: '2019嵌入式暨智能互联大赛龙芯暑期训练营报名通知',
      link: '/news/company/1122.html',
      img: '2-1ZF51K250301-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: ' 为了培养未来我国嵌入式系统的设计、优化与应用人才，激发学生的创新实践能力并培养其团队协作精神，培养学生基于国产处理器平台的深入探索与工程实践能力，由教育部高等学校...'
    },
    {
      title: '域名国家工程研究中心发布首款基于龙芯芯片的国产域名服务器',
      link: '/news/company/1121.html',
      img: '2-1ZF51I44Y24-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '6月28日，域名国家工程研究中心（ZDNS）在中国科学院软件园宣布推出首款搭载国产龙芯CPU的域名服务器。会上，域名国家工程研究中心还同步发布了国产域名管理软件红枫系统2.0版。这...'
    },
    {
      title: '龙芯中科助力新疆信息安全建设',
      link: '/news/company/1120.html',
      img: '2-1ZF1103405301-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '6月21日，由新疆维吾尔自治区软件行业协会、新疆维吾尔自治区计算机学会、新疆维吾尔自治区电子学会主办，龙芯中科与多家国内基础软硬件厂商联合承办的2019年自治区信息安全技术...'
    },
    {
      title: '原来，你们是这样的“小青年”',
      link: '/news/company/1119.html',
      img: '2-1ZF110194G16-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '近日，团中央协同国家发改委、公安部、司法部等21家单位联合发文，公布了20172018年度全国青年文明号名单。其中，中国科学院有7家单位荣获此次青年文明号荣誉称号，中国科学院计...'
    },
    {
      title: '龙芯内核发展策略',
      link: '/news/company/1118.html',
      img: 'defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '一、龙芯内核 工作 方针 龙芯公司的内核发展遵循产品应用一代、技术预研一代、历史维护一代的工作方针。产品应用一代内核是主要产品应用版本；技术预研一代是对新需求的研发准...',
    },
    {
      title: '广东龙芯中科获邀出席广州市领导与民营企业家恳谈会',
      link: '/news/company/1117.html',
      img: 'defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '6月20日上午，广东龙芯中科电子科技有限公司获邀出席2019年第二季度广州市领导与民营企业家恳谈会。恳谈会由广州市市长温国辉主持，会议主要听取企业家意见建议，研究推动软件和...',
    },
    {
      title: '这个团队，终结了中国计算机产业的“无芯”历史',
      link: '/news/company/1116.html',
      img: '2-1Z62G5292KW-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '近期在第二节数字中国建设峰会上展出的国产芯片龙芯3号 芯片是信息产业的灵魂，通用CPU（中央处理器）可以说是芯片中的珠峰。自主研发CPU，难度很大。 在这个故事的起点，2001年...',
    },
    {
      title: '龙芯中科携产品亮相双创周',
      link: '/news/company/1115.html',
      img: '2-1Z62G51Q0R6-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '6月13日上午，由国家发展改革委统一指导，由北京市人民政府和中国科协承办2019年全国大众创业万众创新活动周（以下简称双创周）北京会场暨中关村创新创业季活动在中关村国家自主...',
    },
    {
      title: '腾讯企业微信及政务微信完成中标麒麟龙芯平台兼容认证',
      link: '/news/company/837.html',
      img: '2-1Z523152K91G.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '日前，中标软件有限公司与深圳市腾讯计算机系统有限公司两家企业，就其中标麒麟桌面操作系统（龙芯版）和企业微信、政务微信产品，完成相关产品兼容性相互认证测试。测试结果...',
    },
    {
      title: '众达科技推出龙芯3A3000+7A平台金融及电子政务终端工控主机',
      link: '/news/company/1118.html',
      img: '2-1Z6141P131919-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '生产厂商 ：北京众达精电科技有限公司 方案特点 ：采用龙芯LS3A3000四核处理器、搭配龙芯自主7A1000桥片。丰富的外设接口，满足应用领域多USB口（12路）、多网口（2路）、多串口（6...',
    },
    {
      title: '众达科技推出龙芯3A3000+7A平台金融及电子政务终端工控主机',
      link: '/news/company/1118.html',
      img: '2-1Z6141P131919-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '生产厂商 ：北京众达精电科技有限公司 方案特点 ：采用龙芯LS3A3000四核处理器、搭配龙芯自主7A1000桥片。丰富的外设接口，满足应用领域多USB口（12路）、多网口（2路）、多串口（6...',
    },
    {
      title: '众达科技推出龙芯3A3000+7A平台金融及电子政务终端工控主机',
      link: '/news/company/1118.html',
      img: '2-1Z6141P131919-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '生产厂商 ：北京众达精电科技有限公司 方案特点 ：采用龙芯LS3A3000四核处理器、搭配龙芯自主7A1000桥片。丰富的外设接口，满足应用领域多USB口（12路）、多网口（2路）、多串口（6...',
    },
  ]

  // dom 相关操作
  //创建一条新闻
  function createNewsItem(item) {
    var $newsItem = $(
      `<li class="list-group-item">
        <div class="media">
          <div class="media-left">
            <a href="${item.link}">
              <img class="media-object" src="/images/news/${item.img}" alt="">
            </a>
          </div>
          <div class="media-body ml-3 p-2">
            <h5 class="media-heading">
              <a href="${item.link}">
                ${item.title}
              </a>
            </h5>
            <div class="p-1 my-3">
              <span class="category">${item.category}</span>
              <span class="time">${item.time}</span>
            </div>
            <div class="text text-gray">
              ${item.text}
            </div>
          </div>
        </div>
      </li>`
    );
    // console.log($newsItem);
    return $newsItem;
  }
  // 创建一页新闻
  function createNewsList(list) {
    var $newsList = $(
      `<ul class="list-group">
        
      </ul>`
    );
    list.forEach(elem => {
      createNewsItem(elem).appendTo($newsList);
    });
    // console.log($newsList);
    return $newsList;
  }

  // 创建一组分页按钮
  function createPagination(pageData) {
    var $pagination = $(
      `<ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="javascript:;">首页</a>
        </li>
        <li class="page-item disabled">
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
    for (let i = pageData.page; i < pageData.max + 1; i++) {
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
  // 创建当前页面显示的新闻列表
  function createList(pageData, sourceList) {
    var start = (pageData.page - 1) * pageData.pageSize;
    var end = start + pageData.pageSize;
    if (end > pageData.count) {
      end = pageData.count;
    }
    // console.log(start,end);
    tgtList = sourceList.slice(start, end);
    return tgtList;
  }
  // 创建分页数据对象
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
  cPageData.prototype.update=function(page){
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
  var container;
  var pageData;
  var $pagination;
  var $btns;
  
  // 初始化 更新数据并渲染数据到相关dom元素当中
  main();
  function main() {
    // 查找容器，将新闻列表及分页按钮放入其中
    container = $('.main .container.news .content.company>.head').next().children()[0];
    // console.log(container);
    // 创建分页相关数据对象
    pageData = new cPageData({ page: 1, pageSize: 10, num: 10, count: newsList.length });
    // 生成新闻列表并挂载到dom树中
    genNewsList();
    // 创建分页按钮并挂载到dom树中
    if (pageData.pageCount > 1) {
      genPagination();
    }
  }

  // 生成新闻列表并挂载到dom树中
  function genNewsList() {
    currentNewsList = createList(pageData, newsList);
    $(container.firstElementChild).replaceWith(createNewsList(currentNewsList));
  }
  // 创建分页按钮并挂载到dom树中
  function genPagination() {
    $pagination = createPagination(pageData);
    $(container.nextElementSibling.firstElementChild).replaceWith($pagination);
    $btns = $pagination.children();
    // console.log($btns);
    genBtnsClass();
    addListen(); // 添加事件监听器
  }
  // 初始化分页按钮的样式（设置类名）
  function genBtnsClass() {
    $($btns[pageData.page - pageData.min + 2]).addClass('active');
    if (pageData.page === 1) {
      $($btns[1]).addClass('disabled');
    } else if (pageData.page === pageData.pageCount) {
      $($btns[pageData.max - pageData.min + 3]).addClass('disabled');
    };
  }
  // 更新分页按钮的样式（设置类名）
  function updateBtnsClass(){
    $($btns[pageData.oldPage - pageData.min + 2]).removeClass('active');
    $($btns[pageData.page - pageData.min + 2]).addClass('active');
    if (pageData.page === 1 && pageData.oldPage !== 1) {
      $($btns[1]).addClass('disabled');
    } else if (pageData.page !== 1 && pageData.oldPage === 1) {
      $($btns[1]).removeClass('disabled');
    }
    if (pageData.page === pageData.pageCount && pageData.oldPage !== pageData.pageCount) {
      console.log('end');
      $($btns[$btns.length - 2]).addClass('disabled');
    } else if (pageData.page !== pageData.pageCount && pageData.oldPage === pageData.pageCount) {
      $($btns[$btns.length - 2]).removeClass('disabled');
    }
  }
  // 为分页按钮添加事件监听器
  function addListen() {
    $btns.each((i, elem) => {
      if (i === 0) {
        elem.onclick = function () {
          page = 1;
          sel(page);
        }
      } else if (i === 1) {
        elem.onclick = function () {
          if ($($btns[1]).hasClass('disabled')) { return };
          page = pageData.page - 1;
          sel(page);
        }
      } else if (i === $btns.length - 2) {
        elem.onclick = function () {
          if ($($btns[$btns.length - 2]).hasClass('disabled')) { return };
          page = pageData.page + 1;
          sel(page);
        }
      } else if (i === $btns.length - 1) {
        elem.onclick = function () {
          page = pageData.pageCount;
          sel(page);
        }
      } else {
        elem.onclick = function () {
          page = pageData.min + i - 2;
          sel(page);
        }
      }
    })
  }
  //
  function sel(page) {
    if (page===pageData.page){return};
    var min=pageData.min;
    pageData.update(page);
    genNewsList();
    if (min!==pageData.min){
      genPagination();
      return;
    };    
    updateBtnsClass($btns,pageData);
  }

})