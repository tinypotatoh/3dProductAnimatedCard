function flipRight(){
    var productBox = document.getElementById("productBox");
    var frontImg = document.getElementById("frontImg");
    var backImg = document.getElementById("backImg");
  
              productBox.style.transform = "rotateY(180deg)";
              frontImg.style.left = "650px";
              backImg.style.left = "20px";
              frontImg.style.transform = "rotate(-30deg)";
              backImg.style.transform = "rotate(0deg)";
            }
              
              function flipLeft(){
    var productBox = document.getElementById("productBox");
    var frontImg = document.getElementById("frontImg");
    var backImg = document.getElementById("backImg");
  
              productBox.style.transform = "rotateY(0deg)";
              frontImg.style.left = "20px";
              backImg.style.left = "-650px";
              frontImg.style.transform = "rotate(0deg)";
              backImg.style.transform = "rotate(-30deg)";
          
            }             