$(function () {
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

  // 定义全局需要的数据
  var container;
  var pageData;
  // 初始化 更新数据并渲染数据到相关dom元素当中
  function main(newsList,selector) {
    // 查找容器，将新闻列表及分页按钮放入其中
    container = $(selector).children()[1];
    console.log(container);
    // 创建分页相关数据对象
    pageData = new PageData({ page: 1, pageSize: 10, num: 10, count: 300 });
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
  Object.defineProperty(window,'newsMain',{
    value:main
  })

})