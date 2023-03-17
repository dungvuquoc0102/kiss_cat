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
    // centerMode: true,
    focusOnSelect: true,
    arrows: false
});

// const toggleMain = document.querySelector(".description-main");
// const toggleMore = document.querySelector(".description-more");
// const descMainDetail = document.querySelector(".description-main-detail");
// const descMoreDetail = document.querySelector(".description-more-detail");
// const showDescDetail = "show-desc-detail";
// const removeDescDetail = "remove-desc-detail";

// descMainDetail.classList.remove(removeDescDetail);
// descMainDetail.classList.add(showDescDetail);

// descMoreDetail.classList.remove(showDescDetail);
// descMoreDetail.classList.add(removeDescDetail);

// toggleMain.addEventListener("click", () => {
//     // alert("1");
//     descMainDetail.classList.remove(removeDescDetail);
//     descMainDetail.classList.add(showDescDetail);

//     descMoreDetail.classList.remove(showDescDetail);
//     descMoreDetail.classList.add(removeDescDetail);
// });
// toggleMore.addEventListener("click", () => {
//     // alert("1");
//     descMainDetail.classList.remove(showDescDetail);
//     descMainDetail.classList.add(removeDescDetail);

//     descMoreDetail.classList.remove(removeDescDetail);
//     descMoreDetail.classList.add(showDescDetail);
// });
