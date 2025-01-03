var Trailer = (function() {
    
    Trailer = {
        messages : [
            "A boy..."
        ],
        scene : 0,
        timer : 0,
        changeSpeed : 5,
        fade : {
            opac : 255,
            mode : "out"
        }
    };
    
    Trailer.nextScene = function() {
        this.timer = 0;
        this.fade.mode = "in";
    };
    
    Trailer.pack = function() {
        if (this.scene === 0) {
            background(99, 211, 255);
        }
        for (var i = 0; i < this.messages.length; i++) {
            if (this.scene === i) {
                text(this.messages[i], 200, 50);
            }
        }
        noStroke();
        fill(0, 0, 0, this.fade.opac);
        rect(0, 0, width, height);
        if (this.fade.mode === "out") {
            if (this.fade.opac > 0) {
                this.fade.opac -= this.changeSpeed;
            }
        } 
        else {
            this.fade.opac += this.changeSpeed;
            if (this.fade.opac > 255) {
                this.scene++;
                this.fade.mode = "out";
            }
        }
    };
    
    return Trailer;
    
}) ();

var Movie = function() {
    Trailer.pack();
};

draw = function() {
    Movie();
};
