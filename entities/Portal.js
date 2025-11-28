import { fill } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/colors.js";
import { rect } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/shapes.js";

import { Block } from "./Block.js";

import { collide } from "../helpers/collisionHelper.js";

import { globalSettings } from "../config/globalSettings.js";
import { cam } from "../helpers/cameraManager.js";

export class Portal extends Block {

    constructor (x, y, w, h) {
        super(x, y, w, h);

        this.complete = false;
    }

    update (player) {
        if (collide(this, player) && !this.complete) {
            globalSettings.screenOverlayColor = [255, 255, 255, 0];
            globalSettings.screenOverlayColor[3] += 5;
            if (this.doorW > globalSettings.blockSize / 2) {
                this.doorW -= 0.5;
            }
        }
        if (globalSettings.screenOverlayColor[3] > 0 && !collide(this, player) && !this.complete) {
            globalSettings.screenOverlayColor[3] -= 5;
            if (this.doorW < globalSettings.blockSize) {
                this.doorW += 0.5;
            }
        }
        if (globalSettings.screenOverlayColor[3] > 255) {
            this.complete = true;
        }
    }

    draw () {

        this.x = this.X + cam.x;

        fill(0, 0, 0, 30);
        rect(this.x, this.y, this.w, this.h);

    }

    display (player) {
        this.update(player);
        this.draw();
    }

}