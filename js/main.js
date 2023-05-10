//main.js
window.addEventListener('load', () => {
  
function addOn(el){
  el.classList.add('on');
}
function removeOn(el){
  el.classList.remove('on');
}

function toggleOn(el){
  el.classList.toggle('on');
}


/* --------------------------------- INFO --------------------------------- */
/* 인포바 우측 Key Info 버튼 관련 */
const btn_info_open = document.querySelector('.info_btn_open');
const btn_info_close = document.querySelector('.info_btn_close');
const info_nav_ul = document.querySelector('.info_nav>ul')
const info_wrap = document.querySelector('.info_wrap');
const info_nav = document.querySelector('.info_nav');
const info_nav_inner = document.querySelector('.info_nav_inner');
const info_content = document.querySelector('.info_content');
const info_inner = document.querySelector('.info_inner');
const logo = document.querySelector('.logo>a')

btn_info_open.addEventListener('click', e =>{
  e.preventDefault();
  addOn(btn_info_open);
  addOn(btn_info_close);
  addOn(info_nav);
  addOn(info_nav_ul)
  addOn(info_nav_inner);
  addOn(info_wrap);
  addOn(info_content);
  addOn(info_inner);
  
})

btn_info_close.addEventListener('click', e =>{
  e.preventDefault();
  removeOn(btn_info_open);
  removeOn(btn_info_close);
  removeOn(info_nav);
  removeOn(info_nav_ul)
  removeOn(info_nav_inner);
  removeOn(info_wrap);
  removeOn(info_content);
  removeOn(info_inner);
})
  
  /* info4 마우스오버 */
const info4_lis = document.querySelectorAll('.info4 ul li a');
info4_lis.forEach((li) =>{
  li.addEventListener('mouseenter', e =>{
    addOn(e.currentTarget.parentNode);
    addOn(e.currentTarget);
  })
  li.addEventListener('mouseleave', e =>{
    removeOn(e.currentTarget.parentNode);
    removeOn(e.currentTarget);
  })  
})


/* --------------------------------- GNB --------------------------------- */
/* gnb 마우스오버 */
const bg = document.querySelector('.bg')
const gnb_lis = document.querySelectorAll('.gnb_nav>ul>li');
const gnb_lis_div = document.querySelectorAll('.gnb_nav>ul>li>div');
const gnb_ul_li_ul_li= document.querySelectorAll('.gnb_nav>ul>li>div>ul>li');


for(let i=0; i<gnb_lis.length-1; i++){
  gnb_lis[i].addEventListener('mouseenter', () =>{
    addOn(gnb_lis_div[i])
    addOn(bg)
  })
  gnb_lis[i].addEventListener('mouseleave', () =>{
    removeOn(gnb_lis_div[i]);
    removeOn(bg)
  })
}

gnb_ul_li_ul_li.forEach((li, index) => {
  li.addEventListener('mouseenter', () =>{
    addOn(gnb_ul_li_ul_li[index])
  })
  li.addEventListener('mouseleave', () =>{
    removeOn(gnb_ul_li_ul_li[index])
  })
});



/* 스크롤 움직임에 따른 header 변화 및 효과 */
const main_visual = document.querySelector('.main_visual')
const business = document.querySelector('.business')
const activity = document.querySelector('.activity')
const newsroom = document.querySelector('.newsroom')
const network = document.querySelector('.network')
const relations = document.querySelector('.relations')
const footer = document.querySelector('#footer')

main_visual.classList.add('on');


let scrollY = window.pageYOffset;

window.addEventListener('scroll', () =>{


window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset;
  let windowHeight = window.innerHeight;
  let scrollHeight = document.documentElement.scrollHeight - windowHeight;

  let scrollPercentage = (scrollTop / scrollHeight) * 100;
  console.log(scrollPercentage)

  if (scrollPercentage >= 5) {
    business.classList.add('on');
  }

  if (scrollPercentage >= 13) {
    activity.classList.add('on');
  }

  if (scrollPercentage >= 52) {
    newsroom.classList.add('on');
  }

  if (scrollPercentage >= 75) {
    network.classList.add('on');
  }

  if (scrollPercentage >= 90) {
    relations.classList.add('on');
  }
  
  if (scrollPercentage >= 97) {
    footer.classList.add('on');
  }
});

  
  let nowscrollY = window.pageYOffset;
  


  /* 스크롤값 200 ~ 400 : 작아짐*/
  if(nowscrollY >= 200 ){
    info_wrap.classList.add('scroll200')
    header_wrap.classList.add('scroll200')
    search_wrap.classList.add('scroll200')
    logo.classList.add('scroll200')

  }
  
  /* 스크롤값 400 이상 : 사라짐 (검색메뉴 또는 gnb 열려있으면 작아진 상태 유지)*/
  if(nowscrollY >= 400 && (!search_inner.classList.contains('on')) && !bg.classList.contains('on')){
    info.classList.add('scroll400')
    header_wrap.classList.add('scroll400')

  }
  
  /* 스크롤값 400보다 크고 스크롤을 올렸을 때 : 작아짐 */
  if(nowscrollY > 400 && scrollY < nowscrollY && !search_inner.classList.contains('on') && !bg.classList.contains('on') ){
    info.classList.add('scroll400')
    header_wrap.classList.add('scroll400')
  } else {
    info.classList.remove('scroll400')
    header_wrap.classList.remove('scroll400')
  }
  
  /* 스크롤값이 200보다 작고 스크롤을 올렸을 때 : 원래대로*/
  if(nowscrollY < 200 && nowscrollY < scrollY){
    info_wrap.classList.remove('scroll200')
    header_wrap.classList.remove('scroll200')
    search_wrap.classList.remove('scroll200')
  }
  
  scrollY = nowscrollY;
});


