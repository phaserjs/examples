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
        
        var contextRestored = function (event) 
        {
            console.log('custom context restored event here');
        };

        renderer.setContextHandlers(contextLost, contextRestored)

        const sprite1 = this.add.sprite(400, 300, 'eye').setInteractive();

        sprite1.on('pointerdown', function (pointer) {
            gl.getExtension("WEBGL_lose_context").loseContext();
        });

        const sprite2 = this.add.sprite(600, 300, 'eye').setInteractive();

        sprite2.on('pointerdown', function (pointer) {
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