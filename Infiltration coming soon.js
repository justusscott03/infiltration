// Credit to Daniel T (@dkareh)
(function(){return this;})().LoopProtector.prototype.leave = function(){};

textFont(createFont("Times New Roman Bold Italic"));

var text1X = -160;
var text2Y = 420;

var ninjaY = 140;
var ninjaW = 35;
var ninjaH = 35;

var eyes = "left";
var eyeTimer = 0;

draw = function() {
    background(255);
    stroke(176, 176, 176, 100);
    noFill();
    arc(text1X, ninjaY + 50, 100, 100, 327, 414);
    arc(text1X - 25, ninjaY + 60, 90, 80, 327, 414);
    arc(text1X + 15, ninjaY + 60, 45, 50, 327, 414);
    pushMatrix();
    translate(text1X + ninjaW / 2, ninjaY + ninjaH / 2);
    rotate(-35);
    translate(-(text1X + ninjaW / 2), -(ninjaY + ninjaH / 2));
    noStroke();
    fill(214, 195, 152);
    rect(text1X, ninjaY, ninjaW, ninjaH, 5);
    fill(0);
    rect(text1X, ninjaY + ninjaH / 2, ninjaW, ninjaH / 2, 0, 0, 5, 5);
    rect(text1X, ninjaY, ninjaW, ninjaH / 5, 5, 5, 0, 0);
    fill(204, 204, 0);
    rect(text1X + ninjaW * 13 / 30, ninjaY + ninjaH * 7 / 11, ninjaW / 8, ninjaH / 5, 0, 5, 5, 0);
    fill(97, 74, 13);
    rect(text1X, ninjaY + ninjaH * 2 / 3, ninjaW, ninjaH / 8);
    fill(204, 204, 0);
    rect(text1X + ninjaW / 3, ninjaY + ninjaH * 7 / 11, ninjaW / 10, ninjaH / 5, 5, 0, 0, 5);
    fill(255);
    ellipse(text1X + ninjaW / 4, ninjaY + ninjaH / 3, ninjaW / 5, ninjaH / 5);
    ellipse(text1X + ninjaW * 3 / 4, ninjaY + ninjaH / 3, ninjaW / 5, ninjaH / 5);
    fill(0);
    if(eyes === "left") {
        arc(text1X + ninjaW / 4, ninjaY + ninjaH / 3, ninjaW / 5, ninjaH / 5, 90, 270);
        arc(text1X + ninjaW / 4, ninjaY + ninjaH / 3, ninjaW / 8, ninjaH / 5, -90, 90);
        arc(text1X + ninjaW * 3 / 4, ninjaY + ninjaH / 3, ninjaW / 5, ninjaH / 5, 90, 270);
        arc(text1X + ninjaW * 3 / 4, ninjaY + ninjaH / 3, ninjaW / 8, ninjaH / 5, -90, 90);
        if(eyeTimer > 100) {
            eyes = "right";
            eyeTimer = 0;
        }
    }
    if(eyes === "right") {
        arc(text1X + ninjaW / 4, ninjaY + ninjaH / 3, ninjaW / 5, ninjaH / 5, -90, 90);
        arc(text1X + ninjaW / 4, ninjaY + ninjaH / 3, ninjaW / 8, ninjaH / 5, 90, 270);
        arc(text1X + ninjaW * 3 / 4, ninjaY + ninjaH / 3, ninjaW / 5, ninjaH / 5, -90, 90);
        arc(text1X + ninjaW * 3 / 4, ninjaY + ninjaH / 3, ninjaW / 8, ninjaH / 5, 90, 270);
        if(eyeTimer > 100) {
            eyes = "left";
            eyeTimer = 0;
        }
    }
    popMatrix();
    
    textSize(70);
    text("Infiltr", text1X - 185, 175);
    text("tion", text1X + 45, 175);
    
    textSize(30);
    text("Coming soon!", 120, text2Y);
    
    text1X = lerp(text1X, 210, 0.1);
    text2Y = lerp(text2Y, 230, 0.1);
    
    eyeTimer++;
};



