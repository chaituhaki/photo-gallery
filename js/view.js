var thumbnails = document.getElementById("thumbnails");
var image = document.getElementById("image");
var left = document.getElementById("left");
var right = document.getElementById("right");
var windowHeight = window.innerHeight;

// sets the image height to windows height
image.style.height = windowHeight+"px";
thumbnails.style.height = windowHeight-202.66+"px";
//resize image if the window's height is chaged
window.addEventListener("resize", function(){
  windowHeight = window.innerHeight;
  image.style.height = windowHeight+"px";
  thumbnails.style.height = windowHeight-202.67+"px";
  console.log(windowHeight-400+"px");
});

// populate thumbnails in side-menu
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

left.addEventListener("click", function(){
    currentImg = currentBackground();
    for(i=0;i<imageUrl.length;i++){
        if(currentImg == imageUrl[0]){
            break;
        }
        else if(currentImg == imageUrl[i]){
            src = imageUrl[i-1];
            image.style.backgroundImage = "url('"+src+"')";
        }
    }
});

right.addEventListener("click", function(){
    currentImg = currentBackground();
    var len = imageUrl.length;
    for(i=len;i>=0;i--){
        console.log(i);
        if(currentImg == imageUrl[len-1]){
            break;
        }
        else if(currentImg == imageUrl[i]){
            src = imageUrl[i+1];
            image.style.backgroundImage = "url('"+src+"')";
        }
    }
});
// get current background image and returns it
var currentBackground = function(){
    return window.getComputedStyle(image,null).getPropertyValue("background-image").slice(5, -2);;
}
