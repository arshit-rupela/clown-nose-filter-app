nosex=0;
nosey=0;

function preload(){
    clownnose= loadImage('https://i.postimg.cc/QtpKmTcD/clown-nose.png');
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
    nosex= results[0].pose.nose.x - 10;
    nosey= results[0].pose.nose.y - 10;
    console.log("nosex=" + nosex);
    console.log("nosey=" + nosey);
   }
   
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,nosex,nosey,30,30);
}
 function take_snapshot(){
    save('filtered.png');
 }
