window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true //可选选项，自动滑动
    })

    //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
    new Swiper('.swiper-container')
    var mySwiper = document.querySelector('.swiper-container').swiper
    mySwiper.slideNext();
}