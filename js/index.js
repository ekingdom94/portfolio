$(function() {
  // 랜딩 화면 이벤트
  setTimeout(function() {
    $('#landing').fadeOut(1000, function() {
      $(this).hide();
      $('#container').fadeIn(1000);
    });
  }, 3000);

  let isDarkMode = false;

  // 다크모드, 라이트모드 전환
  function toggleMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      $('body').css({ 'background-color': '#333', 'color': '#fff' });
      $('#theme-toggle').text('Switch to light mode ☀');
      $('#favicon').attr('href', 'img/icon/2favicon.ico').css('filter', 'invert(1) brightness(2)');
      $('#homescroll li img').attr('src', 'img/icon/lightmode.png');
      $('#downimg').attr('src', 'img/icon/down2.png');
      $('#upimg').attr('src', 'img/icon/up2.png');
      $('#about2 ul li a').css('border', '1px dashed #fff');
      $('#portfolio').css('color','#fff')
      $('*').css('color', '#fff');

      $('#about2_1 ul li img, #contact2 ul li img').each(function() {
        const src = $(this).attr('src');
        if (!src.includes('_white.png')) {
          $(this).attr('src', src.replace('.png', '_white.png'));
        }
      });
    } else {
      $('body').css({ 'background-color': '#fff', 'color': '#000' });
      $('#theme-toggle').text('Switch to dark mode ✦');
      $('#favicon').attr('href', 'img/icon/1favicon.ico').css('filter', 'none');
      $('#homescroll li img').attr('src', 'img/icon/darkmode.png');
      $('#downimg').attr('src', 'img/icon/down.png');
      $('#upimg').attr('src', 'img/icon/up.png');
      $('#about2 ul li a').css('border', '1px dashed #333');
      $('#portfolio').css('color','#333')
      $('*').css('color', '#333');

      $('#about2_1 ul li img, #contact2 ul li img').each(function() {
        const src = $(this).attr('src');
        if (src.includes('_white.png')) {
          $(this).attr('src', src.replace('_white.png', '.png'));
        }
      });
    }
  }


  // 다크모드 버튼 이벤트
  $('#theme-toggle').on('click', function() {
    toggleMode();
  });

  // homescroll 이미지 클릭 시 모드 전환
  $('#homescroll li img').on('click', function() {
    toggleMode();
  });

  // 스크롤 업/다운 버튼 클릭 이벤트
  $('#upimg').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $(window).scrollTop() - 400 }, 200);
  });

  $('#downimg').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $(window).scrollTop() + 400 }, 200);
  });

  // 메뉴 항목 클릭 시 활성화
  $('.menu ul li').on('click', function() {
    $('.menu ul li').removeClass('gradient-text');
    $(this).addClass('gradient-text');
  });

  // 섹션 네비게이션 스크롤
  const sections = ['#Home', '#about', '#portfolio', '#contact'];
  let currentIndex = 0;

  $(window).on('wheel', function(event) {
    const delta = event.originalEvent.deltaY;
    if ($('html, body').is(':animated')) return;
    if (delta > 0 && currentIndex < sections.length - 1) {
      currentIndex++;
    } else if (delta < 0 && currentIndex > 0) {
      currentIndex--;
    }
    $('html, body').stop().animate({
      scrollTop: $(sections[currentIndex]).offset().top
    }, 500);
  });

  // 스크롤에 따라 메뉴 활성화
  $(window).on('scroll', function() {
    const scrollPosition = $(window).scrollTop();
    sections.forEach((section, index) => {
      if (scrollPosition >= $(section).offset().top - 50) {
        $('.menu ul li').removeClass('gradient-text');
        $('.menu ul li').eq(index).addClass('gradient-text');
      }
    });
  });


  

  // 텍스트 복사 버튼 이벤트
  $('.copy-button').on('click', function() {
    const textToCopy = $(this).data('copy');
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Copied: ' + textToCopy);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  });



  // 포트폴리오 이벤트
  const portfolioData = [
    {
      title: "Portfolio 01",
      subtitle: "Dyson",
      viewLink: "https://ekingdom94.github.io/project_HALO/",
      description: "온라인 쇼핑을 이용하는 다양한 연령대의 사용자에게 최적화된 가독성과 접근성을 제공하기 위해 리뉴얼 ",
      techUsed: ["HTML / CSS / JAVASCRIPT / JQUERY / GITHUB / FIGMA / AI"],
      duration: "20일",
      details: "웹 사이트 리뉴얼 프로젝트로 3인 진행했습니다.",
    },
    {
      title: "Portfolio 02",
      subtitle: "Cherry Market",
      viewLink: "https://example.com/cherry",
      description: "반응형을 활용하여 자연스러운 사용자 경험 제공을 위한 제작  ",
      techUsed: ["FIGMA / AI"],
      duration: "7일",
      details: "UI/UX에 대한 이해와 FIGMA 사용 프로젝트로 3인 진행했습니다.",
    },
    {
      title: "Portfolio 03",
      subtitle: "US,Pet",
      viewLink: "https://example.com/uspet",
      description: "AI를 활용한 반려동물용품 쇼핑몰 제작 발표",
      techUsed: ["POWERPOINT / PHOTOSHOP / AI"],
      duration: "3일",
      details: "사용자 리뷰 기반 추천 알고리즘 적용...",
    },
    {
      title: "Portfolio 04",
      subtitle: "Special tea Coffee Posion",
      viewLink: "https://example.com/coffee",
      description: "아늑한 분위기의 커피숍 웹페이지 제작 발표",
      techUsed: ["POWERPOINT / PHOTOSHOP / AI"],
      duration: "3일",
      details: "커피 메뉴 주문과 예약 시스템을 포함한 웹사이트...",
    },
  ];
  

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 500,
  });



// 포트폴리오 섹션 업데이트 함수
function updatePortfolioSection(index) {
  const data = portfolioData[index];

  // 포트폴리오 내용 업데이트
  document.querySelector(".portfolio_section1 h1").textContent = data.title;
  document.querySelector(".portfolio_section1 h2").textContent = data.subtitle;
  document.querySelector(".btn-view").href = data.viewLink;
  document.querySelector(".content-box p").textContent = data.description;
  document.querySelector(".content-month").textContent = data.duration;
  document.querySelector(".content-info").textContent = data.details;

  // 기술 목록 업데이트
  const techContainer = document.querySelector(".tech-used");
  techContainer.innerHTML = ""; // 기존 내용 완전히 삭제
  data.techUsed.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    techContainer.appendChild(span);
  });
}


  
  // Swiper의 슬라이드 변경 이벤트 처리
  swiper.on('slideChange', function () {
    const realIndex = swiper.realIndex; // 현재 슬라이드의 실제 인덱스
    updatePortfolioSection(realIndex);
  });
  
  // 초기 로드 시 첫 번째 포트폴리오 내용 표시
  updatePortfolioSection(0);
  


});