/* util menu */
/* 언어선택메뉴 */
const btn_util = document.querySelector('.gnb_nav_util>dl>dd:nth-of-type(2)>a');
const btn_util_menu = document.querySelector('.gnb_nav_util>dl>dd:nth-of-type(2)>ul');

btn_util.addEventListener('click', e =>{
  e.preventDefault();
  toggleOn(btn_util)
  toggleOn(btn_util_menu);
})

/* btn_srch, srch_wrap 검색관련 */
const btn_srch = document.querySelector('.btn_srch')
const search_wrap = document.querySelector('.search_wrap');
const search_inner = document.querySelector('.search_inner')

let isbtnOn = 0

btn_srch.addEventListener('mouseenter', e =>{
 
  if(isbtnOn == 0)
    e.currentTarget.style.background = 'url(../images/ico_search_on.png) no-repeat 100% 50%';
  else{
    e.currentTarget.style.background = 'url(../images/ico_close_on.png) no-repeat 100% 50%';
  }
})
btn_srch.addEventListener('mouseleave', e =>{
  if(isbtnOn == 0)
    e.currentTarget.style.background = 'url(../images/ico_search.png) no-repeat 100% 50%';
  else{
    e.currentTarget.style.background = 'url(../images/ico_close.png) no-repeat 100% 50%';
  }
})

btn_srch.addEventListener('click', e =>{  
  
  if(isbtnOn == 0){ isbtnOn = 1;
  btn_srch.style.background = 'url(../images/ico_close.png)'}
  
  else{isbtnOn = 0;
  btn_srch.style.background = 'url(../images/ico_search.png)'
  }
  
  toggleOn(search_wrap)
  toggleOn(search_inner)
})



/* --------------------------------- CONTAINER --------------------------------- */
/* 오토배너 */
const mainvisual_autobanner = document.querySelector('.slide_wrap');
const mainvisual_autobanner_banner = document.querySelectorAll('.slide_wrap .slide');

const mainvisual_autobanner_bar = document.querySelectorAll('.bar')
let bar_index = 0

const banner_btn_prev = document.querySelector('.banner_control .btnPrev');
const banner_btn_next = document.querySelector('.banner_control .btnNext');

  /* 마우스오버 */
const mainvisual_bgeffect = document.querySelectorAll('.auto_banner .bgeffect')

mainvisual_autobanner_banner.forEach((el,index) => {
  el.addEventListener('mouseover', () =>{
    addOn(mainvisual_bgeffect[index])
  })

  el.addEventListener('mouseleave', () =>{
    removeOn(mainvisual_bgeffect[index])
  })
});

  /* 배너 길이 관련 */
