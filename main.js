objects =[];
person="";

function setup(){
    canvas = createCanvas(480 , 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song = loadSound("alert(1).mp3");
}

function draw(){
    image(video , 0, 0, 480, 380);
    for(i=0 ; i < object.length ; i ++){
    if(objects == person){
        document.getElementById("status").innerHTML ="Status : object detected";
        document.getElementById("found").innerHTML = "Baby dectected";
        song.stop();
    }

    else{
        document.getElementById("status").innerHTML ="Status : object not detected";
        document.getElementById("found").innerHTML = "EMERGENCY!!!!!";
        song.start();
    }
}
} 