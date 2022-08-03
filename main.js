video="";
Status="";
input_text="";
function setup(){
    canvas=createCanvas(500, 450);
    canvas.center();
}
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function btn_start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    input_text=document.getElementById("text_input").value;
}
function modelLoaded(){
    console.log("Model loaded!");
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}