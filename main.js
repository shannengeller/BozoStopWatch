let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let interval = null;
let status = "stopped";

//function that updates the watch with the accurate seconds and minutes
function watch(){
    
    seconds++;

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;
    }
    if (seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if(minutes >= 60){
        window.clearInterval(interval);
        document.getElementById("display").innerHTML = "00:00";
    }
    
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;
}

function playPause() {

    if (status === "stopped"){

        //starts the stopwatch
        interval = window.setInterval(watch, 1000);
        document.getElementById("playPause").innerHTML="Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("playPause").innerHTML="Start";
        status="stopped";
    }
}

function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00";
    document.getElementById("playPause").innerHTML = "Start";
}

 function addTenMins(){

     if(minutes < 10){
         minutes = 10;
         document.getElementById("display").innerHTML = "10:00";
     }
    else{
        minutes = minutes + 10;
        document.getElementById("display").innerHTML = "10:00" + minutes;
        if(minutes >= 60){
            document.getElementById("display").innerHTML = "00:00";
        }
    }
 }
