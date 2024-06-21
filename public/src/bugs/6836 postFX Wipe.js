class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pyramid', 'assets/sprites/pyramid.png');
        this.load.image('bg', 'assets/skies/space4.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.pyramid = this.add.image(400, 300, 'pyramid');
        this.fx = this.pyramid.postFX.addWipe(0.1, 1, 1);

        this.fadeOutPyramid();
    }

    fadeInPyramid()
    {
        this.fx.progress = 0;
        this.fx.reveal = true;
        
        this.tweens.add({
            targets: this.fx,
            progress: 1,
            duration: 2000,
            callbackScope: this,
            onComplete: () => {
                this.fadeOutPyramid();
            }
        });
    }

    fadeOutPyramid()
    {
        this.fx.progress = 0;
        this.fx.reveal = false;

        this.tweens.add({
            targets: this.fx,
            progress: 1,
            duration: 2000,
            callbackScope: this,
            onComplete: () => {
                this.fadeInPyramid();
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
