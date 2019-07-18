$(function () {
  // 新闻
  var currentNewsList = null;//当前页面显示的新闻
  var newsList = [
    {
      title: '《光荣的追寻》：“龙芯之父”胡伟武的“中国芯”【视频】',
      link: '/news/company/1122.html',
      img:'/images/news/2-1PH31I511M9-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '7月15日晚，旅游卫视播出了由龙芯总裁胡伟武作为主讲嘉宾的《光荣的追寻》节目，讲述了龙芯之父胡伟武的中国芯。 这小小的龙芯芯片，是中国无芯到有芯的见证，是无数个龙芯人的...'
    },
    {
      title: '龙芯胡伟武：核心技术应在试错中发展',
      link: '/news/company/1122.html',
      img:'/images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '前言 在中关村环保科技示范园龙芯产业园，我们见到了身材高大、精神饱满的中国科学院计算技术研究所研究员、龙芯1号研制组组长胡伟武。龙芯从组建到今年是第18个年头，胡伟武说...'
    },
    {
      title: '《中国正在说》芯芯之火，可以燎原：中国自主CPU发展之路',
      link: '/news/company/1122.html',
      img:'/images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '现场部分: 郑若麟：讲好中国故事，发出中国声音。欢迎收看福建能源集团冠名播出的《中国正在说》节目。我是主持人郑若麟。大家晚上好！ 有一首歌我想大家一定都会唱，遥远的东...'
    },
    {
      title: '经济半小时特别推出 中国芯生存状态调查',
      link: '/news/company/1122.html',
      img:'/images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯十六年了。自主创新容易吗？不容易。 龙芯活下来了吗？我们不但要活着，还要基业长青的走下去。 能竞合吗？有了竞的实力，才能有合的基础。 https://v.qq.com/x/cover/rukt454tphdbqb...'
    },
    {
      title: '专访｜中国IT业如何不再受制于人',
      link: '/news/company/1122.html',
      img:'/images/news/2-1F32G61414431-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '中国第十七颗北斗卫星首次使用了龙芯CPU 人们常说，中国计算机产业受制于人主要是没有自主的CPU芯片和操作系统，那为什么中国手持终端芯片出货上亿片了，中国手持终端产业还是受...'
    },
    {
      title: '中国基础软硬件网络空间自主可控、安全应用、创新发展研讨大会在昆圆满落幕',
      link: '/news/company/1122.html',
      img:'/images/news/2-161220051F5144-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '原文来源：来自思普操作系统公众号 中国基础软硬件网络空间自主可控、安全应用、创新发展研讨大会12月10日在昆明圆满落幕，本次大会由云南省国防科技工业局指导，由云南省科学技...'
    },
    {
      title: '一十五年如一日 龙芯成就中国梦 读我们的龙芯15周年有感',
      link: '/news/company/1122.html',
      img:'/images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '近日，在新闻上看到 《我们的龙芯3号-致龙芯15周年》 一文，是龙芯CPU首席科学家胡伟武的署名文章，披露了龙芯3号CPU开发过程中的真实经历。回想到若干年前看到的 《我们的CPU》 ，...'
    },
    {
      title: '首个基于龙芯的机器人控制器众筹成功即将量产',
      link: '/news/company/1122.html',
      img:'/images/news/1-16052605230CU-lp.png',
      category: '公司新闻',
      time: '2019-07-05',
      text: '近日，龙芯俱乐部（注：龙芯俱乐部是由龙芯爱好者自行发起的社区组织，创始人为龙芯首批个人用户之一石南。）开发的业内首个基于国产龙芯的机器人控制器登陆聚丰众筹网并众筹...'
    },
    {
      title: '胡伟武：建立自主产业体系，保障网络信息安全',
      link: '/news/company/1122.html',
      img:'/images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '今日头条/ 千龙网中国首都网 http://toutiao.com/i6282524088808243714 习近平总书记在2016年4月19日中央网络安全和信息化工作座谈会上的讲话，为我国以CPU和操作系统为代表的自主基础软硬件发展...'
    },
    {
      title: '龙芯与Ruby的神奇之旅',
      link: '/news/company/1122.html',
      img:'/images/news/1-1605030P55Y96-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯平台上搭建Ruby环境指南 一、 初识Ruby Ruby对于程序员和极客并不陌生，这是一个20世纪90年代由日本牛人松本行弘（Yukihiro Matsumoto）开发的脚本语言，之后一直在开源领域默默发展。...'
    },
    {
      title: '龙芯与Ruby的神奇之旅',
      link: '/news/company/1122.html',
      img:'/images/news/1-1605030P55Y96-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯平台上搭建Ruby环境指南 一、 初识Ruby Ruby对于程序员和极客并不陌生，这是一个20世纪90年代由日本牛人松本行弘（Yukihiro Matsumoto）开发的脚本语言，之后一直在开源领域默默发展。...'
    },
    {
      title: '龙芯与Ruby的神奇之旅',
      link: '/news/company/1122.html',
      img:'/images/news/1-1605030P55Y96-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯平台上搭建Ruby环境指南 一、 初识Ruby Ruby对于程序员和极客并不陌生，这是一个20世纪90年代由日本牛人松本行弘（Yukihiro Matsumoto）开发的脚本语言，之后一直在开源领域默默发展。...'
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
              <img class="media-object" src="${item.img}" alt="">
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
    for (let i = 0;i < pageData.max-pageData.min+1; i++) {
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

  // 有关页面数据操作的函数
  //更新当前页面显示的新闻
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
          if (val >= this.pageCount && (this.pageCount % (this.num - 1)) !== 0) {
            this.min = this.pageCount - (this.pageCount % (this.num - 1) - 1);
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
    container = $('.main .container.news .content.medias').children()[1];
    console.log(container);
    // 创建分页相关数据对象
    pageData = new cPageData({ page: 1, pageSize: 10, num: 10, count: 300 });
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
    $(container.firstElementChild.firstElementChild).replaceWith(createNewsList(currentNewsList));
  }
  // 创建分页按钮并挂载到dom树中
  function genPagination() {
    $pagination = createPagination(pageData);
    $(container.lastElementChild.firstElementChild).replaceWith($pagination);
    $btns = $pagination.children();
    // console.log($btns);
    genBtnsClass($btns,pageData);
    addListen(); // 添加事件监听器
  }
  // 初始化分页按钮的样式（设置类名）
  function genBtnsClass($btns,pageData) {
    $($btns[pageData.page - pageData.min + 2]).addClass('active');
    if (pageData.page === 1) {
      $($btns[1]).addClass('disabled');
    } else if (pageData.page === pageData.pageCount) {
      $($btns[pageData.max - pageData.min + 3]).addClass('disabled');
    };
  }
  // 更新分页按钮的样式（设置类名）
  function updateBtnsClass($btns,pageData){
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