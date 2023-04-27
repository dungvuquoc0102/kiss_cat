//index
//menu
const toggle = document.querySelector(".header-menu-toggle");
const menu = document.querySelector(".header-menu");
const activeClass = "is-show";
toggle.addEventListener("click", () => {
    menu.classList.add(activeClass);
});
window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".fas.fa-bars.icon-menu")) {
        menu.classList.remove(activeClass);
    }
});

//banner
$(".banner-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// product
$(".product-img-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".product-img-list"
});
$(".product-img-list").slick({
    // centerMode: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-img-main",
    dots: false,
    arrows: false,
    focusOnSelect: true
});

const toggleMain = document.querySelector(".description-main");
const toggleMore = document.querySelector(".description-more");
const descMainDetail = document.querySelector(".description-main-detail");
const descMoreDetail = document.querySelector(".description-more-detail");

if (toggleMain) {
    toggleMain.addEventListener("click", () => {
        descMainDetail.style.display = "block";
        descMoreDetail.style.display = "none";
    });
}

if (toggleMore) {
    toggleMore.addEventListener("click", () => {
        descMainDetail.style.display = "none";
        descMoreDetail.style.display = "block";
    });
}

// swiper slider
var swiper1 = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
});

var swiper2 = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    thumbs: {
        swiper: swiper1
    }
});

window.onload = () => {
    var scroll_y = this.scrollY;
    if (scroll_y > 200) {
        console.log("hello");
        document.querySelector("header").classList.add("stuck");
    }
};

window.addEventListener("scroll", () => {
    var scroll_y = this.scrollY;
    if (scroll_y > 200) {
        document.querySelector("header").classList.add("stuck");
    } else {
        document.querySelector("header").classList.remove("stuck");
    }
});
