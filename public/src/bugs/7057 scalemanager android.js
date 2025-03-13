class Example extends Phaser.Scene {

    constructor() {
        super({ key: "Example" });
    }

    preload() {
        this.load.image("earth", "assets/pics/ayu.png");
    }

    create() {
        this.earth = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, "earth");
    }

    update(time) {

        // cover window size
        // const w = this.scale.width;
        // const h = this.scale.height;
        // this.earth.setPosition(w * 0.5, h * 0.5);
        // this.earth.setDisplaySize(w, h);

        let w = window.innerWidth, h = window.innerHeight;
        this.earth.setPosition(0.5 * w, 0.5 * h);
        this.earth.setDisplaySize(w, h);
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.RESIZE,
        // autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Example
};

const game = new Phaser.Game(config);