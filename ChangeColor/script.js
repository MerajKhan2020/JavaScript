const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["yellow","blue","green","red","#fefefe"];
const random = Math.floor(Math.random()*colors.length)

colorBtn.addEventListener("click", changeColor);




function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
    console.log(random);
    //console.log(Math.random()*1);
}