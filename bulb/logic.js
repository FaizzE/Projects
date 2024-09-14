let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");
let btext = document.querySelector("button")

let flag = 1;

btn.addEventListener('click', function(){
    if(flag % 2 === 1){
        bulb.style.backgroundColor = "cyan";
        btext.innerHTML = "ON";
        flag++;
        console.log("Bulb is ON");
    }
    else{
        bulb.style.backgroundColor = "white";
        btext.innerHTML = "OFF";
        console.log("Bulb is Off")
        flag++;
    }
})