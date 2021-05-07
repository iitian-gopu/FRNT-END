var btn=document.querySelector("button")
var cells=document.querySelectorAll("td")
function clearall(){
  for (cell of cells) {
    cell.textContent=''
  }
}
btn.addEventListener('click',clearall)
function changecontent(){
  if (this.textContent=='x') {
this.textContent='o'
  }
  else if (this.textContent=='o') {
this.textContent=''
  }
  else{
    this.textContent='x'
  }
}

for (cell of cells){
  cell.addEventListener('click',changecontent)
}
