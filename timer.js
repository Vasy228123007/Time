{
    var rezyltat = document.getElementById("timer");
    var interval;
    var c = document.getElementById("chas"); // Час
    var m = document.getElementById("min"); // Минуты
    var s = document.getElementById("sekyn"); // Секунды
    var k = document.getElementById("knopka"); // Кнопка Start
    var ks = document.getElementById("knopkastop") // Кнопка Stop
    var i = document.getElementById("img"); // Звездочка
    var error = document.getElementById("error"); // Ошибки
    var audio = new Audio('stop.mp3');    // Музыка
    var music = document.getElementById("music");   // Музыку [Вкл/Выкл]
    var audio = {};
}
    rezyltat.innerText = "00:00:00";
    function startAudio(url) {
        if("pause" in audio) audio.pause();
      
        audio = new Audio(url);
        audio.play();
      }

$("#knopkastop").attr("disabled", true);
k.onclick = function(e) {
    clearInterval(interval);
    var minyt = m.value ? m.value : 0;
    var sekyn = s.value ? s.value : 0;
    var houri = c.value ? c.value : 0;

    if(!c.value){
        c.style="border:1px solid red";
        $("#error").fadeIn();
        error.innerText = "Вы не ввели часы";
        return;
    }
    if(!m.value){
        m.style="border:1px solid red";
        $("#error").fadeIn();
        error.innerText = "Вы не ввели минуты";
        return;
    }
    if(!s.value){
        s.style="border:1px solid red";
        $("#error").fadeIn();
        error.innerText = "Вы не ввели секунды";
        return;
    }
    $("#knopka").attr("disabled", true);
    $("#knopkastop").attr("disabled", false);
    interval = setInterval(function() 
    {
        var houri_txt = (houri<10) ? "0"+houri : houri;
        var minyt_txt = (minyt<10) ? "0"+minyt : minyt;
        var sekyn_txt = (sekyn<10) ? "0"+sekyn : sekyn;
        rezyltat.innerText = houri_txt+":"+minyt_txt+":"+sekyn_txt;
        sekyn = sekyn -1;
        if(sekyn<=-1){
            minyt=minyt-1;
            sekyn=59;
            if(minyt<=0){
                houri = houri -1
                minyt=59
                if(houri<=0){
                    houri=0
                    alert('Таймер оставновлен');
                    clearInterval(interval);
                    $( "#timer" ).fadeOut().delay(100);
                    $( "#timer" ).fadeIn();
                if(music<=0)
                    audio.play();
                }
                $("#knopka").attr("disabled", false);
            }
        }
    }, 1000)
}
i.onclick = function(e) {
    alert('Нажмите CTRl-D, чтобы добавить страницу в закладки.');
}
ks.onclick = function(e) {
    clearInterval(interval);
    rezyltat.innerText = "00:00:00";
    alert('Таймер успешно сбросен.');
    $("#knopka").attr("disabled", false);
}