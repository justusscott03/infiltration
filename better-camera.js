/*

Credit to Daniel T (@dkareh) for the loop protector!

*/

/** Loop protector **/
// {

(function (){ return this; })().LoopProtector.prototype.leave = function (){};

//}

/** Setup **/
// {

textFont(createFont("Times New Roman Bold Italic"));
textAlign(CENTER, CENTER);

//}

/** Global variables **/
// {

var blockSize = 30;
var transparency = 255;
var screenColor = [255, 255, 255];
var scene = "menu";

//}

/** User interaction **/
// {

var keys = [];
keyPressed = function () {
    keys[keyCode] = true;
};
keyReleased = function () {
    keys[keyCode] = false;
};

var mouse = [];
mousePressed = function () {
    mouse[mouseButton] = true;
};
mouseReleased = function () {
    mouse[mouseButton] = false;
    return true;
};

//}

/** Images **/
// {

var images = {
    
    dirtBlock: function () {
        
        noStroke();
        fill(102, 60, 0);
        rect(0, 0, blockSize, blockSize);
        fill(140, 87, 17);
        rect(blockSize / 1.5, blockSize / 2, blockSize / 15, blockSize / 15);
        rect(blockSize / 6, blockSize / 4, blockSize / 15, blockSize / 15);
        fill(100);
        rect(blockSize / 1.8, blockSize / 8, blockSize / 15, blockSize / 15);
        rect(blockSize / 4, blockSize * 5 / 8, blockSize / 15, blockSize / 15);
        
        return get(0, 0, blockSize, blockSize);
        
    },
    dirtBone: function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        fill(220);
        ellipse(blockSize * 4 / 15, blockSize * 2 / 5, blockSize / 5, blockSize / 5);
        ellipse(blockSize * 2 / 5, blockSize * 4 / 15, blockSize / 5, blockSize / 5);
        ellipse(blockSize * 11 / 15, blockSize * 3 / 5, blockSize / 5, blockSize / 5);
        ellipse(blockSize * 3 / 5, blockSize * 11 / 15, blockSize / 5, blockSize / 5);
        quad(blockSize * 4 / 15, blockSize * 2 / 5, blockSize * 2 / 5, blockSize * 4 / 15, blockSize * 11 / 15, blockSize * 3 / 5, blockSize * 3 / 5, blockSize * 11 / 15);
        
        return get(0, 0, blockSize, blockSize);
        
    },
    dirtSkull: function () {
        
        background(0, 0, 0, 0);
        
        noStroke();
        fill(220);
        ellipse(blockSize / 2, blockSize * 2 / 5, blockSize / 2, blockSize / 2);
        rect(blockSize * 3 / 8, blockSize / 2, blockSize / 4, blockSize / 4, 3);
        fill(50);
        ellipse(blockSize * 3 / 8, blockSize * 2 / 5, blockSize / 7, blockSize / 7);
        ellipse(blockSize * 5 /8, blockSize * 2 / 5, blockSize / 7, blockSize / 7);
        strokeWeight(1);
        stroke(50);
        line(blockSize * 13 / 32, blockSize * 2 / 3, blockSize * 13 / 32, blockSize * 3 / 4);
        line(blockSize / 2, blockSize * 2 / 3, blockSize / 2, blockSize * 3 / 4);
        line(blockSize * 9 / 16, blockSize * 2 / 3, blockSize * 9 / 16, blockSize * 3 / 4);
        
        return get(0, 0, blockSize, blockSize);
        
    },
    dirtGrass: function () {},
    trunkBlock: function () {
        
        noStroke();
        fill(140, 98, 0);
        rect(0, 0, 3, 12);
        rect(12, 22, 3, 8);
        rect(27, 10, 3, 9);
        rect(21, 4, 3, 23);
        rect(6, 15, 3, 9);
        
        fill(97, 68, 0);
        rect(0, 12, 3, 7);
        rect(9, 0, 3, 10);
        rect(21, 0, 3, 4);
        rect(15, 20, 3, 10);
        rect(21, 27, 3, 3);
        rect(27, 19, 3, 11);
        
        fill(79, 56, 8);
        rect(0, 19, 3, 11);
        rect(12, 8, 3, 14);
        rect(18, 0, 3, 12);
        rect(24, 15, 3, 9);
        
        fill(145, 104, 39);
        rect(3, 25, 3, 5);
        rect(15, 0, 3, 15);
        rect(3, 0, 3, 11);
        rect(9, 28, 3, 2);
        rect(18, 24, 3, 6);
        
        fill(135, 111, 44);
        rect(15, 15, 3, 5);
        rect(24, 0, 3, 15);
        rect(3, 11, 3, 14);
        rect(9, 10, 3, 18);
        rect(12, 0, 3, 8);
        
        fill(112, 65, 0);
        rect(27, 0, 3, 10);
        rect(6, 24, 3, 6);
        rect(6, 0, 3, 15);
        rect(18, 12, 3, 12);
        rect(24, 24, 3, 6);
        
        return get(0, 0, blockSize, blockSize);
    },
    stoneBlock: function () {
        
        noStroke();
        fill(120);
        rect(0, 0, blockSize, blockSize);
        strokeWeight(1);
        stroke(100);
        line(blockSize / 6, blockSize / 5, blockSize / 5, blockSize / 2);
        line(blockSize / 6, blockSize * 2 / 3, blockSize / 3, blockSize * 7 / 8);
        line(blockSize / 2, blockSize  * 7 / 12, blockSize * 3 / 4, blockSize / 5);
        line(blockSize * 2 / 3, blockSize * 7 / 8, blockSize * 5 / 6, blockSize * 2 / 3);
        
        return get(0, 0, blockSize, blockSize);
        
    },
    plankBlock: function () {
        
        noStroke();
        fill(181, 160, 111);
        rect(0, 0, blockSize, blockSize);
        strokeWeight(1);
        stroke(0);
        line(blockSize * 3 / 4, 0, blockSize * 3 / 4, blockSize / 3);
        line(blockSize / 4, blockSize / 3, blockSize / 4, blockSize * 2 / 3);
        line(blockSize / 2, blockSize * 2 / 3, blockSize / 2, blockSize);
        line(0, 0, blockSize, 0);
        line(0, blockSize / 3, blockSize, blockSize / 3);
        line(0, blockSize * 2 / 3, blockSize, blockSize * 2 / 3);
        fill(115, 115, 115);
        ellipse(blockSize * 7 / 12, blockSize  * 11 / 60, blockSize / 20, blockSize / 20);
        ellipse(blockSize * 11 / 12, blockSize  * 11 / 60, blockSize / 20, blockSize / 20);
        ellipse(blockSize / 12, blockSize * 31 / 60, blockSize / 20, blockSize / 20);
        ellipse(blockSize * 5 / 12, blockSize * 31 / 60, blockSize / 20, blockSize / 20);
        ellipse(blockSize / 3, blockSize * 51 / 60, blockSize / 20, blockSize / 20);
        ellipse(blockSize * 2 / 3, blockSize * 51 / 60, blockSize / 20, blockSize / 20);
        
        return get(0, 0, blockSize, blockSize);
        
    },
    stone_plankBlock: function () {
        
        noStroke();
        fill(120);
        rect(0, 0, blockSize, blockSize);
        strokeWeight(1);
        stroke(100);
        line(blockSize / 6, blockSize / 5, blockSize / 5, blockSize / 2);
        line(blockSize / 6, blockSize * 2 / 3, blockSize / 3, blockSize * 7 / 8);
        line(blockSize / 2, blockSize  * 7 / 12, blockSize * 3 / 4, blockSize / 5);
        line(blockSize * 2 / 3, blockSize * 7 / 8, blockSize * 5 / 6, blockSize * 2 / 3);
        noStroke();
        fill(181, 160, 111);
        rect(0, 0, blockSize, blockSize / 3);
        stroke(0);
        line(blockSize * 3 / 4, 0, blockSize * 3 / 4, blockSize / 3);
        line(0, 0, blockSize, 0);
        line(0, blockSize / 3, blockSize, blockSize / 3);
        ellipse(blockSize * 7 / 12, blockSize  * 11 / 60, blockSize / 20, blockSize / 20);
        ellipse(blockSize * 11 / 12, blockSize  * 11 / 60, blockSize / 20, blockSize / 20);
        
        return get(0, 0, blockSize, blockSize);
        
    },

    forestBack: function () {},
    hqBack: function () {
        background(185);
        
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
        
        return get(0, 0, 400, 400);
    }
};