let slideLength = mainvisual_autobanner_banner.length;
let autobnnNum = 1;
let slideWidth = mainvisual_autobanner.offsetWidth / slideLength;
window.addEventListener('resize', () =>{
  slideWidth = mainvisual_autobanner.offsetWidth / slideLength;
  mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;
})

  /* 슬라이드효과_슬라이드복사 */
function mainvisual_makeClone() {
  let cloneSlide_first = mainvisual_autobanner_banner[0].cloneNode(true);
  let cloneSlide_last = mainvisual_autobanner_banner[slideLength - 1].cloneNode(true);
  mainvisual_autobanner.append(cloneSlide_first);
  mainvisual_autobanner.insertBefore(cloneSlide_last, mainvisual_autobanner.firstElementChild);
  slideLength += 2;
}
mainvisual_makeClone();

  /* 슬라이드효과_슬라이드 초기화 */
function mainvisual_initClone() {
  mainvisual_autobanner.style.width = `${100 * (slideLength)}%`;
  mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;
}
mainvisual_initClone();

let autoplay = setInterval(() => {
  bar_index++;
  if(bar_index >3)bar_index =0
  mainvisual_autobanner_bar.forEach(el => {
    removeOn(el)
  });
  addOn(mainvisual_autobanner_bar[bar_index])

  autobnnNum++;
  if (autobnnNum <= slideLength -1 ) {
    mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;
    mainvisual_autobanner.style.transition = '0.3s';
  }
  if (autobnnNum === slideLength -1) {
    setTimeout(() => {
      autobnnNum = 1;
      mainvisual_autobanner.style.transform = `translateX(-${slideWidth}px)`;
      mainvisual_autobanner.style.transition = '0s';   
    }, 300);
  }

}, 5000);

banner_btn_next.addEventListener('click', e => {
  e.preventDefault();

  clearInterval(autoplay); // 자동 재생 중지

  bar_index++;
  if(bar_index >3)bar_index =0
  mainvisual_autobanner_bar.forEach(el => {
    removeOn(el)
  });
  addOn(mainvisual_autobanner_bar[bar_index])

  autobnnNum++;
  if (autobnnNum <= slideLength -1 ) {
    mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;
    mainvisual_autobanner.style.transition = '0.3s';
  }
  if (autobnnNum === slideLength -1) {
    setTimeout(() => {
      autobnnNum = 1;
      mainvisual_autobanner.style.transform = `translateX(-${slideWidth}px)`;
      mainvisual_autobanner.style.transition = '0s';   
    }, 300);
  }

  autoplay = setInterval(() => {
    banner_btn_next.click();
  }, 5000); // 자동 재생 다시 시작
});


  /* 이전 버튼 클릭 */
banner_btn_prev.addEventListener('click', e => {
  e.preventDefault();

  bar_index--;
     /* 바 관련 */
  if(bar_index <0)bar_index =3
  mainvisual_autobanner_bar.forEach(el => {
    removeOn(el)
  });
  addOn(mainvisual_autobanner_bar[bar_index])
  
    /* 슬라이드 효과 */
  autobnnNum--;
  if (autobnnNum >= 0 ) {
    mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;
    mainvisual_autobanner.style.transition = '0.3s';
  }
  if (autobnnNum === 0) {
    setTimeout(() => {
      autobnnNum = slideLength - 2;
      mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;
      mainvisual_autobanner.style.transition = '0s';
    }, 300);
  }
  
});



/* 일반배너 */

const normal_banner = document.querySelectorAll('.normal_banner_top ul>li')
const normal_banner_desc = document.querySelectorAll('.banner_top_desc')
const normal_banner_btn_prev = document.querySelector('.normal_banner_top .btnPrev')
const normal_banner_btn_next = document.querySelector('.normal_banner_top .btnNext')
const normal_banner_contents = document.querySelector('.normal_banner_top ul')
const normal_banner_top_content = document.querySelectorAll('.normal_banner_top_content')
const normal_banner_bgeffect = document.querySelectorAll('.normal_banner_top .bgeffect')
const normal_banner_btn = document.querySelectorAll('.normal_banner_top>a')

let page_now = document.querySelector('.page_now')
let page_total = document.querySelector('.page_total')

let pageNum = 1
page_total.innerText = normal_banner_desc.length;
page_now.innerText = pageNum

