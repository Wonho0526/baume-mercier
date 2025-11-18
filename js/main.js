$(".menu").hide();

$(".gnb li").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");

    let gnb_menu = $(".gnb li").index(this);
    $(".menu").eq(gnb_menu).fadeToggle(300).siblings(".menu").fadeOut(300);

    // 메뉴에 active 같이 부여
    if ($(".gnb li.active").length > 0) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
});

$(".mgnb").hide()
$(".btn_ham").click(function () {
    $(this).stop().toggleClass("active")
    $("#header").addClass("active")
    $(".mgnb").stop().slideToggle(300);
    $("body").css("max-height", "1000px")
    if ($(this).hasClass("active")) {
        $(".sub_menu").hide()
    } else {

    }
});

$(".mgnb li").click(function () {
    $(this).find(".mgnb_category").toggleClass("active");
    $(this).find(".sub_menu").stop().slideToggle();
    $(this).siblings().find(".sub_menu").stop().slideUp();
});


$(".search_menu").hide();

$(".search").click(function () {
    $(".search_menu").stop().fadeIn(300);

    if ($(".gnb li.active").length > 0) { // 서치 눌렀을때 메뉴 켜져있으면 끄기
        $(".gnb li.active").removeClass("active");
        $("#header.active").removeClass("active");
        $(".menu").fadeOut();
    } else {

    }
});

$(".search_menu .btn_close").click(function () {
    $(".search_menu").stop().fadeOut(300)
});

$(window).on('scroll', function () {
    let scrollY = $(window).scrollTop();
    let triggerHeight = 600; // 스크롤 기준 높이

    if (scrollY > triggerHeight) {
        $('#header').addClass('active');
    } else {
        $('#header').removeClass('active');
    }
});

$(".language").hide();
$(".language ol").hide();
$(".language ol").eq(0).show();
$(".world").click(function () {
    $(".language").fadeIn(100)
    $("body").addClass("popup")
});
$(".region li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let lang = $(".region li").index(this)
    $(".lang_wrap ol").eq(lang).stop().fadeIn().siblings(".lang_wrap ol").fadeOut(100)
});

$(".lang_wrap .btn_close, .language .dim").click(function () {
    $(".language").fadeOut().parents(".popup").removeClass("popup")
});



const img_list = new Swiper(".img_list", {
    slidesPerView: 1,
    breakpoints: {
        700: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".img_next",
        prevEl: ".img_prev",
    },
    loop: true
});
const baumatic_list = new Swiper(".baumatic_list", {
    slidesPerView: 1,
    breakpoints: {
        700: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".list_next",
        prevEl: ".list_prev",
    },

    loop: true
});


$(".manual_txt li").hide()
$(".manual_txt li").eq(0).show()
$(".manual_img li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let manual_txt = $(".manual_img li").index(this);
    $(".manual_txt li").eq(manual_txt).fadeIn(300).siblings(".manual_txt li").hide();
});


$(".service_txt_dep").eq(0).show()
$(".service_list ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let service_txt = $(".service_list ul li").index(this)
    $(".service_txt_dep").eq(service_txt).fadeIn(300).siblings(".service_txt_dep").hide();
});


