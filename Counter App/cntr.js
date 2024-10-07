const minus  = document.getElementById('decr')
const plus = document.getElementById('incr')
let cntrValue = parseInt(document.getElementById("cntr").textContent, 10);

plus.addEventListener('click',function() {
    cntrValue++
    document.getElementById("cntr").textContent = cntrValue;

})

minus.addEventListener('click',function() {
    cntrValue--;
    document.getElementById("cntr").textContent = cntrValue;

})










// Dark Mode Code
const body = document.getElementById('wrapper')
const darkMode = document.getElementById('dark')
const cnt = document.getElementById('cntr')

var flag = 1

darkMode.addEventListener('click', function() {
        if(flag%2==1){
            body.style.backgroundColor = 'black'
            cnt.style.backgroundColor = 'white'
            flag++
        }else{
            body.style.backgroundColor = 'antiquewhite'
            cnt.style.backgroundColor = 'antiquewhite'
            flag++
        }
});