//}

/** Image loading function **/
// {

var curLoad = 0;
var loaded = false;
var load = function () {
    var obj = Object.keys(images);
    
    images[obj[curLoad]] = images[obj[curLoad]]();
    
    curLoad++;
    
    if (curLoad >= Object.keys(images).length) {
        loaded = true;
    }
    
};

//}

/** Rect-to-rect collision **/
// {

var collide = function (obj1, obj2) {
    if (obj1.x < obj2.x + obj2.w && obj1.x + obj1.w > obj2.x && obj1.y < obj2.y + obj2.h && obj1.y + obj1.h > obj2.y) {
        return true;
    } 
};

//}

/** Camera **/
// {
    
var cam = {
    x : 0,
    y : 0
};

//}

/** Eyes for the ninjas **/
// {

var Eyes = function (t, v) {
    fill(255, 255, 255, t.opac);
    ellipse(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 5);
    ellipse(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 5);
    fill(0, 0, 0, t.opac);
    if (t.velx < 0) {
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 5, 90, 270);
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 8, v.h / 5, -90, 90);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 5, 90, 270);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 8, v.h / 5, -90, 90);
    }
    else if (t.velx > 0) {
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 5, -90, 90);
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 8, v.h / 5, 90, 270);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 5, -90, 90);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 8, v.h / 5, 90, 270);
    } 
    else if (t.vely > 0.25) {
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 5, 0, 180);
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 8, 180, 360);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 5, 0, 180);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 8, 180, 360);
    } 
    else if (t.vely < 0.25) {
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 5, 180, 360);
        arc(v.x + v.w / 4, v.y + v.h / 3, v.w / 5, v.h / 8, 0, 180);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 5, 180, 360);
        arc(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 5, v.h / 8, 0, 180);
    } 
    else {
        ellipse(v.x + v.w / 4, v.y + v.h / 3, v.w / 6, v.h / 6);
        ellipse(v.x + v.w * 3 / 4, v.y + v.h / 3, v.w / 6, v.h / 6);
    }
};

