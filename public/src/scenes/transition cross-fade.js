class BootScene extends Phaser.Scene
{
    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
        this.load.image('arrow', 'assets/sprites/longarrow.png');
        this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
    }

    create ()
    {
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('mummy'),
            frameRate: 12,
            repeat: -1
        });

        this.scene.stop();
        this.scene.launch('SceneA');
        this.scene.launch('SceneB').sleep('SceneB');
    }
}

class SceneA extends Phaser.Scene
{
    create ()
    {
        this.face = this.add.image(0, 0, 'face').setOrigin(0);
        this.arrow = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);

        var cam = this.cameras.main;
        var targetCam = this.scene.get('SceneB').cameras.main; // sleeping

        this.input.once('pointerdown', function ()
        {
            this.scene.transition({
                target: 'SceneB',
                sleep: true,
                duration: 2000,
                onUpdate: function (progress)
                {
                    cam.setAlpha(1 - progress);
                    targetCam.setAlpha(progress);
                },
            });
        }, this);
    }

    update (time, delta)
    {
        this.arrow.angle += 0.36 * delta;
    }
}

class SceneB extends Phaser.Scene
{
    create ()
    {
        this.mummy = this.add.sprite(0, 300, 'mummy').setScale(5).play('walk');

        var cam = this.cameras.main;
        var targetCam = this.scene.get('SceneA').cameras.main; // sleeping

        this.input.once('pointerdown', function ()
        {
            this.scene.transition({
                target: 'SceneA',
                sleep: true,
                duration: 2000,
                onUpdate: function (progress)
                {
                    cam.setAlpha(1 - progress);
                    targetCam.setAlpha(progress);
                },
            });
        }, this);
    }

    update (time, delta)
    {
        this.mummy.x += 0.05 * delta;
        this.mummy.x %= 800;
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ new BootScene('Boot'), new SceneA('SceneA'), new SceneB('SceneB') ]
};

var game = new Phaser.Game(config);
