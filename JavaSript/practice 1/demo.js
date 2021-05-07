
var myh1=document.querySelector("h1")
var p=document.querySelector("P")
var myh2=document.querySelector("h2")
var myh3=document.querySelector("a")
var myh4=document.querySelectorAll("li")
var b=document.querySelectorAll("body")

function changecolor() {
  myh1.style.color=rc();
  myh3.style.color=rc()
  myh2.style.color=rc()
  p.style.color=rc()
  myh4[0].style.color=rc()
  myh4[1].style.color=rc()
  myh4[2].style.color=rc()
  myh4[3].style.color=rc()
  b.style.color=rc()
}
setInterval(changecolor,100)

function rc(){
  var letter="0123456789ABCDEF";
  var s="#";
  for (var i = 0; i < 6; i++) {
    var r1=  Math.floor(Math.random()*16)
    s+=letter[r1]
  }
return s;
}
