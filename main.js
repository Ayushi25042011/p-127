song_name1="";
song_name2="";
leftwrist="";
rightwrist="";


<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>

function setup()
{
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function preload()
 {
song_name1 = loadSound(harry_potter.mp3);
song_name2 =loadSound(avenger.mp3);
 }

function draw()
 {
image(video, 0, 0, 600, 500);
 }