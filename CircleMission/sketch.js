var x;
var y;
var vect;
var magn;
var cmagn = 30;
var cursvect;
var cursx;
var cursy;
var a = 20;
var minrange = 20;
var maxrange = 250;
var bcolor;
var time = 0;
var rmone, rmd, rmt, rmx, rmy;
var csize = 25;
var foodSize = 15;
var speed;
var energy;
var score = 0;

var foodTimer = 0;
var score = 0;
var endtext;


setInterval(horloge, 1000);
setInterval(draw, 10);


function setup() {
    createCanvas(windowWidth, windowHeight);
    Obstacle();
    rectMode(CENTER);
    angleMode(DEGREES);
    x = windowWidth/2;
    y = windowHeight/2;
    noStroke();
    speed = 1;
    energy = 1155;
    
    
}

function draw() {
    
    background(55);
    
    
    noStroke();
    Food();
    Border();
    Move();
    Curseur();
    stroke(255);
    //line(x, y, cursvect.x, cursvect.y);
   // print(cmagn);
}


function horloge () {
    time += 1
   
    foodTimer += score;
}
function Move () {
      if (keyIsDown(90)) {
        y -= speed;
        energy -=0.2;
    }
    if (keyIsDown(83)) {
        y += speed;
        energy -=0.2;

    }
    if (keyIsDown(81)) {
        x -= speed;
        energy -=0.2;

    }
    if (keyIsDown(68)) {
        x += speed;
        energy -= 0.2;


    }
    
    stroke(100, energy, 0);
    strokeWeight(2);
    ellipse(x, y, csize, csize);
}
function Obstacle () {
    rmone = random(1, 255);
    rmd = random(1, 255);
    rmt = random(1, 255);
    rmx = random(200, windowWidth - 200);
    rmy = random(200, windowHeight - 200);
    foodTimer = 0;
  }
function Border () {
    if(x >= windowWidth) {
        x = 1;
    }
    if(x <= 0) {
        x = windowWidth;
    }
    if(y >= windowHeight) {
        y = 1;
    }
    if(y <= 0) {
        y = windowHeight;
    }
} 

function Food() {
    vect = createVector(x - rmx, y - rmy);
    magn = vect.mag();
    if(magn <= foodSize/2 + csize/2) {
        Obstacle();
        score += 1;
        energy += 30;
        speed += 0.2;
        csize += 1;
     
    }
    if (foodTimer >= 200) {
        Obstacle();
    }
    
    if(energy <= 0) {
        gameOver();
    }
    
    fill(rmone, rmd, rmt);
    rect(rmx, rmy, foodSize, foodSize);
    fill(80, 150, 200);
}

       function Curseur () {
           if(keyIsDown(40) && cmagn > minrange) {
               cmagn -= 1;
               energy -= 0.2;

           }
           if(keyIsDown(38) && cmagn < maxrange ) {
               cmagn += 1;
               energy -= 0.2;
           }
           
           
           if(keyIsDown(37)) {
               a -= 1;
               energy -= 0.2;

           }
           if(keyIsDown(39)) {
               a += 1;
               energy -= 0.2;
           }
       

           
           cursvect = createVector(100, 100);
           cursvect.rotate(a);
           cursvect.setMag(cmagn);
           
           line(x, y, x + cursvect.x , y + cursvect.y);
           cursx = x + cursvect.x;
           cursy = y + cursvect.y;
           fill(255, 30, 30);
           noStroke();

           rect(cursx, cursy, 15, 2);
           rect(cursx, cursy, 2, 15);
           rect(cursx + cmagn/20 + 7, cursy + cmagn/20 + 7, 5, 5);
       }        
               
               
               
               
               
               
               
               
function gameOver () {
    background(255);
    endtext = "Thank you for playing" + "Your Score is :  " + score;
    textSize(50);
    console.log(score);
    fill(72, 75, 100);
    text(endtext, 200, 200);
    return;
    
}
