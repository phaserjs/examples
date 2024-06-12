class Example extends Phaser.Scene {
    preload() {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create() {
        const gl = this.game.context;
        const renderer = this.game.renderer;

        var contextRestored = function (event) 
        {
            console.log('custom context restored event here');
        };

        renderer.setContextHandlers(undefined, contextRestored)

        const sprite = this.add.sprite(400, 300, 'eye').setInteractive();

        sprite.on('pointerdown', function (pointer) {
            gl.getExtension("WEBGL_lose_context").restoreContext();
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);