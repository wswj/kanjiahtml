window.onload = function() {
    var currentDate, currentTime, next;
    var timer = document.getElementById("timer");
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
        timer.innerText = "距活动结束还有" + d + "天" + h + "小时" + m + "分钟" + s + "秒";

    }, 1000);
    var touxiang = document.getElementById("touxiang");
    var txhtml = "";
    var list = ["/img/tx1.jpg", "/img/tx2.jpg"];
    for (var i = 0; i < list.length; i++) {
        txhtml += '<img src=' + list[i] + ' style="z-index: ' + (list.length - i) + '; transform:translateX(' + i * 10 + 'px)">';
    }
    alert(txhtml);
    touxiang.innerHTML = txhtml;
}