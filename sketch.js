let icecreamnames = ['chocolate', 'vanilla', 'butter pecan', 'strawberry', 'neapolitan', 'mint chocolate chip'];
let selfcare = ['call a friend', 'listen to a song you love', 'smell some flowers', 'try some gentle yoga', 'watch the sunset', 'sleep-in'];

let img;
let myFont;

let icecreamran;
let selfcareran;

let words;

let icecreams = []

let button;
let cnv;

function preload(){

myFont = loadFont('assets/VCR_OSD_MONO_1.001.ttf')

  img = loadImage('pixelbackground.jpg');

for (let i = 0; i <= 5; i++){
  icecreams[i] = loadImage('assets/icecream_${i}.jpg')
}
}

function setup() {
  cnv = createCanvas(650, 450);
  cnv.parent('#canvasDiv');
  image(img, 0,0);
    textFont(myFont);
    intText();
    textSize(30);
    console.log(icecreams[int(random(icecreams.length))]);
    console.log(selfcare.length);

    button = select('#selfcareact');
    button.position(290,500);
    button.mousePressed(buttonPressed);
    button.class('selfcareButton');
}

function draw() {
}

function buttonPressed(){
  selfcareran = int(random(selfcare.length));
  words = ' ' + selfcare[selfcareran] + '-';
  console.log(words);
}

function mousePressed(){
  icecreamran = int(random(icecreams.length));
  statement();

  image(icecreams[icecreamran], width*0.33, height*0.27, 290, 230);
}

function inText() {
  fill(156, 129, 67);
  textAlign(CENTER);
  textSize(20);
  text('Click until you see your favorite ice cream flavor', width*0.4, height*0.1);
}

function statement() {
  image(img, 0,0);
  inText();
  fill(156,129,67);
  textAlign(CENTER);
  textSize(25);
  text('You should:', width*0.5,height*0.2);
  text(words,width*0.5, height*0.75);
}
