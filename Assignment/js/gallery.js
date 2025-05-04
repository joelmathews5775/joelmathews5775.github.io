/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("On mouse over event triggered.");
    console.log("Image Source: "+ previewPic.src);
    console.log("Image Alt Text: "+ previewPic.alt);
    // You don't neccessarily need this line, but it is a good idea to store the alternate text in a variable for later use. 
    var altText = previewPic.alt; 
    // You don't neccessarily need this line, but it is a good idea to store the image source in a variable for later use.
    var imgSource = previewPic.src; 
    document.getElementById("image").style.backgroundImage = "url('" + imgSource + "')";
    document.getElementById("image").innerHTML = altText;
    // The above two lines can be replaced with the following two lines if you prefer to use the previewPic alt and src attributes directly.
    // document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')"; 
    // document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
    console.log("On mouse out event triggered.");
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
