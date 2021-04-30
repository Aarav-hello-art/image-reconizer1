Webcam.set({
width : 300,
height : 300,
image_format : "jpeg",
jpeg_quality : 90
})

Webcam.attach('#camera')

function capture_image(){
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML = `<img id="captured_img" src=${img}>`
        }
    )
}

//check the version of ml5
console.log("ml5 version = "+ml5.version)

//code for loading the model in a variable
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Nx_6JluW/model.json",model_loaded)

//code defining the model loaded function
function model_loaded() {
   console.log("Good morning check the correct spelling and your model is ready to use") 
}


