let isim = prompt("isminizi giriniz");
let myName = document.querySelector("#myName");


myName.innerHTML = isim;

function check(i){
    if (i< 10){
        return "0"+i;
    }
    return i;
}

let myClock = document.getElementById('myClock')
function showTime() {
    let dt = new Date();
    let hour = check(dt.getHours());
    let min = check(dt.getMinutes());
    let sec = check(dt.getSeconds());

    let zaman = hour+":"+min+":"+sec;

    document.getElementById("myClock").innerHTML= zaman;
} 

setInterval(showTime,1000);

