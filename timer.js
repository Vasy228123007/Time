var rezyltat = document.getElementById("timer");
//rezyltat.innerText = "Проверка";

var c = document.getElementById("chas"); // Час
var m = document.getElementById("min"); // Минуты
var s = document.getElementById("sekyn"); // Секунды
var k = document.getElementById("knopka"); // Кнопка

k.onclick = function(e) {
    //alert('Таймер успешно запущен'); //Уведомления о запуске таймера
    console.log(c.value);
    console.log(m.value);
    console.log(s.value);
}