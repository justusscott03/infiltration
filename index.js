import { textFont, textAlign } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/text.js";
import { resetMatrix, pushMatrix, popMatrix, translate, scale } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/transformation.js";
import { background } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.2/colors.js";

import { Button } from "./entities/Button.js";
import { Player } from "./entities/Player.js";
import { Game } from "./entities/Game.js";

import { imageLoader } from "./helpers/imageLoader.js";
import { frameTime } from "./helpers/timeManager.js";
import { screenSize } from "./helpers/screenResize.js";
import { user } from "./helpers/ui.js";

import { globalSettings } from "./config/globalSettings.js";

function Infiltation () {

textFont("Times New Roman Bold Italic");
textAlign("CENTER", "CENTER");

//}

/** Eyes for the ninjas **/
// {

function eyes (t, v) {
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

const player = new Player(0, 0, globalSettings.blockSize, globalSettings.blockSize);

const button = new Button(200, 200, 50, 50, "", function () {
    console.log("Hello!");
    game.loadMap();
});

const game = new Game();

/** Scenes **/
// {

function Menu () {
    background(180);
    button.draw();
    game.apply();
}

//}

function draw () {
    try {

        if (!imageLoader.loaded) {
            imageLoader.load();
        }
        else {
            frameTime.current = Date.now();
            frameTime.delta = (frameTime.current - frameTime.last) / 1000;
            frameTime.last = frameTime.current;
            
            resetMatrix();
            
            background(0);

            pushMatrix();

                scale(screenSize.scaledWidth / screenSize.originalWidth, screenSize.scaledHeight / screenSize.originalHeight);

                Menu();

            popMatrix();

            user.update();
        }

        requestAnimationFrame(draw);
    }
    catch (e) {
        console.log(e);
    }
}
draw();

}

Infiltation();
