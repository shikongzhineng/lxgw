$(function () {
  // 合作伙伴
  var list = [
    {
      link: '',
      img: '1.jpg'
    },
    {
      link: '',
      img: '2.jpg'
    },
    {
      link: '',
      img: '3.jpg'
    },
    {
      link: '',
      img: '4.jpg'
    },
  ]
  
  // 初始化数据
  for (let i=5;i<17;i++){
    list.push({
      link:'',
      img:`${i}.jpg`
    })
  }
  list.push({link:'',img:'81.jpg'});
  // console.log(list[15])
  for (let i=18;i<82;i++){
    list.push({
      link:'',
      img:`${i-1}.jpg`
    })
  }

  var container = $('.content.links>.article').children()[1].firstElementChild;
  container.appendChild(createList(list))

  // 
  function createList(list) {
    var fragment = document.createDocumentFragment();
    list.forEach((elem, i) => {
      $(
        `<div class="col">
          <a href="${elem.link}">
            <img src="/images/about/links/${elem.img}" alt="">
          </a>
        </div>`
      ).appendTo(fragment);
    })
    console.log(fragment);
    return fragment;
  }
})