let clicker=document.getElementById("clicker");
let reset=document.getElementById("reset");
var clicktime=0;
clicker.addEventListener("click", () => {
    clicktime+=1;
    clicker.innerText="클릭 횠수 : "+clicktime
   
});
reset.addEventListener("click", () => {
    clicktime=0;
    clicker.innerText="클릭 횠수 : "+clicktime
    alert("초기화 되었습니다.");
});