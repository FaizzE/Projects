var sstatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

let flag = 1;

addFriend.addEventListener('click', function(){
    if(flag % 2 == 1){
        sstatus.innerHTML = "Friends"
        sstatus.style.color = "green"
        flag++;
        console.log("Yes, We are Friends")
    }else{
        sstatus.innerHTML = "Stranger"
        sstatus.style.color = "red"
        flag++;
        console.log("We are Not Friend")
    }
})

// removeFriend.addEventListener('click', function(){
//     if(flag % 2 == 0){
//         sstatus.innerHTML = "Stranger"
//         sstatus.style.color = "red"
//         flag++;
//         console.log("We are Not Friend")
//     }
// })
