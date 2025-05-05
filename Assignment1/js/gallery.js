/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("On mouse over / on focus event triggered.");
    console.log("Image Source: "+ previewPic.src);
    console.log("Image Alt Text: "+ previewPic.alt);
    var altText = previewPic.alt; 
    var imgSource = previewPic.src; 
    document.getElementById("image").style.backgroundImage = "url('" + imgSource + "')";
    document.querySelector(".overlay").innerHTML = altText;
}

function unDo(){
    console.log("On mouse out / onblur event triggered.");
    document.getElementById("image").style.backgroundImage = "url('')";
    document.querySelector(".overlay").innerHTML = "Hover over an image below to display here.";
}

function addTabIndex(){
    console.log("Adding tabindex to images.");
    var images = document.querySelectorAll("img.preview");
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}