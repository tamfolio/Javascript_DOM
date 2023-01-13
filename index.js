var RandomNumber1 = Math.floor(Math.random() * 6) + 1;;
var RandomNumber2 = Math.floor(Math.random() * 6) + 1;;
console.log(RandomNumber1)
console.log(RandomNumber2)
document.querySelector(".img1").setAttribute("src",'./images/dice' +RandomNumber1+'.png')
document.querySelector(".img2").setAttribute("src",'./images/dice' +RandomNumber2+'.png')

if(RandomNumber1 > RandomNumber2){
        document.querySelector("h1").textContent = "🚩 Player One Wins";  
} else if( RandomNumber1 === RandomNumber2) {
    document.querySelector("h1").textContent = "Draw";
} else {
    document.querySelector("h1").textContent = "🚩 Player Two Wins";
}
