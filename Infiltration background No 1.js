background(185);

//For perspective {

var vanishingX = 200;
var vanishingY = 200;

stroke(0);
for(var i = 0; i < 40; i++) {
    line(vanishingX, vanishingY, i * 60 - 900, 400);
    line(vanishingX, vanishingY, i * 60 - 900, 0);
    line(vanishingX, vanishingY, i * 60 - 900, 0);
}

noStroke();
fill(100);
rect(0, 100, 400, 150);

//}

//Wood floor {

strokeWeight(1);
stroke(0);
fill(222, 180, 113);
quad(-10, 250, 50, 250, 20, 260, -10, 260);
quad(50, 250, 20, 260, 138, 260, 150, 250);
quad(150, 250, 138, 260, 261, 260, 250, 250);
quad(250, 250, 261, 260, 378, 260, 350, 250);
quad(350, 250, 378, 260, 410, 260, 410, 250);
quad(-10, 260, 60, 260, 27, 275, -10, 275);
quad(60, 260, 210, 260, 213, 275, 27, 275);
quad(210, 260, 360, 260, 397, 275, 212, 275);
quad(360, 260, 410, 260, 410, 275, 397, 275);
quad(-10, 275, 110, 275, 82, 295, -10, 295);
quad(110, 275, 285, 275, 310, 295, 82, 295);
quad(285, 275, 410, 275, 410, 295, 309, 295);
quad(-10, 295, 60, 295, 20, 320, -10, 320);
quad(60, 295, 260, 295, 274, 320, 20, 320);
quad(260, 295, 410, 295, 410, 320, 274, 320);
quad(-10, 320, 150, 320, 136, 350, -10, 350);
quad(150, 320, 375, 320, 417, 350, 131, 350);
quad(375, 320, 410, 320, 410, 350, 417, 350);
quad(-10, 350, 100, 350, 74, 385, -10, 385);
quad(-10, 350, 100, 350, 76, 385, -10, 385);
quad(100, 350, 350, 350, 385, 385, 74, 385);
quad(350, 350, 410, 350, 410, 385, 385, 385);
quad(-10, 385, 100, 385, 85, 410, -10, 410);
quad(100, 385, 375, 385, 399, 410, 85, 410);
quad(375, 385, 410, 385, 399, 410, 399, 410);

//}