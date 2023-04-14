class BootLoader extends Phaser.Scene
{
    preload ()
    {
        this.load.image('loader', 'assets/demoscene/birdy-nam-nam-loader.png');
        this.load.image('click', 'assets/demoscene/birdy-nam-nam-click.png');
    }

    create ()
    {
        this.scene.start('demo');
    }
}

class Example extends Phaser.Scene
{
    loadImage;
    track;
    bird;
    egg = 0;
    chick1;
    chick2;
    chick3;

    preload ()
    {
        this.loadImage = this.add.image(0, 0, 'loader').setOrigin(0);

        this.load.audio('jungle', [ 'assets/audio/jungle.ogg', 'assets/audio/jungle.mp3' ]);
        this.load.animation('birdyAnims', 'assets/demoscene/birdy.json');
        this.load.image('bg1', 'assets/demoscene/birdy-nam-nam-bg1.png');
        this.load.image('bg2', 'assets/demoscene/birdy-nam-nam-bg2.png');
        this.load.atlas('birdy', 'assets/demoscene/budbrain.png', 'assets/demoscene/budbrain.json');
    }

    create ()
    {
        this.sound.pauseOnBlur = false;

        this.track = this.sound.add('jungle');

        this.anims.create({
            key: 'lay',
            frames: this.anims.generateFrameNames('birdy', { prefix: 'lay', start: 0, end: 19 }),
            frameRate: 28

            // delay: 1
        });

        if (this.sound.locked)
        {
            this.loadImage.setTexture('click');

            this.sound.once('unlocked', () =>
            {
                this.startDemo();
            });
        }
        else
        {
            this.startDemo();
        }
    }

    startDemo ()
    {
        this.loadImage.setVisible(false);

        this.add.image(0, 0, 'bg1').setOrigin(0);

        this.bird = this.add.sprite(328, 152, 'birdy', 'lay0').setOrigin(0).setDepth(10);

        this.bird.on('animationcomplete', this.dropEgg);

        this.bird.anims.playAfterDelay('lay', 2250);

        // track.once('play', function ()
        // {
        //     bird.anims.playAfterDelay('lay', 2250);
        // });

        this.track.play();
    }

    dropEgg ()
    {
        console.log('dropEgg');

        const smallEgg = this.add.image(this.bird.x + 116, 228, 'birdy', 'egg-small').setOrigin(0);

        this.tweens.add({
            targets: smallEgg,
            y: 288,
            ease: 'Linear',
            delay: 800,
            duration: 200,
            completeDelay: 800,
            onComplete: this.moveBird,
            callbackScope: this
        });

        this.egg++;
    }

    moveBird ()
    {
        console.log('moveBird', this.egg, this.bird.x);

        if (this.egg < 3)
        {
            this.bird.x -= 124;

            this.bird.setFrame('lay0');

            this.bird.anims.play({ key: 'lay', delay: 0, frameRate: 28 });
        }
        else
        {
            //  Ready for scene 2
            // this.time.addEvent({ delay: 800, callback: changeScene, callbackScope: this });
        }
    }

    changeScene ()
    {
        this.children.removeAll();

        this.add.image(0, 0, 'bg2').setOrigin(0);

        this.chick1 = this.add.sprite(100, 72, 'birdy', 'hatch1').setOrigin(0);
        this.chick2 = this.add.sprite(260, 72, 'birdy', 'hatch1').setOrigin(0);
        this.chick3 = this.add.sprite(420, 72, 'birdy', 'hatch1').setOrigin(0);

        this.chick1.anims.playAfterDelay('hatch', 1000 - 200);
        this.chick2.anims.playAfterDelay('hatch', 2000 - 200);
        this.chick3.anims.playAfterDelay('hatch', 3000 - 200);

        this.time.addEvent({ delay: 4500, callback: () => this.checkDisOut()});
    }

    checkDisOut ()
    {
        this.chick1.anims.play('lookRight');
        this.chick2.anims.play('checkDisOut');
        this.chick3.anims.play('lookLeft');
    }
}

const loaderSceneConfig = {
    key: 'loader',
    active: true,
    scene: BootLoader
};

const demoSceneConfig = {
    key: 'demo',
    active: false,
    visible: false,
    scene: Example
};

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 640,
    height: 338,
    scene: [ loaderSceneConfig, demoSceneConfig ]
};

const game = new Phaser.Game(config);
