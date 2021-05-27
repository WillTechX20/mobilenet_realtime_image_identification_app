var canvas=null;
var video=null;
var newImageClassifier=null;

function preload(){
}

function onModelLoaded(){
    console.log('Model Loaded!');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    newImageClassifier=ml5.imageClassifier('MobileNet', onModelLoaded);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.querySelector('#result_object_name').innerText=results[0].label;
        document.querySelector('#result_object_accuracy').innerText=results[0].confidence.toFixed(3);
        
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    newImageClassifier.classify(video, gotResult);
}



