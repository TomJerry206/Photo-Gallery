function upDate(previewPic){
    console.log("Mouse over event triggered");
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    
    if(previewPic.alt.includes("Beach")){
        imageDiv.style.color = "#000000";
    }
    else if(previewPic.alt.includes("Mountain")){
        imageDiv.style.color = "#5A3E1B";
    }
    else if(previewPic.alt.includes("Galaxy")){
        imageDiv.style.color = "#AEEFFF";
    }
}

function undo(){
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = 
        "Hover over an image below to display here.";

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.style.color = "black";
}
