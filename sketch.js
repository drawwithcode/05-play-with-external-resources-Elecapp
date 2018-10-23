
var guglielmo;
var rossinipizza;
var gioacchino;
var amp;
var fft;
var e;
function preload(){
  guglielmo = loadSound("./assets/Rossini_Guglielmo_tell.mp3");
  rossinipizza =loadImage("./assets/rossini1000.png");
  gioacchino =loadImage("./assets/rossinilui.png");
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  guglielmo.play();
  fft = new p5.FFT(0,32);
  e = windowWidth /32;
  frameRate(30);



  // put setup code here
}

function draw() {
  background('#ffc30f');

  var spettro = fft.analyze();
  for (var i = 0;i < spettro.length; i++) {
    var amp = spettro [i];
    var vol = map(amp,0, 500, height, 10);
    // first
  if(frameCount>0 && frameCount < 480 || frameCount>1380 && frameCount < 1560) {
    noStroke();
    fill('#ff5733');
    ellipse(i * e, 100 , vol/10);
  }
  // second
  if( frameCount > 480 && frameCount < 660 || frameCount > 1560 && frameCount < 1740) {
  noStroke();
  fill('#c70039');
  rect(i * e, 200 , e-10, vol/5);
  }
  // third
  if( frameCount > 660 && frameCount < 840) {
  noStroke();
  fill('#900c3f');
  polygon(i * e, 400 , vol/13, 3);
}

// ensemble
if( frameCount > 840 && frameCount < 1180) {
  noStroke();
  fill('#ff5733');
  ellipse(i * e, 100 , vol/10);

  noStroke();
  fill('#c70039');
  rect(i * e, 200 , e-10, vol/5);

  noStroke();
  fill('#900c3f');
  polygon(i * e, 400 ,vol/15, 3);
}

// thin
if(frameCount>1180 && frameCount < 1380) {
  noStroke();
  fill('#581845');
  rect(i * e, 600 , e - 30, vol/10);

}
// first

// second


//drop with pizza

if (frameCount>1745){
  noStroke();
  fill('#ff5733');
  ellipse(i * e, 100 , vol/10);

  noStroke();
  fill('#c70039');
  rect(i * e, 200 , e-10, vol/5);

  noStroke();
  fill('#900c3f');
  polygon(i * e, 400 ,vol/15, 3);


  noStroke();
  fill('#581845');
  rect(i * e, 600 , e - 30, vol/10);

  push()
  translate(width/2, height/2);
  rotate(frameCount/4);
  image(rossinipizza,0,0,375,450);
  pop()
}

}

  image(gioacchino,360,0, 505,640);
  var testo = "ROSSINI";
  textFont('Open sans');
  textAlign(CENTER);
  textSize(60);
  fill('white');
  text(testo, width/2.1, height/1.1);


  }
  //console.log(spettro);
  function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }








  // put drawing code here
