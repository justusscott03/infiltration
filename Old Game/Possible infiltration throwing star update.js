/** Throwing star **/
// {

var Star = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.collected = false;
    this.stars = [];
    this.direction = "";
};
Star.prototype.update = function(players, blocks, enemies, cam) {
    var view = cam.view(this);
    
    for(var i = 0; i < players.length; i++) {
        if(collide(this, players[i])) {
            this.collected = true;
        }
    }
    if(view && this.collected) {
        for(var i = 0; i < players.length; i++) {
            if(keys[DOWN] && frameCount % 10 === 0 && !players[i].dead) {
                this.stars.push({
                    x: view.x,
                    y: view.y,
                    w: 3,
                    h: 3,
                    direction: this.direction
                });
            }
        }
        
        for(var i = 0; i < this.stars.length; i++) {
            var s = this.stars[i];
            noStroke();
            fill(0, 0, 0);
            rect(s.x, s.y, s.w, s.h);
            
            if(s.direction === "right") {
                s.x += 5;
            }
            if(s.direction === "left") {
                s.x -= 5;
            }
            
            for(var j = 0; j < blocks.length; j++){
                if(collide(s, blocks[j])){
                    this.stars.splice(i, 1);
                    println("BLOCKED");
                }
            }
            
            for(var e = 0; e < enemies.length; e++) {
                if(collide(s, enemies[e])) {
                    enemies[e].health--;
                    this.stars.splice(i, 1);
                    println("HURTING");
                }
            }
            
            if(s.x > width || s.x + s.w < 0){
                this.stars.splice(i, 1);
                println("SPLICED");
            }
        }
    }
};
Star.prototype.draw = function(players, cam) {
    var view = cam.view(this);
    
    if(view) {
        if(!this.collected) {
            noStroke();
            fill(0, 0, 0);
            rect(view.x, view.y + view.h / 12 + sin(frameCount * 4) * 2, view.w / 4, view.h / 3);
            rect(view.x, view.y + view.h / 12 + sin(frameCount * 4) * 2, view.w, view.h / 6);
        }
        else {
            var newWidth;
            var newHeight;
            for(var i = 0; i < players.length; i++) {
                newWidth = view.w - players[i].w / 4;
                newHeight = view.h - players[i].h / 1.5;
                if(players[i].velx > 0) {
                    this.direction = "right";
                    this.x = players[i].x + players[i].w + players[i].w / 4;
                }
                if(players[i].velx < 0) {
                    this.direction = "left";
                    this.x = players[i].x - players[i].w / 4;
                }
                this.y = players[i].y + players[i].h / 2;
            }
            noStroke();
            fill(0, 0, 0);
            if(this.direction === "right") {
                rect(view.x, view.y, newWidth / 3, newHeight);
                rect(view.x, view.y, newWidth, newHeight / 3);
            }
            if(this.direction === "left") {
                rect(view.x, view.y, -newWidth / 3, newHeight);
                rect(view.x, view.y, -newWidth, newHeight / 3);
            }
        }
    }
};

var stars = [];
stars.add = function(x, y, w, h) {
    this.push(new Star(x, y, w, h));
};
stars.apply = function(players, blocks, enemies, cam) {
    for(var i = 0; i < this.length; i++) {
        this[i].update(players, blocks, enemies, cam);
        this[i].draw(players, cam);
    }
};

//}