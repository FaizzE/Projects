var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");
var timeout;

main.addEventListener("mousemove", function(move){
    cursor.style.left = move.pageX + "px";
    cursor.style.top = move.pageY + "px";
    
    cursor.style.opacity = "1"; 
    cursor.style.transform = "scale(1.2)";
    console.log("movement");
    
    // clearTimeout(timeout);

    timeout = setTimeout(function() {
        cursor.style.opacity = "0"; 
        cursor.style.transform = "scale(1)"; 
    }, 0.5); 
});
