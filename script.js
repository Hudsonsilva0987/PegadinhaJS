
function getRandomArbitrary(min, max) {
    return  (Math.random() * (max - min) + min) *2  ;
  }

function mexe(){
    document.getElementById("nao").style.left =getRandomArbitrary(0, 200) + "px";
    document.getElementById("nao").style.top =getRandomArbitrary(0, 200) + "px";
    document.getElementById("nao").style.right =getRandomArbitrary(0, 200) + "px"
    document.getElementById("nao").style.bottom =getRandomArbitrary(0, 200) + "px";
}




