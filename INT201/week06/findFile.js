function findFileExtention(findfile){
    
}
function isImageFile(filename){
    if(!filename) return false;
    return filename.endsWith(".jpg") || filename.endsWith(".png") || filename.endsWith(".gif") || filename.endsWith(".svg") || filename.endsWith(".jepg");
}
console.log(isImageFile("myphoto.jpg")); // true
isImageFile("myphoto.png"); // true
isImageFile("myphoto.gif"); // true
isImageFile("myphoto.svg"); // true