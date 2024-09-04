const header = document.querySelector(".header");
const noti = document.querySelectorAll(".noti");
const count=document.querySelector(".count");
header.addEventListener("click",function(){
noti.forEach((e)=>{
    e.style.backgroundColor="white";
    });
    count.innerText=0;
})
noti.forEach((e) => {
    e.addEventListener("click", function() {
        if (e.style.backgroundColor !== "white") {
            e.style.backgroundColor = "white";
            let currentCount = (count.innerText); 
            if (currentCount > 0) {
                count.innerText = currentCount - 1;
            }
        }
    });
});

