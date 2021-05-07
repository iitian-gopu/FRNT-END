function rc(){
  var letter="0123456789ABCDEF";
  var s="#";
  for (var i = 0; i < 6; i++) {
    var r1=  Math.floor(Math.random()*16)
    s+=letter[r1]
  }
return s;
}
var b=document.querySelector("button")


b.addEventListener('mouseover',changecolor)

function changecolor() {
  var bo=document.querySelector("body")

  bo.style.background=rc();
}
