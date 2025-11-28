import { image, rect } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/shapes.js";
import { textSize, text } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/text.js";
import { fill } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/colors.js";

import { Portal } from "./Portal.js";
import { Player } from "./Player.js";
import { Block } from "./Block.js";

import { globalSettings } from "../config/globalSettings.js";

import { images } from "../lib/imageLibrary.js";

import { cam } from "../helpers/cameraManager.js";
import { user } from "../helpers/ui.js";

const canvas = document.getElementById("canvas");

const blockSize = globalSettings.blockSize;

export class Game {

    constructor () {
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
        this.messageAlpha = 255;

        this.player = new Player(0, 0, blockSize, blockSize);
        this.blocks = [];
        this.portals = [];
    }

    removeLevel () {
        const objects = [this.blocks, this.portals];
        for (let i = 0; i < objects.length; i++){
            for (let j = 0; j < objects[i].length; j++){
                objects[i].splice(j, objects[i].length);
            }
        }
    }

    loadMap () {
        for (let col = 0; col < this.levels[this.level].length; col++) {
            for (let row = 0; row < this.levels[this.level][col].length; row++) {

                const s = this.levels[this.level][col][row];
                if (s === "P") {
                    this.player.x = row * blockSize;
                    this.player.y = col * blockSize;
                    this.player.X = this.player.x;
                    this.player.Y = this.player.y;
                }
                if (s === "d") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "dirt"));
                }
                if (s === "g") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "grass"));
                }
                if (s === "t") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "trunk"));
                }
                if (s === "l") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "leaves"));
                }
                if (s === "p") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "plank"));
                }
                if (s === "s") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "stone"));
                }
                if (s === "%") {
                    this.blocks.push(new Block(row * blockSize, col * blockSize, blockSize, blockSize, "stone_plank"));
                }
                if (s === "!") {
                    this.portals.push(new Portal(row * blockSize, col * blockSize, blockSize, blockSize));
                }
            }
        }
    }

    apply () {
        
        image(images.hqBack, 0, 0, canvas.width, canvas.height);

        cam.x -= this.player.velx;
        cam.y -= this.player.vely;

        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }

        this.player.display(this.blocks);
        
        for (let i = 0; i < this.portals.length; i++) {
            this.portals[i].display(this.player);
            if (this.portals[i].complete) {
                this.removeLevel();
                this.level++;
                this.loadMap();
                this.messageAlpha = 255;
            }
        }

        if (this.player.x < 0) {
            this.player.x = 0;
        }
        if (this.player.y > canvas.height * 3 / 2 || this.player.health <= 0 || user.keys.r) {
            this.player.dead = true;
        }
        
        if (this.player.dead){
            this.player.deathCounter++;
            if (this.player.deathCounter > 100){
                this.removeLevel();
                this.loadMap();
                this.player.deathCounter = 0;
                this.player.dead = false;
                this.player.health = 100;
                cam.x = 0;
                cam.y = 0;
            }
        }
        
        this.player.x = canvas.width / 2 - this.player.w / 2;

        this.messageAlpha--;
        for (let i = 0; i < this.levels.length; i++) {
            if (this.level === i) {
                textSize(25);
                fill(255, 255, 255, this.messageAlpha);
                text(this.messages[i], 200, 50);
            }
        }

        fill(globalSettings.screenOverlayColor[0], globalSettings.screenOverlayColor[1], globalSettings.screenOverlayColor[2], globalSettings.screenOverlayColor[3]);
        rect(0, 0, canvas.width, canvas.height);

    }

}