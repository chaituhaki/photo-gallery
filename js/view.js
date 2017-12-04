var thumbnails = document.getElementById("thumbnails");
var image = document.getElementById("image");
var windowHeight = window.innerHeight;


for(i=0;i<imageUrl.length; i++){
    var img = document.createElement("img");
    img.setAttribute("src",imageUrl[i]);
    img.setAttribute("class", "thumb-img");
    img.addEventListener("click", function(){
        src = this.getAttribute("src");
        image.style.backgroundImage = "url('"+src+"')";
    });
    thumbnails.appendChild(img);
}

var imageClass = document.getElementsByClassName("image");
image.style.height = windowHeight+"px";
console.log(imageClass);
console.log(windowHeight);