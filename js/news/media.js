$(function () {
  var newsList = [
    {
      title: '《光荣的追寻》：“龙芯之父”胡伟武的“中国芯”【视频】',
      link: '/news/company/1122.html',
      img:'images/news/2-1PH31I511M9-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '7月15日晚，旅游卫视播出了由龙芯总裁胡伟武作为主讲嘉宾的《光荣的追寻》节目，讲述了龙芯之父胡伟武的中国芯。 这小小的龙芯芯片，是中国无芯到有芯的见证，是无数个龙芯人的...'
    },
    {
      title: '龙芯胡伟武：核心技术应在试错中发展',
      link: '/news/company/1122.html',
      img:'images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '前言 在中关村环保科技示范园龙芯产业园，我们见到了身材高大、精神饱满的中国科学院计算技术研究所研究员、龙芯1号研制组组长胡伟武。龙芯从组建到今年是第18个年头，胡伟武说...'
    },
    {
      title: '《中国正在说》芯芯之火，可以燎原：中国自主CPU发展之路',
      link: '/news/company/1122.html',
      img:'images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '现场部分: 郑若麟：讲好中国故事，发出中国声音。欢迎收看福建能源集团冠名播出的《中国正在说》节目。我是主持人郑若麟。大家晚上好！ 有一首歌我想大家一定都会唱，遥远的东...'
    },
    {
      title: '经济半小时特别推出 中国芯生存状态调查',
      link: '/news/company/1122.html',
      img:'images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯十六年了。自主创新容易吗？不容易。 龙芯活下来了吗？我们不但要活着，还要基业长青的走下去。 能竞合吗？有了竞的实力，才能有合的基础。 https://v.qq.com/x/cover/rukt454tphdbqb...'
    },
    {
      title: '专访｜中国IT业如何不再受制于人',
      link: '/news/company/1122.html',
      img:'images/news/2-1F32G61414431-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '中国第十七颗北斗卫星首次使用了龙芯CPU 人们常说，中国计算机产业受制于人主要是没有自主的CPU芯片和操作系统，那为什么中国手持终端芯片出货上亿片了，中国手持终端产业还是受...'
    },
    {
      title: '中国基础软硬件网络空间自主可控、安全应用、创新发展研讨大会在昆圆满落幕',
      link: '/news/company/1122.html',
      img:'images/news/2-161220051F5144-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '原文来源：来自思普操作系统公众号 中国基础软硬件网络空间自主可控、安全应用、创新发展研讨大会12月10日在昆明圆满落幕，本次大会由云南省国防科技工业局指导，由云南省科学技...'
    },
    {
      title: '一十五年如一日 龙芯成就中国梦 读我们的龙芯15周年有感',
      link: '/news/company/1122.html',
      img:'images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '近日，在新闻上看到 《我们的龙芯3号-致龙芯15周年》 一文，是龙芯CPU首席科学家胡伟武的署名文章，披露了龙芯3号CPU开发过程中的真实经历。回想到若干年前看到的 《我们的CPU》 ，...'
    },
    {
      title: '首个基于龙芯的机器人控制器众筹成功即将量产',
      link: '/news/company/1122.html',
      img:'images/news/1-16052605230CU-lp.png',
      category: '公司新闻',
      time: '2019-07-05',
      text: '近日，龙芯俱乐部（注：龙芯俱乐部是由龙芯爱好者自行发起的社区组织，创始人为龙芯首批个人用户之一石南。）开发的业内首个基于国产龙芯的机器人控制器登陆聚丰众筹网并众筹...'
    },
    {
      title: '胡伟武：建立自主产业体系，保障网络信息安全',
      link: '/news/company/1122.html',
      img:'images/news/defaultpic.gif',
      category: '公司新闻',
      time: '2019-07-05',
      text: '今日头条/ 千龙网中国首都网 http://toutiao.com/i6282524088808243714 习近平总书记在2016年4月19日中央网络安全和信息化工作座谈会上的讲话，为我国以CPU和操作系统为代表的自主基础软硬件发展...'
    },
    {
      title: '龙芯与Ruby的神奇之旅',
      link: '/news/company/1122.html',
      img:'images/news/1-1605030P55Y96-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯平台上搭建Ruby环境指南 一、 初识Ruby Ruby对于程序员和极客并不陌生，这是一个20世纪90年代由日本牛人松本行弘（Yukihiro Matsumoto）开发的脚本语言，之后一直在开源领域默默发展。...'
    },
    {
      title: '龙芯与Ruby的神奇之旅',
      link: '/news/company/1122.html',
      img:'images/news/1-1605030P55Y96-lp.jpg',
      category: '公司新闻',
      time: '2019-07-05',
      text: '龙芯平台上搭建Ruby环境指南 一、 初识Ruby Ruby对于程序员和极客并不陌生，这是一个20世纪90年代由日本牛人松本行弘（Yukihiro Matsumoto）开发的脚本语言，之后一直在开源领域默默发展。...'
    },
    {
      title: '龙芯与Ruby的神奇之旅',
      link: '/news/company/1122.html',
      img:'images/news/1-1605030P55Y96-lp.jpg',
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
              <img class="media-object" src="../../${item.img}" alt="">
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

  // 定义全局需要的数据
  var container;
  var pageData;
  // 初始化 更新数据并渲染数据到相关dom元素当中
  function main(newsList,selector) {
    // 查找容器，将新闻列表及分页按钮放入其中
    container = $(selector).children()[1];
    console.log(container);
    // 创建分页相关数据对象
    pageData = new PageData({ count: newsList.length });
    // 生成新闻列表并挂载到dom树中
    var pageObj = new PageObj({ list:newsList, pageData });
    pageObj.initFn(createNewsList);
    pageObj.genListGroup();
    $(container.firstElementChild.firstElementChild).replaceWith(pageObj.$listGroup)
    // 创建分页按钮并挂载到dom树中
    if (pageData.pageCount > 1) {
      pageObj.genPagination();
      $(container.lastElementChild.firstElementChild).replaceWith(pageObj.$pagination)
    }
  }
  main(newsList,'.main .container.news .content.medias');

  // newsMain(newsList,'.main .container.news .content.medias');
})