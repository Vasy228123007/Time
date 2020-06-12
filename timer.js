var rezyltat = document.getElementById("timer");

var c = document.getElementById("chas"); // Час
var m = document.getElementById("min"); // Минуты
var s = document.getElementById("sekyn"); // Секунды
var k = document.getElementById("knopka"); // Кнопка

rezyltat.innerText = "00:00:00";

k.onclick = function(e) {
    //alert('Таймер успешно запущен'); //Уведомления о запуске таймера
    var minyt = m.value ? m.value : 0;
    var sekyn = s.value ? s.value : 0;
    var houri = c.value ? c.value : 0;

    var interval = setInterval(function() {
        rezyltat.innerText = houri+":"+minyt+":"+sekyn;
        sekyn = sekyn -1;
        if(houri<=0){
            houri=0
        }
        if(minyt<=0){
            houri = houri -1
            minyt=59
        }
        if(sekyn<=-1){
            minyt=minyt-1;
            sekyn=59;
            if(minyt<=0){
                if(houri<=0){
                    alert('Таймер завершон');
                    clearInterval(interval);
                }
            }
        }
    }, 1000)
}