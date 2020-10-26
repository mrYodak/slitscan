var video;

var y = 0;

function setup() {
  createCanvas(320,540);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320,240);
  background(51);
}

function draw() {  
  video.loadPixels();
  var h = video.height;
  var w = video.width;
  copy(video,0,h/2,w,1,0,y,w,1); 
  if (y>=h){
    y = 0; 
  }else{
  y = y+1;
  }
}