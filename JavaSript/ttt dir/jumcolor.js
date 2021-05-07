
var jumb=document.querySelector(".jumbotron")
var btn=document.querySelector("button")
var bo=document.querySelector("body")

setInterval(changecolor,2000)
btn.addEventListener('click',bocolor)
function bocolor(){
  bo.style.background=rc()

}

function changecolor(){
  jumb.style.background=rc()
  btn.style.background=rc()
}
function rc(){
  var letter="0123456789ABCDEF";
  var s="#";
  for (var i = 0; i < 6; i++) {
    var r1=  Math.floor(Math.random()*16)
    s+=letter[r1]
  }
return s;
}
