noseX = 0;
noseY = 0;
GameStatus="";

function preload(){

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(600,300);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw(){
	game();
}

function game(){
	console.log("noseX = " + noseX +", noseY = " + noseY);
}

function startGame(){
	GameStatus="start";
	document.getElementById("status").innerHTML="Game is Loading";
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}