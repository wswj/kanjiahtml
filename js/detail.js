window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true //可选选项，自动滑动
    })

    //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
    new Swiper('.swiper-container')
    var mySwiper = document.querySelector('.swiper-container').swiper
    mySwiper.slideNext();
    var currentDate, currentTime, next;
    var day = document.getElementById("day");
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    var nexttime = new Date("2020/9/11 12:00");
    setInterval(function() {
        currentDate = new Date();
        currentTime = currentDate.getTime();
        next = nexttime.getTime();
        allTime = next - currentTime;
        //转化
        secondes = parseInt(allTime / 1000);
        var d = parseInt(secondes / 3600 / 24);
        var h = parseInt(secondes / 3600 % 24);
        var m = parseInt(secondes / 60 % 60);
        var s = parseInt(secondes % 60);
        day.innerText = addzero(d);
        hour.innerText = addzero(h);
        minute.innerText = addzero(m);
        second.innerText = addzero(s);
    }, 1000);
    // var touxiang = document.getElementById("touxiang");
    // var txhtml = "";
    // var list = ["/img/tx1.jpg", "/img/tx2.jpg"];
    // for (var i = 0; i < list.length; i++) {
    //     txhtml += '<img src=' + list[i] + ' style="z-index: ' + (list.length - i) + '; transform:translateX(' + i * 10 + 'px)">';
    // }
    // alert(txhtml);
    // touxiang.innerHTML = txhtml;
}

function addzero(time) {
    if (time > 9) {
        return time;
    } else {
        return "0" + time;
    }
}