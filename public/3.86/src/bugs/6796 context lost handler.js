class Example extends Phaser.Scene {
    preload() {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create() {
        const gl = this.game.context;
        const renderer = this.game.renderer;

        var contextLost = function (event) 
        {
            console.log('custom context lost event here');
        };

        renderer.setContextHandlers(contextLost)

        const sprite = this.add.sprite(400, 300, 'eye').setInteractive();

        sprite.on('pointerdown', function (pointer) {
            gl.getExtension("WEBGL_lose_context").loseContext();
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);