//}

/** Player **/
// {

var Player = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.velx = 0;
    this.vely = 0;
    this.maxSpeed = 3;
    
    this.falling = false;
    this.gravity = 0.25;
    
    this.health = 100;
    this.jumpR = -5;
    this.dead = false;
    this.deathCounter = 0;
    this.particles = [];
};
Player.prototype.update = function (blocks) {
    if (!this.dead) {
        if (keys[UP] && !this.falling) {
            this.falling = true;
            this.vely = -6;
        }
        if (keys[LEFT]) {
            this.velx -= 1;
        }
        if (keys[RIGHT]) {
            this.velx += 1;
        }
        if (!keys[RIGHT] && !keys[LEFT]) {
            if (this.velx > 0) {
                this.velx -= 1;
            }
            if (this.velx < 0) {
                this.velx += 1;
            }
        }
        if (this.velx > this.maxSpeed) {
            this.velx = this.maxSpeed;
        }
        if (this.velx < -this.maxSpeed) {
            this.velx = -this.maxSpeed;
        }
        if (this.falling) {
            this.jumpR += 7;
        }
        if (this.jumpR > 360) {
            this.jumpR = 0;
        }
    
        //this.x += this.velx;
        this.applyCollision(blocks, this.velx, 0);
        
        this.falling = true;
        this.y += this.vely;
        this.applyCollision(blocks, 0, this.vely);
        this.vely += this.gravity;
    }
    
    if (this.health <= 0 || keys[82]) {
        this.dead = true;
    }
};
Player.prototype.applyCollision = function (obj, velx, vely) {
    for (var i = 0; i < obj.length; i++) {
        if (collide(this, obj[i])) {
            if (vely > 0){
                this.vely = 0;
                this.falling = false;
                this.y = obj[i].y - this.h;
                this.jumpR = lerp(this.jumpR, 359, 0.1);
            }
            if (vely < 0){
                this.vely = 0;
                this.falling = true;
                this.y = obj[i].y + obj[i].h;
            }
            if (velx < 0){
                this.velx = 0;
                this.x = obj[i].x + obj[i].w;
            }
            if (velx > 0){
                this.velx = 0;
                this.x = obj[i].x - this.w;
            }
        }
    }
};
Player.prototype.draw = function () {
    noStroke();
    if (!this.dead) {
        pushMatrix();
            translate(this.x + this.w / 2, this.y + this.h / 2);
            rotate(this.jumpR);
            translate(-(this.x + this.w / 2), -(this.y + this.h / 2));
            fill(201, 176, 123);
            rect(this.x, this.y, this.w, this.h, 5);
            fill(0);
            rect(this.x, this.y + this.w / 2, this.w, this.h / 2, 0, 0, 5, 5);
            rect(this.x, this.y, this.w, this.h / 5, 5, 5, 0, 0);
            fill(204, 204, 0);
            rect(this.x + this.w * 13 / 30, this.y + this.h * 7 / 11, this.w / 8, this.h / 5, 0, 5, 5, 0);
            fill(97, 74, 13);
            rect(this.x, this.y + this.h * 2 / 3, this.w, this.h / 8);
            fill(204, 204, 0);
            rect(this.x + this.w / 3, this.y + this.h * 7 / 11, this.w / 10, this.h / 5, 5, 0, 0, 5);
            Eyes(this, this);
        popMatrix();
        this.particles.length = 0;
    }
    else if (this && this.dead) {
        if (this.particles.length < 20) {
            this.particles.push({
                x: this.x + random(0, this.w),
                y: this.y + random(0, this.h),
                size: random(10, 50),
                opac: 75,
            });
        }
        
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            
            fill(0, 0, 0, p.opac);
            ellipse(p.x, p.y, p.size, p.size);
            
            if (p.opac < 0) {
                p.opac -= 5;
            }
        }
    }
};

