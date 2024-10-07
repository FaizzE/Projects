var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.color = 'red'
    love.style.transform = 'translate(-50%,-50%) scale(2)';
    love.style.opacity = 0.8;
    console.log("Someone Liked your Post");

    setTimeout(()=> {
        love.style.opacity = 0;
    },1000)
    setTimeout(()=> {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000)
})