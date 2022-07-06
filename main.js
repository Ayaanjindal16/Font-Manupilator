leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
    }
}

function draw(){
    background("#FFB6C1");
    textSize(difference);
    fill("#FF0000")
    text("Ayaan", 70, 150)
}