var players = [];
players.add = function (x, y, w, h) {
    this.push(new Player(x, y, w, h));
};
players.apply = function (blocks, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(blocks);
        this[i].draw(cam);
    }
};

//}

/** Blocks **/
// {

var Block = function (x, y, w, h, type) {
    this.x = x;
    this.X = x;
    this.y = y;
    this.Y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.dirtId = random(100);
};
Block.prototype.draw = function () {
    
    this.x = this.X + cam.x;
    
    switch (this.type) {
        case "dirt": {
            image(images.dirtBlock, this.x, this.y);
            if (this.dirtId > 94 && this.dirtId <= 97) {
                image(images.dirtBone, this.x, this.y);
            }
            if (this.dirtId > 97) {
                image(images.dirtSkull, this.x, this.y);
            }
        } break;
        case "grass": {
            image(images.dirtBlock, this.x, this.y);
        } break;
        case "trunk": {
            image(images.trunkBlock, this.x, this.y);
        } break;
        case "leaves": {} break;
        case "stone": {
            image(images.stoneBlock, this.x, this.y);
        } break;
        case "plank": {
            image(images.plankBlock, this.x, this.y);
        } break;
        case "stone_plank": {
            image(images.stone_plankBlock, this.x, this.y);
        } break;
    }
    fill(0, 0, 0, 25);
    noStroke();
    quad(this.x + this.w / 4, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h / 3, this.x + this.w / 1.2, this.y + this.h / 1.5);
};

var blocks = [];
blocks.add = function (x, y, w, h, type) {
    this.push(new Block(x, y, w, h, type));
};
blocks.apply = function (cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

//}

/** Portal **/
// {

var Portal = function (x, y, w, h) {
    this.x = x;
    this.X = x;
    this.y = y;
    this.Y = y;
    this.w = w;
    this.h = h;
    this.doorW = blockSize;
    this.complete = false;
};
Portal.prototype.update = function (players) {
    for (var i = 0; i < players.length; i++) {
        if (collide(this, players[i]) && !this.complete) {
            screenColor = [255, 255, 255];
            transparency += 5;
            if (this.doorW > blockSize / 2) {
                this.doorW -= 0.5;
            }
        }
        if (transparency > 0 && !collide(this, players[i]) && !this.complete) {
            transparency -= 5;
            if (this.doorW < blockSize) {
                this.doorW += 0.5;
            }
        }
        if (transparency > 255) {
            this.complete = true;
        }
    }
};
Portal.prototype.draw = function () {
    
    this.x = this.X + cam.x;
    
    noStroke();
    fill(255, 255, 255, 100);
    rect(this.x, this.y, blockSize, blockSize);
    fill(71, 50, 16);
    rect(this.x, this.y, this.doorW, this.h);
    strokeWeight(1);
    stroke(173, 139, 2);
    rect(this.x + this.doorW / 10, this.y + this.h / 10, this.doorW * 4 / 5, this.h * 4 / 5);
    noStroke();
    fill(100);
    ellipse(this.x + this.doorW * 2 / 3, this.y + this.h / 2, this.w / 4, this.h / 4);
    fill(150);
    ellipse(this.x + this.doorW * 49 / 75, this.y + this.h * 37 / 75, this.w / 6, this.h / 6);
};

var portals = [];
portals.add = function (x, y, w, h) {
    this.push(new Portal(x, y, w, h));
};
portals.apply = function (players, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(players);
        this[i].draw(cam);
    }
};

