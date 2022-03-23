let selfcare = ['calling a friend', 'listening to a song you love', 'smelling some flowers', 'trying some gentle yoga', 'watching the sunset', 'sleeping-in'];
let icecreamran;
let selfcareran;
let icecreams = []
let img;
let myFont;
let button;
let words;
let cnv;

function preload() {
  myFont = loadFont('assets/VCR_OSD_MONO_1.001.ttf')
  img = loadImage('pixelbackground.jpeg');
  for (let i = 0; i <= 5; i++) {
    icecreams[i] = loadImage('assets/icecream_' + [i] + '.jpeg')
  }
}

function setup() {
  cnv = createCanvas(960, 540);
  cnv.parent('#controlsDiv');
  image(img, 0, 0);
  textFont(myFont);
  inText();
  textSize(30);
  console.log(icecreams[int(random(icecreams.length))]);
  console.log(selfcare.length);
  button = select('#selfcareact');
  button.position(720, 495);
  button.mousePressed(buttonPressed);
  button.class('selfcareButton');
}

function draw() {}

function buttonPressed() {
  selfcareran = int(random(selfcare.length));
  words = '' + selfcare[selfcareran] + '-';
}

function mousePressed() {
  icecreamran = int(random(icecreams.length));
  statement();
  image(icecreams[icecreamran], width * 0.5, height * 0.3, 215, 215);
}

function inText() {
  fill(251, 255, 189);
  textAlign(LEFT);
  textSize(28);
  text('Click until you see your favorite ice cream flavor', width * 0.1, height * 0.23);
}

function statement() {
  image(img, 0, 0);
  inText();
  fill(247, 231, 231);
  textSize(23);
  text('Treat yourself to:', width * 0.23, height * 0.4);
  text(words, width * 0.5, height * 0.75);
}
