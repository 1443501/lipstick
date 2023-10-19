noseX=0;
noseY=0;
function preload(){
lipstick= loadImage('https://i.postimg.cc/MTqG91j4/download-3.jpg');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
}

function draw(){
image(video, 0, 0, 300, 300);
image(lipstick, noseX, noseY, 100, 60);

}

function take_snapshot(){
    save('myFilterImage.png');


}

function modelLoaded(){
    console.log("loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);

    }
}