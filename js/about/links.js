$(function () {
  // 合作伙伴
  var list = [];
  var links=[
    'http://www.spacechina.com/','http://www.casic.com.cn/','http://www.cetc.com.cn/',
    'http://www.cec.com.cn/','http://www.cssc.net.cn/','http://www.csic.com.cn/',
    'http://www.norincogroup.com.cn/','http://www.csgc.com.cn/','http://www.avic.com.cn/',
    'http://www.cnecc.com/','http://www.cnnc.com.cn/','http://www.sugon.com/',
    'http://www.lemote.com/','http://www.arcie.org/','http://www.prophet.net.cn/',
    'http://www.allgo.com.cn/','http://www.hangpu-topsys.com/','http://www.dcits.com/',
    'http://www.inspur.com/','http://www.advantech.com.cn/','http://www.evoc.cn/',
    'http://www.cs2c.com.cn/','http://www.i-soft.com.cn/','https://www.deepin.org/',
    'http://www.aisino.com/','http://www.taiji.com.cn/','http://www.thtf.com.cn/',
    'http://www.neusoft.com/','http://www.huadi.com.cn/','http://www.westone.com.cn/','http://www.100trust.cn/',
    'http://www.maipu.cn/','http://www.kyland.com.cn/','http://www.ruijie.com.cn/',
    'http://www.powerleader.com.cn/','http://www.icpc.cn/','http://www.wfdz.com.cn/',
    'http://www.sunlune.com/','http://www.venustech.com.cn/','http://www.leadsec.com.cn/',
    'http://www.topsec.com.cn/','http://www.centecnetworks.com/','http://www.bdcom.com.cn/',
    'http://www.ylnetworks.com/','http://www.supcon.com/','http://www.sgri.sgcc.com.cn/',
    'http://www.scjt.cc/','http://bhzt.cnpc.com.cn/','http://www.kingsoft.com/',
    'http://www.cvicse.com/','http://www.greatwall.cn/','http://www.chinasofti.com/',
    'http://www.zte.com.cn/','http://www.gwi.com.cn/','http://www.realserver.com.cn/',
    'http://www.bjsasc.com/','http://www.shentongdata.com/','http://www.dameng.com/',
    'http://www.kingbase.com.cn/','http://www.tongtech.com/','http://www.inforbus.com/',
    'http://www.apusic.com/','http://www.dhcc.com.cn/','http://www.thunisoft.com/',
    'http://www.coretek.com.cn/','http://www.loongstore.com.cn/','http://www.net-gov.com.cn/',
    'http://www.foxitsoftware.cn/','http://www.suwell.cn/','/about/links','http://www.fiberhome.com/',
    'http://www.centerm.com/','/about/links','http://www.legendsec.com/','/about/links',
    'http://www.czctech.com/','http://www.loongmasses.cn/','http://www.cloudkirin.com/',
    'http://www.bjtengling.com/','http://www.strontech.com/','http://www.easted.com.cn/'

  ]
  // 初始化数据
  for (let i=0;i<16;i++){
    list.push({
      link:links[i],
      img:`${i+1}.jpg`
    })
  }
  list.push({link:links[16],img:'16_1.jpg'});
  // console.log(list[15])
  for (let i=17;i<81;i++){
    list.push({
      link:links[i],
      img:`${i}.jpg`
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
          <a href="${elem.link}" target="_blank">
            <img src="/images/about/links/${elem.img}" alt="">
          </a>
        </div>`
      ).appendTo(fragment);
    })
    console.log(fragment);
    return fragment;
  }
})