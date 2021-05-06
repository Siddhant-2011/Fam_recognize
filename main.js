Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="final" src="'+data_uri+'"/>';
    });
}
  console.log(ml5.version);
  var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/osflf4ZXx/model.json",loaded);
  function loaded(){
      console.log("model has been loaded")
  }
  function identify(){
  var img=document.getElementById("final");
  classifier.classify(img,gotResults)
  }

  function gotResults(error,results){
      if(error){
          console.error(error);
          
      }
      else{
          console.log(results);
          document.getElementById("object_name").innerHTML=results[0].label;
          document.getElementById("accuracy_name").innerHTML=results[0].confidence.toFixed(3);
      }
  }