'use strict';

{
  // ーーーースライドラップ開始ーーーー
  const owlItems = document.querySelectorAll('.owl-item');
  const owlImg = document.querySelectorAll('.owl-img');
  const colors = document.querySelectorAll('.colored');
  const grays = document.querySelectorAll('.gray-scale');
  const slideItemTops = document.querySelectorAll('.slide-item-top');
  const actives = document.getElementsByClassName('active');

  let activeIndex = 0;

  slideItemTops[activeIndex].classList.add('active');

  owlItems.forEach((owlItem, index) => {
    owlItem.addEventListener('click', () => {
      if (!(index === activeIndex)) {
        slideItemTops[activeIndex].classList.remove('active');
        owlImg[activeIndex].classList.remove('open');
        colors[activeIndex].classList.add('hidden');
        grays[activeIndex].classList.remove('hidden');
        activeIndex = index;
        slideItemTops[activeIndex].classList.add('active');
        owlImg[activeIndex].classList.add('open');
        grays[activeIndex].classList.add('hidden');
        colors[activeIndex].classList.remove('hidden');
      }

    });
  });

  // owlItems.forEach((hovering, index) => {
  //   hovering.addEventListener('mouseover', () => {
  //     if (!(index === activeIndex)) {
  //         colors[activeIndex].classList.remove('hidden');
  //         grays[activeIndex].classList.add('hidden');
  //       colors[Index].classList.remove('hidden');
  //       grays[Index].classList.add('hidden');
  //       activeIndex = index;
  //       colors[activeIndex].classList.remove('hidden');
  //       grays[activeIndex].classList.add('hidden');
  //     }
  //   });
  // });

  // owlItems.forEach((hovering, index) => {
  //   hovering.addEventListener('mouseout', () => {
  //     if (!(index === activeIndex)) {
  //       colors[activeIndex].classList.add('hidden');
  //       grays[activeIndex].classList.remove('hidden');
  //       colors[Index].classList.remove('hidden');
  //       grays[Index].classList.add('hidden');
  //       activeIndex = index;
  //       colors[activeIndex].classList.add('hidden');
  //       grays[activeIndex].classList.remove('hidden');
  //     }
  //   });
  // });

  // ーーーースライドラップ終了ーーーー

  // ーーーートップナビ　li　クリック　開始ーーーー
  // const lists = document.querySelectorAll('.top-nav li');

  // lists.forEach((list, index) => {
  //   list.addEventListener('click', () => {
  //     let href = this.querySelector('a').getAttribute('href');
  //     location.href = href;
  //   });
  // });
  // ーーーートップナビ　li　クリック　終了ーーーー

  // ーーーートップナビ　メニュードロップダウン　開始ーーーー
  const dropLists = document.querySelectorAll('.dropdown');
  const topLists = document.querySelectorAll('.top-nav li');

  let timeoutId = null;

  topLists.forEach((topList, index) => {
    topList.addEventListener('mouseenter', () => {
      timeoutId = setTimeout(() => {
        dropLists[index].classList.add('open');
      }, 500);
    });
  });

  topLists.forEach((topList, index) => {
    topList.addEventListener('mouseleave', () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      dropLists[index].classList.remove('open');
    });
  });


  // const dropLists = document.querySelectorAll('.dropdown');
  // const topLists = document.querySelectorAll('.top-nav li');

  // let timeoutId = null;

  // topLists.forEach((topList, index) => {
  //   topList.addEventListener('mouseenter', () => {
  //     timeoutId = setTimeout(() => {
  //       dropLists[index].classList.add('open');
  //     }, 400);
  //   });
  //   topList.addEventListener('mouseleave', () => {
  //     if (timeoutId !== null) {
  //       clearTimeout(timeoutId);
  //       timeoutId = null;
  //     }
  //     dropLists[index].classList.remove('open');
  //   });
  // });
  
  // ーーーートップナビ　メニュードロップダウン　終了ーーーー

  // ーーーー　検索ボックス　開始ーーーー
  const searchBar = document.querySelector('.search-bar');
  const utility = document.querySelector('.utility')
  const searchBtn = document.querySelector('.fa-search');
  const searchClear = document.querySelector('.search-bar a')

  searchBtn.addEventListener('click', () => {
    searchBar.classList.add('open');
    utility.classList.add('hidden');
  });

  searchClear.addEventListener('click', () => {
    searchBar.classList.remove('open');
    utility.classList.remove('hidden');
  });
  // ーーーー　検索ボックス　終了ーーーー

  // ーーーー　言語メニュー　開始ーーーー
  const globalIcon = document.querySelector('.global-icon');
  const langMenu = document.querySelector('.lang-menu');
  const globalOverlay = document.getElementById('global-overlay');

  globalIcon.addEventListener('click', () => {
    if (langMenu.classList.contains('open')) {
      langMenu.classList.remove('open');
      globalOverlay.classList.remove('active');
      globalIcon.classList.add('active');
    } else {
      langMenu.classList.add('open');
      globalOverlay.classList.add('active');
      globalIcon.classList.add('active');
    }
  });

  globalOverlay.addEventListener('click', () => {
    langMenu.classList.remove('open');
    globalOverlay.classList.remove('active');
    globalIcon.classList.remove('active');
  });
  // ーーーー　言語メニュー　終了ーーーー

  // ーーーー　ハンバーガーメニュー　開始ーーーー
  $(function () {  //ページの内容（HTMLやCSSなど）を全て読み込み準備が整ったら実行
    $('.menu-toggle').on('click', function () {  //.menu-toggleがクリックされた時の処理
      $(this).toggleClass('active');  //.activeを付ける・外す
      $('.mega-mobile').toggleClass('open');  //.activeを付ける・外す
    });
  });

  // --言語メニュー開く
  $('.lang-mobile-selecter').on('click', function () {
    $('.mega-lang-menu').addClass('open');
    $('.mega-back').on('click', function () {
      $('.mega-lang-menu').removeClass('open');
    });
  });


  // ーーーー　ハンバーガーメニュー　終了ーーーー

  // ---slick.js　開始---

  // $(function () {
  //   $('#slick-slide').slick();

  // });


}