//}

/** End-of-level object-removal function and objects array **/
// {

var objects = [players, blocks, portals];
objects.remove = function () {
    for (var i = 0; i < objects.length; i++){
        for (var j = 0; j < objects[i].length; j++){
            objects[i].splice(j, objects[i].length);
        }
    }
};

//}

/** Game **/
// {

var Game = function () {
    this.levels = [
        [
            "                                                    ",
            "                                                    ",
            "                                                    ",
            "                              !                     ",
            "                                                    ",
            "P                                                   ",
            "ddddsssspppp%%%%ddddddddddddddd                     ",
            "ddddsssspppp%%%%ddddddddddddddd                     ",
            "ddddsssspppp%%%%ddddddddddddddd                     ",
            "ddddsssspppp%%%%ddddddddddddddd                     ",
            "ddddsssspppp%%%%ddddddddddddddd                     ",
            "ddddsssspppp%%%%ddddddddddddddd                     ",
        ]
    ];
    this.messages = [
        ""
    ];
    this.level = 0;
};
Game.prototype.loadMap = function () {
    for (var col = 0; col < this.levels[this.level].length; col++) {
        for (var row = 0; row < this.levels[this.level][col].length; row++) {
            var s = this.levels[this.level][col][row];
            if (s === "P") {
                players.add(row * blockSize, col * blockSize, blockSize, blockSize);
            }
            if (s === "d") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "dirt");
            }
            if (s === "g") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "grass");
            }
            if (s === "t") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "trunk");
            }
            if (s === "l") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "leaves");
            }
            if (s === "p") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "plank");
            }
            if (s === "s") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "stone");
            }
            if (s === "%") {
                blocks.add(row * blockSize, col * blockSize, blockSize, blockSize, "stone_plank");
            }
            if (s === "!") {
                portals.add(row * blockSize, col * blockSize, blockSize, blockSize);
            }
        }
    }
};
var t = 255;
Game.prototype.apply = function () {
    
    image(images.hqBack, 0, 0);
    
    cam.x -= players[0].velx;
    cam.y -= players[0].vely;
    
    blocks.apply();
    players.apply(blocks);
    portals.apply(players);
    
    for (var i = 0; i < portals.length; i++) {
        if (portals[i].complete) {
            objects.remove();
            this.level++;
            this.loadMap();
            t = 255;
        }
    }
    
    for (var i = 0; i < players.length; i++) {
        if (players[i].x < 0) {
            players[i].x = 0;
        }
        if (players[i].y > height * 3 / 2 || keys[82]) {
            players[i].dead = true;
        }
        
        if (players[i].dead){
            players[i].deathCounter++;
            if (players[i].deathCounter > 100){
                objects.remove();
                this.loadMap();
                this.deathCounter = 0;
                this.dead = false;
                this.health = 100;
                cam.x = 0;
                cam.y = 0;
            }
        }
        
        players[i].x = width / 2 - players[i].w / 2;
    }
    
    t--;
    for (var i = 0; i < this.levels.length; i++) {
        if (this.level === i) {
            textSize(25);
            fill(255, 255, 255, t);
            text(this.messages[i], 200, 50);
        }
    }
    
    fill(screenColor[0], screenColor[1], screenColor[2], transparency);
    rect(0, 0, width, height);
};

var game = new Game();

//}

/** Button **/
// {

