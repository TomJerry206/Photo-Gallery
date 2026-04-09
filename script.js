function upDate(previewPic){
    console.log("Mouse over event triggered");
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    
    if(previewPic.alt.includes("Beach")){
        imageDiv.style.color = "#FF2828";
    }
    else if(previewPic.alt.includes("Mountain")){
        imageDiv.style.color = "#5CFFB0";
    }
    else if(previewPic.alt.includes("Galaxy")){
        imageDiv.style.color = "#3D1700";
    }
}

function undo(){
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = 
        "Hover over an image below to display here.";

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.style.color = "black";
}
