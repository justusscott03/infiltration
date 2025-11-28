import { pushMatrix, translate, scale, popMatrix } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/transformation.js";
import { lerp } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/math.js";
import { noStroke, fill } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/colors.js";
import { rect, ellipse, triangle, image } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/shapes.js";
import { textAlign, textSize, text } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/text.js";
import { images } from "../lib/imageLibrary.js";

import { user } from "../helpers/ui.js";

export class Button {

    constructor (x, y, w, h, txt, func) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.txt = txt;
        this.func = func;
        this.s = 1;
        this.mouseOver = false;
    }

    draw () {
        this.mouseOver = user.mouseX > this.x && user.mouseX < this.x + this.w &&
                         user.mouseY > this.y && user.mouseY < this.y + this.h;
        if (this.mouseOver) {
            this.s = lerp(this.s, 1.2, 0.1);
            if (user.mouseClicked) {
                this.func();
            }
        }
        else {
            this.s = lerp(this.s, 1, 0.1);
        }

        // pushMatrix();
        //     translate(this.x + this.w / 2, this.y + this.h / 2);
        //     scale(this.s);
        //     translate(-(this.x + this.w / 2), -(this.y + this.h / 2));
        //     noStroke();
        //     fill(201, 176, 123);
        //     rect(this.x, this.y, this.w, this.h, 8);
        //     fill(0);
        //     rect(this.x, this.y + this.h / 2, this.w, this.h / 2, 0, 0, 5, 5);
        //     rect(this.x, this.y, this.w, this.h / 5, 5, 5, 0, 0);
        //     fill(204, 204, 0);
        //     rect(this.x + this.w * 13 / 30, this.y + this.h * 7 / 11, this.w / 8, this.h / 5, 0, 5, 5, 0);
        //     fill(97, 74, 13);
        //     rect(this.x, this.y + this.h * 2 / 3, this.w, this.h / 8);
        //     fill(204, 204, 0);
        //     rect(this.x + this.w / 3, this.y + this.h * 7 / 11, this.w / 10, this.h / 5, 5, 0, 0, 5);
        //     fill(255);
        //     ellipse(this.x + this.w / 4, this.y + this.h / 3, this.w / 5, this.h / 5);
        //     ellipse(this.x + this.w * 3 / 4, this.y + this.h / 3, this.w / 5, this.h / 5);
        //     fill(0);
        //     ellipse(this.x + this.w / 4, this.y + this.h / 3, this.w / 6, this.h / 6);
        //     ellipse(this.x + this.w * 3 / 4, this.y + this.h / 3, this.w / 6, this.h / 6);
        // popMatrix();

        pushMatrix();
            translate(this.x + this.w / 2, this.y + this.h / 2);
            scale(this.s);
            translate(-(this.x + this.w / 2), -(this.y + this.h / 2));
        
            image(images.button, this.x, this.y, this.w, this.h);

        popMatrix();
        
        // fill(255);
        // triangle(this.x + this.w * 11 / 10, this.y, this.x + this.w * 13 / 10, this.y - this.h / 4, this.x + this.w * 17 / 10, this.y - this.h / 4);
        // ellipse(this.x + this.w * 3 / 2, this.y - this.h * 17 / 24, this.w * 2, this.h * 1);
        
        // pushMatrix();
        //     translate(this.x + this.w * 3 / 2, this.y - this.h * 17 / 24);
        //     scale(this.w * 0.03, this.h * 0.03);
        //     translate(-(this.x + this.w * 3 / 2), -(this.y - this.h * 17 / 24));
        //     fill(0);
        //     textAlign("CENTER", "CENTER");
        //     textSize(12);
        //     text(this.txt, this.x + this.w * 3 / 2, this.y - this.h * 17 / 24);
        // popMatrix();
    }
    
}