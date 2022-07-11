nosex=0;
nosey=0;

function preload(){
}
 
function setup(){
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO)
 video.size(300,300);
 video.hide();

 posenet=ml5.poseNet(video,modelloaded);
 posenet.on('pose',gotPoses);
}
function modelloaded(){
    console.log('Posenet is Initialized');
}
function gotPoses(results){
   if (results.length > 0 ) {
    console.log(results);
    nosex= results[0].pose.nose.x;
    nosey= results[0].pose.nose.y;
    console.log("nosex=" + nosex);
    console.log("nosey=" + nosey);
   }
   
}
function draw(){
    image(video,0,0,300,300);
    fill(201, 12, 15);
    stroke(18, 199, 30);
    circle(nosex,nosey,20);
    
}
 function take_snapshot(){
    save('filtered.png');
 }
