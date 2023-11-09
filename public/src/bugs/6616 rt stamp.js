class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        })
    }

    // preload() {
    //     this.load.image('mushroom', 'assets/sprites/mushroom.png');
    // }

    create() {

        var rt = this.add.renderTexture(400, 300, 200, 200);

        rt.stamp('__WHITE', undefined, 0, 0, {scale: 10});
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        // mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: '#0a0067',
    scene: Game,

};

var game = new Phaser.Game(config);
