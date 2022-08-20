
function getRandomArbitrary(min, max) {
    return  (Math.random() * (max - min) + min)   ;
  }

function mexe(){
    document.getElementById("nao").style.left =getRandomArbitrary(0, 70) + "%";
    document.getElementById("nao").style.top =getRandomArbitrary(0, 70) + "%";
    document.getElementById("nao").style.right =getRandomArbitrary(0, 70) + "%"
    document.getElementById("nao").style.bottom =getRandomArbitrary(0, 70) + "%";
}




