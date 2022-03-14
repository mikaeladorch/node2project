// my favorite ice cream flavors
let icecream = [{
  name: "chocolate",
  action: "call a friend"
}, {
  name: "vanilla",
  action: "listen to a song you love"
}, {
  name: "butter pecan",
  action: "smell some flowers"
}, {
  name: "strawberry",
  action: "try some gentle yoga"
}, {
  name: "cookie dough",
  action: "watch the sunset"
}, {
  name: "mint chocolate chip",
  action: "sleep-in"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);


  // 2b.4 pull random item from array
  // console.log(random(5));
  // console.log(icecream[int(random(icecream.length))].name);
  // console.log(icecream[randomIndex].name);
  // console.log(icecream[randomIndex].name);

  // 2b.3 array of objects
  // console.log(icecream[1].color);

  // 2b.2 methods to arrays
  // console.log("initial array is ")
  // console.log(icecream);

  // icecream.shift();
  // console.log("array after shift")
  // console.log(icecream);

  // icecream.unshift("mango");
  // console.log("array after unshift")
  // console.log(icecream);

}

function draw() {

}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(icecream.length));
  text(icecream[randomIndex].name, 50, 50);
  icecream.splice(randomIndex, 1);
}
