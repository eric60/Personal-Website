var para = document.getElementById("para");
var isWhite = false;

setInterval(function(){
  if(isWhite){
    para.style.color = "red";
  }
  else{
    para.style.color = "white";
  }
  isWhite = !isWhite;
}, 1000);
