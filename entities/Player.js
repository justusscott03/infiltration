import { noStroke, fill } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/colors.js";
import { pushMatrix, translate, rotate, popMatrix } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/transformation.js";
import { rect, ellipse } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/shapes.js";
import { random, lerp } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/math.js";

import { collide } from "../helpers/collisionHelper.js";

import { user } from "../helpers/ui.js";

export class Player {

    constructor (x, y, w, h) {
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
    }

    update (blocks) {
        if (!this.dead) {
            if (user.keys.w && !this.falling) {
                this.falling = true;
                this.vely = -6;
            }
            if (user.keys.a) {
                this.velx -= 1;
            }
            if (user.keys.d) {
                this.velx += 1;
            }
            if (!user.keys.d && !user.keys.a) {
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
    }

    applyCollision (obj, velx, vely) {
        for (let i = 0; i < obj.length; i++) {
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
    }

    draw () {
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
                //Eyes(this, this);
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
            
            for (let i = 0; i < this.particles.length; i++) {
                const p = this.particles[i];
                
                fill(0, 0, 0, p.opac);
                ellipse(p.x, p.y, p.size, p.size);
                
                if (p.opac < 0) {
                    p.opac -= 5;
                }
            }
        }
    }

    display (blocks) {
        this.update(blocks);
        this.draw();
    }

}