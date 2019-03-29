//My method that I learned before figuring out Pre-Work method

function changeColorBlue() {
    var blueColor = document.getElementById('box');
    blueColor.style.backgroundColor = "Blue";
}

function grow() {
    var box1 = document.getElementById('box');
    box1.style.width = "300px"
    box1.style.height = "300px"
}

function reset() {
     var box1 = document.getElementById('box');
    box1.style.width = "150px"
    box1.style.height = "150px"
    box1.style.backgroundColor = "Orange";
    box1.style.opacity = "1";

 }

function fade() {
    var box3 = document.getElementById('box');
    box3.style.opacity = "0.12";
}



//----------------------------------------------------------------
// Pre-work Method

//Grow Btn
document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("colorBox").style.width = "300px";
    document.getElementById("colorBox").style.height = "300px";
})


//Blue Color Btn
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("colorBox").style.backgroundColor = "Blue";
})

//Fade Btn
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("colorBox").style.opacity = "0.12";
})

//Reset Btn
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("colorBox").style.opacity = "1";
    document.getElementById("colorBox").style.width = "150px";
    document.getElementById("colorBox").style.height = "150px";
    document.getElementById("colorBox").style.backgroundColor = "Orange";
    document.getElementById("colorBox").style.visibility = "visible";
})


//Hide Btn
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("colorBox").style.visibility = "hidden";
})