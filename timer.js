var rezyltat = document.getElementById("timer");
//rezyltat.innerText = "Проверка";

var c = document.getElementById("chas"); // Час
var m = document.getElementById("min"); // Минуты
var s = document.getElementById("sekyn"); // Секунды
var k = document.getElementById("knopka"); // Кнопка

k.onclick = function(e) {
    //alert('Таймер успешно запущен'); //Уведомления о запуске таймера
    var minyt = m.value;
    var sekyn = s.value;

    var interval = setInterval(function() {
        rezyltat.innerText = minyt+":"+sekyn;
        sekyn = sekyn -1;
        if(minyt<=0){
            minyt=0
        }
        if(sekyn<=0){
            minyt=minyt-1;
            sekyn=59;
            if(minyt<=0){
                alert('Таймер завершон');
                clearInterval(interval);
            }
        }
    }, 1000)
}