var Button = function (x, y, w, h, txt, func) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.txt = txt;
    this.func = func;
    this.s = 1;
    this.mouseOver = false;
    this.draw = function () {
        pushMatrix();
            translate(this.x + this.w / 2, this.y + this.h / 2);
            scale(this.s);
            translate(-(this.x + this.w / 2), -(this.y + this.h / 2));
            noStroke();
            fill(201, 176, 123);
            rect(this.x, this.y, this.w, this.h, 8);
            fill(0);
            rect(this.x, this.y + this.h / 2, this.w, this.h / 2, 0, 0, 5, 5);
            rect(this.x, this.y, this.w, this.h / 5, 5, 5, 0, 0);
            fill(204, 204, 0);
            rect(this.x + this.w * 13 / 30, this.y + this.h * 7 / 11, this.w / 8, this.h / 5, 0, 5, 5, 0);
            fill(97, 74, 13);
            rect(this.x, this.y + this.h * 2 / 3, this.w, this.h / 8);
            fill(204, 204, 0);
            rect(this.x + this.w / 3, this.y + this.h * 7 / 11, this.w / 10, this.h / 5, 5, 0, 0, 5);
            fill(255);
            ellipse(this.x + this.w / 4, this.y + this.h / 3, this.w / 5, this.h / 5);
            ellipse(this.x + this.w * 3 / 4, this.y + this.h / 3, this.w / 5, this.h / 5);
            fill(0);
            ellipse(this.x + this.w / 4, this.y + this.h / 3, this.w / 6, this.h / 6);
            ellipse(this.x + this.w * 3 / 4, this.y + this.h / 3, this.w / 6, this.h / 6);
        popMatrix();
        
        fill(255);
        triangle(this.x + this.w * 11 / 10, this.y, this.x + this.w * 13 / 10, this.y - this.h / 4, this.x + this.w * 17 / 10, this.y - this.h / 4);
        ellipse(this.x + this.w * 3 / 2, this.y - this.h * 17 / 24, this.w * 2, this.h * 1);
        
        pushMatrix();
            translate(this.x + this.w * 3 / 2, this.y - this.h * 17 / 24);
            scale(this.w * 0.03, this.h * 0.03);
            translate(-(this.x + this.w * 3 / 2), -(this.y - this.h * 17 / 24));
            fill(0);
            textAlign(CENTER, CENTER);
            textSize(12);
            text(this.txt, this.x + this.w * 3 / 2, this.y - this.h * 17 / 24);
        popMatrix();
        
        if (this.mouseOver) {
            this.s = lerp(this.s, 1.2, 0.1);
        }
        else {
            this.s = lerp(this.s, 1, 0.1);
        }
        
        this.mouseOver = mouseX > this.x && mouseX < this.x + this.w &&
                         mouseY > this.y && mouseY < this.y + this.h;
    };
    this.clicked = function () {
        if (this.mouseOver) {
            this.func();
        }
    };
};

//}

/** Buttons **/
// {

var Play = new Button(75, 275, 50, 50, "Play!", function () {
    game.loadMap();
    scene = "game";
});

var How = new Button(250, 275, 50, 50, "How?", function () {
    scene = "how";
});

//}

/** Scenes **/
// {

var loaded2 = false;
var circle = 0;
var Load = function () {
    if (!loaded) {
        load();
    }
    
    background(255 / 2);
    noFill();
    strokeCap(SQUARE);
    strokeWeight(20);
    stroke(0);
    arc(195, 155, 200, 200, 0, circle);
    stroke(255);
    arc(200, 150, 200, 200, 0, circle);
    
    circle += round(random(0, 2));
    
    textSize(40);
    if (circle > 360) {
        fill(0);
        text("Loaded!", 195, 355);
        fill(255);
        text("Loaded!", 200, 350);
        if (circle > 380) {
            loaded2 = true;
        }
    }
    else {
        fill(0);
        text("Loading...", 195, 355);
        fill(255);
        text("Loading...", 200, 350);
    }
};

var Menu = function () {
    background(255 / 2);
    Play.draw();
    How.draw();
};

//}

/** Draw and mouseClicked functions **/
// {

draw = function () {
    try {
        if (loaded2) {
            switch (scene) {
                case "menu":
                    Menu();
                break;
                case "game":
                    game.apply();
                break;
            }
        }
        else {
            Load();
        }
    }
    catch (e) {
        println(e);
    }
};

mouseClicked = function () {
    if (scene === "menu") {
        Play.clicked();
        How.clicked();
    }
};

//}


