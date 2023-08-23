function makeRed(){
    document.body.style.backgroundColor='red';
}
const blue =document.getElementById('blue')
blue.onclick = clickBlue

function clickBlue(){
 document.body.style.backgroundColor='blue';
}
const purples = document.getElementById('purple')
purple.onclick= function clicksMe(){
 document.body.style.backgroundColor='purple'
}
const pink = document.getElementById('make-pink')
pink.addEventListener('click',pinkColor)
 function pinkColor(){
     document.body.style.backgroundColor ='pink';
 }
 const green =document.getElementById('make-green')
 green.addEventListener('click',function greenBack(){
     document.body.style.backgroundColor='green'
 })
 const oranges = document.getElementById('orange')
 oranges.addEventListener('click',orangBack)
 function orangBack(){
     document.body.style.backgroundColor='orange'
 }
 const cyansd = document.getElementById('cyans')
 cyansd.addEventListener('click',function cyanBack(){
     document.body.style.backgroundColor='cyan'
 })