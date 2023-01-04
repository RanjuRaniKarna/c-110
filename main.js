Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' +data_uri+ '">';
    });

}

console.log('ml5_version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/od_udcTv3/model.json",modelloaded);

function modelloaded(){
    console.log("Model is loaded");
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, got_result);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = ("Your first prediction is")+prediction1;
    utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
}

function got_result(error, result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("result_emotion_name1").innerHTML = result[0].label;
   
prediction1=result[0].label;

speak();
    if(result[0].label=="Thumbs Up"){
    document.getElementById("result_emoji1").innerHTML = "&#128077";
    }
    if(result[0].label=="Ok"){
    document.getElementById("result_emoji1").innerHTML = "&#128076";
    }
    if(result[0].label=="Peace"){
    document.getElementById("result_emoji1").innerHTML = "&#9996";
    }
    if(result[0].label=="Finger Link"){
    document.getElementById("result_emoji1").innerHTML = "&#128406";
    }
    if(result[0].label=="Fist"){
    document.getElementById("result_emoji1").innerHTML = "&#9994";
    }


}
}