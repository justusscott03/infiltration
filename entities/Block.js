import { random } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/math.js";
import { quad, image } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/shapes.js";
import { fill, noStroke } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/colors.js";
import { globalSettings } from "../config/globalSettings.js";

import { images } from "../lib/imageLibrary.js";

import { cam } from "../helpers/cameraManager.js";

const ctx = document.getElementById("canvas").getContext("2d");

export class Block {

    constructor (x, y, w, h, type) {
        this.x = x;
        this.X = x;
        this.y = y;
        this.Y = y;
        this.w = w;
        this.h = h;
        this.type = type;
        this.dirtId = random(0, 100);
    }

    draw () {
        
        this.x = this.X + cam.x;
        
        // Prevent the blocks from being transparent
        ctx.globalAlpha = 1;

        switch (this.type) {
            case "dirt": {
                image(images.dirtBlock, this.x, this.y, this.w, this.h);
                if (this.dirtId > 94 && this.dirtId <= 97) {
                    image(images.dirtBone, this.x, this.y, this.w, this.h);
                }
                if (this.dirtId > 97) {
                    image(images.dirtSkull, this.x, this.y, this.w, this.h);
                }
            } break;
            case "grass": {
                image(images.dirtBlock, this.x, this.y, this.w, this.h);
            } break;
            case "trunk": {
                image(images.trunkBlock, this.x, this.y, this.w, this.h);
            } break;
            case "leaves": {} break;
            case "stone": {
                image(images.stoneBlock, this.x, this.y, this.w, this.h);
            } break;
            case "plank": {
                image(images.plankBlock, this.x, this.y, this.w, this.h);
            } break;
            case "stone_plank": {
                image(images.stone_plankBlock, this.x, this.y, this.w, this.h);
            } break;
        }
        fill(0, 0, 0, 25);
        noStroke();
        quad(this.x + this.w / 4, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h / 3, this.x + this.w / 1.2, this.y + this.h / 1.5);
    }

}
