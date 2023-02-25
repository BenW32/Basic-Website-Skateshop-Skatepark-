//method for when next button is pressed it goes to the next picture
function chooseImageForward()
{
    

    var imgArray = new Array();
    var currentImage = document.getElementById("theImage");
    
    imgArray[0] = new Image();
    imgArray[0].src = 'Street_Park1.jpg';
    
    imgArray[1] = new Image();
    imgArray[1].src = 'Street_Park2.jpg';
    
    imgArray[2] = new Image();
    imgArray[2].src = 'bowl.jpg';
    
    imgArray[3] = new Image();
    imgArray[3].src = "vert_halfpipe.jpg";
    
    imgArray[4] = new Image();
    imgArray[4].src = 'miniramp.jpg';
    
    imgArray[5] = new Image();
    imgArray[5].src = 'skateshop.jpg';

    if(currentImage.src==imgArray[0].src)
    {
        currentImage.src=imgArray[1].src;
    }
    else if (currentImage.src ==imgArray[1].src)
    {
        currentImage.src=imgArray[2].src;
    }
    else if (currentImage.src ==imgArray[2].src)
    {
        currentImage.src=imgArray[3].src;
    }
    else if (currentImage.src ==imgArray[3].src)
    {
        currentImage.src=imgArray[4].src;
    }
    else if (currentImage.src ==imgArray[4].src)
    {
        currentImage.src=imgArray[5].src;
    }
   document.getElementById("theImageTest").src=currentImage.src;

}

//method for when back button is pressed it goes to the previous picture
function chooseImageBackward()
{
    

    var imgArray = new Array();
    var currentImage = document.getElementById("theImage");
    
    imgArray[0] = new Image();
    imgArray[0].src = 'Street_Park1.jpg';
    
    imgArray[1] = new Image();
    imgArray[1].src = 'Street_Park2.jpg';
    
    imgArray[2] = new Image();
    imgArray[2].src = 'bowl.jpg';
    
    imgArray[3] = new Image();
    imgArray[3].src = "vert_halfpipe.jpg";

    imgArray[4] = new Image();
    imgArray[4].src = 'miniramp.jpg';
    
    imgArray[5] = new Image();
    imgArray[5].src = 'skateshop.jpg';
    
    if (currentImage.src ==imgArray[5].src)
    {
        currentImage.src=imgArray[4].src;
    }
    else if(currentImage.src==imgArray[4].src)
    {
        currentImage.src=imgArray[3].src;
    }
    else if (currentImage.src ==imgArray[3].src)
    {
        currentImage.src=imgArray[2].src;
    }
    else if (currentImage.src ==imgArray[2].src)
    {
        currentImage.src=imgArray[1].src;
    }
    else if (currentImage.src ==imgArray[1].src)
    {
        currentImage.src=imgArray[0].src;
    }
    
   document.getElementById("theImageTest").src=currentImage.src;

}