normal_banner_desc.forEach((el, index) => {
  el.addEventListener('mouseenter', () =>{
    normal_banner_top_content[index].style.backgroundSize = '110%'
    addOn(normal_banner_bgeffect[index])
    normal_banner_btn.forEach(el =>{
      addOn(el)
    })
  })

  el.addEventListener('mouseleave', ()=>{
    normal_banner_top_content[index].style.backgroundSize = '100%'
    removeOn(normal_banner_bgeffect[index])
    normal_banner_btn.forEach(el =>{
      removeOn(el)
    })
  })
});

normal_banner_btn.forEach(el => {
  el.addEventListener('mouseover',() =>{
    addOn(normal_banner_btn_prev)
    addOn(normal_banner_btn_next)
  })
});

let normal_slideLength = normal_banner.length;
let normalbnnNum = 1;
let normal_slideWidth = normal_banner_contents.offsetWidth / normal_slideLength;
window.addEventListener('resize', () =>{
  normal_slideWidth = normal_banner_contents.offsetWidth / normal_slideLength;
  normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`
})

function normalbanner_makeClone() {
  let normal_cloneSlide_first = normal_banner[0].cloneNode(true);
  let normal_cloneSlide_last = normal_banner[normal_slideLength - 1].cloneNode(true);
  normal_banner_contents.append(normal_cloneSlide_first);
  normal_banner_contents.insertBefore(normal_cloneSlide_last, normal_banner_contents.firstElementChild);
}
normalbanner_makeClone();

function normalbanner_initClone() {
  normal_slideLength += 2;
  normal_banner_contents.style.width = `${100 * (normal_slideLength)}%`;
  normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
}
normalbanner_initClone();

normal_banner_btn_next.addEventListener('click', e =>{
  e.preventDefault();
  normalbnnNum++;
  if (normalbnnNum <= normal_slideLength -1 ) {
    normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
    normal_banner_contents.style.transition = '0.3s';
  }
  if (normalbnnNum === normal_slideLength -1) {
    setTimeout(() => {
      normalbnnNum = 1;
      normal_banner_contents.style.transform = `translateX(-${normal_slideWidth}px)`;
      normal_banner_contents.style.transition = '0s';   
    }, 400);
  }
})
normal_banner_btn_prev.addEventListener('click', e =>{
  e.preventDefault();
  normalbnnNum--;
  if (normalbnnNum >= 0 ) {
    normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
    normal_banner_contents.style.transition = '0.3s';
  }
  if (normalbnnNum === 0) {
    setTimeout(() => {
      normalbnnNum = normal_slideLength - 2;
      normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
      normal_banner_contents.style.transition = '0s';
    }, 400);
  }
})


/* BUSINESS */

const business_contents = document.querySelectorAll('.business_content')
const business_contents_poster = document.querySelectorAll('.business_content>.poster>img')
const business_contents_video = document.querySelectorAll('.business_content video')
const business_contents_pause = document.querySelectorAll('.business_content .btn_pause')
const business_contents_desc = document.querySelectorAll('.business_content .desc')
const business_desc_btn_group = document.querySelectorAll('.business_content .desc_btn_group')
const business_btn_pause = document.querySelectorAll('.business_content>a')
const business_bgeffect = document.querySelectorAll('.business_content .bgeffect')

for(let i=0; i<business_contents.length; i++){
  business_contents[i].addEventListener('mouseenter', () =>{
    business_contents.forEach(el => {
      el.style.width = '17%'
    });
    business_contents[i].style.width = '55%'
    addOn(business_contents_poster[i])
    business_contents_video[i].play();
    addOn(business_contents_desc[i])
    addOn(business_desc_btn_group[i])
    addOn(business_btn_pause[i])
    addOn(business_bgeffect[i])
  })

  business_contents[i].addEventListener('mouseleave', () =>{
    business_contents.forEach((el) => {
      el.style.width = '24.25%'
    });
    removeOn(business_contents_poster[i])
    business_contents_video[i].pause();
    business_contents_video[i].currentTime = 0;
    removeOn(business_contents_desc[i])
    removeOn(business_desc_btn_group[i])
    removeOn(business_btn_pause[i])
    business_contents_pause[i].classList.remove('playing')
    removeOn(business_bgeffect[i])
  })
}

business_btn_pause.forEach((el,index) => {
  el.addEventListener('click', e =>{
    e.preventDefault();
    if(!e.currentTarget.classList.contains('playing'))
    {e.currentTarget.classList.add('playing')
    }else{
      e.currentTarget.classList.remove('playing')
    }

    if(e.currentTarget.classList.contains('playing'))
    {business_contents_video[index].pause()}
    else{business_contents_video[index].play()}
  })
});


/* ACTIVITY */
const activity_contents = document.querySelectorAll('.activity_contents')

const activity_btn_pause = document.querySelectorAll('.activity_contents>a')
const activity_contents_video = document.querySelectorAll('.activity_contents video')
const activity_bgeffect = document.querySelectorAll('.activity_contents .bgeffect')


activity_contents.forEach((el, index) =>{
  
  el.addEventListener('mouseenter', e =>{
    addOn(e.currentTarget.querySelector('.desc'))
    addOn(e.currentTarget.querySelector('.desc_btn_group'))

    e.currentTarget.style.backgroundSize='110% auto'
    
    addOn(activity_bgeffect[index])
    
  })

  el.addEventListener('mouseleave', e =>{
    removeOn(e.currentTarget.querySelector('.desc'))
    removeOn(e.currentTarget.querySelector('.desc_btn_group'))

    e.currentTarget.style.backgroundSize='100% auto'

    removeOn(activity_bgeffect[index])
  })
})

activity_btn_pause.forEach((el,index) => {
  el.addEventListener('click', e =>{
    e.preventDefault();
    if(!e.currentTarget.classList.contains('playing'))
    {e.currentTarget.classList.add('playing')
    }else{
      e.currentTarget.classList.remove('playing')
    }

    if(e.currentTarget.classList.contains('playing'))
    {activity_contents_video[index].pause()}
    else{activity_contents_video[index].play()}
  })
});

/* NEWSROOM */

const newsroom_lis = document.querySelectorAll('.newsroom_content>ul>li>a')
const newsroom_lis_menu = document.querySelectorAll('.newsroom_content>ul>li>ul')

const newsroom_btn_prev = document.querySelector('.newsroom .btnPrev')
const newsroom_btn_next = document.querySelector('.newsroom .btnNext')

let newsroom_ul = document.querySelector('.newsroom_content>ul>li>ul.on');

let newsroom_ul_width = newsroom_ul.offsetWidth
  window.addEventListener('resize', ()=>{
    
    newsroom_ul_width = newsroom_ul.offsetWidth
    newsroom_lis_menu.forEach(el => {
      el.style.left = `calc(4rem - ${newsbnnNum * newsroom_ul_width / 10}px)`;
      if (newsbnnNum >= 7) {newsbnnNum = 7;
        el.style.left = `calc(12rem - ${newsbnnNum * newsroom_ul_width / 10}px)`;   
      }
    });
    
    })
let newsbnnNum = 0

for(let i=0; i<newsroom_lis.length; i++){
  newsroom_lis[i].addEventListener('click', e=>{
    e.preventDefault();
    for(let j=0; j<newsroom_lis.length; j++){
      removeOn(newsroom_lis[j])
      removeOn(newsroom_lis_menu[j])
    }
    addOn(newsroom_lis[i])
    addOn(newsroom_lis_menu[i])
  }) 
}

newsroom_btn_next.addEventListener('click', e => {
  
  e.preventDefault();
  newsbnnNum++;
  newsroom_lis_menu.forEach(el => {
    el.style.left = `calc(4rem - ${newsbnnNum * newsroom_ul_width / 10}px)`;
    if (newsbnnNum >= 7) {newsbnnNum = 7;
      el.style.left = `calc(12rem - ${newsbnnNum * newsroom_ul_width / 10}px)`;   
    }
  });
  
 
 
});

newsroom_btn_prev.addEventListener('click', e=>{
  
  e.preventDefault();
  newsbnnNum--;
  newsroom_lis_menu.forEach(el => {
  if (newsbnnNum <= 0){newsbnnNum=0}
  el.style.left = `calc(4rem - ${newsbnnNum * newsroom_ul_width / 10}px)`

  if (newsbnnNum == 7){
    el.style.left = `calc(12rem - ${newsbnnNum * newsroom_ul_width / 10}px)`}
  })
})

/* NETWORK */

const network_lis = document.querySelectorAll('.network_area_list>ul>li')
const network_lis_menu = document.querySelector('.network_area_headline')

let network_ul = document.querySelector('.newsroom_content>ul>li>ul.on');
let network_ul_width = network_ul.offsetWidth

window.addEventListener('resize', ()=>{
  network_ul_width = network_ul.offsetWidth
  })

for(let i=0; i<network_lis.length; i++){
  network_lis[i].addEventListener('click', e=>{
    e.preventDefault();
    
    network_lis.forEach(lis => {
      removeOn(lis)
    });
    addOn(network_lis[i])
    
    network_lis_menu.style.transform = `translateX(-${100 / network_lis.length * i}%)`
    
  });
}

/* --------------------------------- FOOTER ---------------------------------*/
/* FOOTER */

const footer_link = document.querySelectorAll('.footer_wrap>ul>li');
const footer_link_ethic = document.querySelector('.footer_wrap>ul>li>ul');

const footer_related = document.querySelector('.footer_related>ul>li')
const footer_related_list = document.querySelector('.footer_related>ul>li>ul')

footer_link[3].addEventListener('click', e=>{
  e.preventDefault();
  removeOn(footer_related_list)
  toggleOn(footer_link_ethic)
})

footer_related.addEventListener('click', e =>{
  e.preventDefault();
  removeOn(footer_link_ethic)
  toggleOn(footer_related_list);
})





/* --------------------------------- 모바일, 태블릿 스크롤 & 미디어쿼리 --------------------------------- */


/* 모바일 메뉴 열기 버튼 */
const mob_menu_btn = document.querySelector('.mob_menu_btn');
const mob_menu = document.querySelector('.mob_menu');
const body = document.querySelector('body');

mob_menu_btn.addEventListener('click', e => {
  e.preventDefault();
  toggleOn(mob_menu_btn);
  toggleOn(mob_menu);


  body.classList.toggle('no-scroll');

  setTimeout(() => {
    slideWidth = mainvisual_autobanner.offsetWidth / slideLength;
    mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;

    normal_slideWidth = normal_banner_contents.offsetWidth / normal_slideLength;
    normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
  }, 100);
  
});


/* 모바일 GNB */
const mob_gnb = document.querySelectorAll('.mob_gnb_nav>ul>li')
const mob_gnb_menu = document.querySelectorAll('.mob_gnb_nav>ul>li>ul')

mob_gnb.forEach((el, index) => {
  el.addEventListener('click', e=>{
    e.preventDefault();
    toggleOn(mob_gnb_menu[index]);
    toggleOn(mob_gnb[index].querySelector('a'))

  })  
});

/* 태블릿 이상(1024px+++) */
const info = document.querySelector('.info')
const header_wrap = document.querySelector('.header_wrap')



let pageX = window.innerWidth

const newsroom_more = document.querySelector('.newsroom .more');
window.addEventListener('resize', ()=>{
  pageX = window.innerWidth
  /* 더보기버튼(뉴스룸, 네트워크) */
  if(pageX<769){
    newsroom_more.innerText = '더보기'
  }else if(pageX>=769){
    newsroom_more.innerText = '뉴스룸 더보기'
  }
})



/* 모바일 Info 버튼 */

if(pageX <= 640){

btn_info_open.addEventListener('click' ,() => {

  body.classList.toggle('no-scroll');

  setTimeout(() => {
    slideWidth = mainvisual_autobanner.offsetWidth / slideLength;
    mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;

    normal_slideWidth = normal_banner_contents.offsetWidth / normal_slideLength;
    normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
  }, 100);
  
});


btn_info_close.addEventListener('click', () =>{
  
  body.classList.toggle('no-scroll');

  setTimeout(() => {
    slideWidth = mainvisual_autobanner.offsetWidth / slideLength;
    mainvisual_autobanner.style.transform = `translateX(-${autobnnNum * slideWidth}px)`;

    normal_slideWidth = normal_banner_contents.offsetWidth / normal_slideLength;
    normal_banner_contents.style.transform = `translateX(-${normalbnnNum * normal_slideWidth}px)`;
  }, 100);
  
})
}
})
