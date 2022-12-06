class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('light', 'assets/normal-maps/light.png');

        this.load.setPath('assets/tests/grave/');

        this.load.atlas('candle');
        this.load.image('background');
        this.load.image('clouds');
        this.load.image('fog');
        this.load.image('overlay');
        this.load.image('tombs', [ 'tombs.png', 'tombs_n.png' ]);
        this.load.image('tombsNormalMap', 'tombs_n.png');
    }

    create ()
    {
        this.add.image(512, 384, 'background').setAlpha(0.7);

        const clouds = this.add.image(1024, 32, 'clouds').setOrigin(0);

        this.tweens.add({
            targets: clouds,
            x: -1250,
            ease: 'Linear',
            duration: 400000,
            repeat: -1
        });

        const fog = this.add.image(1024, 200, 'fog').setOrigin(0);

        this.tweens.add({
            targets: fog,
            x: -3000,
            ease: 'Linear',
            duration: 300000,
            repeat: -1
        });

        const pic = this.add.image(512, 384, 'tombs');
        pic.setPipeline('Light2D');

        //  The 3 lights
        const dummy = this.add.image(900, 400, 'light').setVisible(false);

        const light1 = this.lights.addLight(280, 400, 200);
        const ellipse1 = new Phaser.Geom.Ellipse(light1.x, light1.y, 70, 100);

        const light2 = this.lights.addLight(650, 386, 200);
        const ellipse2 = new Phaser.Geom.Ellipse(light2.x, light2.y, 30, 40);

        const light3 = this.lights.addLight(900, 400, 200);

        this.time.addEvent({
            delay: 100,
            callback: function ()
            {
                Phaser.Geom.Ellipse.Random(ellipse1, light1);
                Phaser.Geom.Ellipse.Random(ellipse2, light2);
            },
            callbackScope: this,
            repeat: -1
        });

        this.tweens.add({
            targets: [ light3, dummy ],
            y: 150,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            duration: 3000
        });

        // We must enable the light system. By default is disabled
        this.lights.enable();

        //  The 2 candle flames
        this.anims.create({
            key: 'flicker',
            frames: this.anims.generateFrameNames('candle', { prefix: 'candleFl', start: 1, end: 14 }),
            repeat: -1,
            frameRate: 16,
            repeatDelay: function ()
            {
                return Math.random() * 6;
            }
        });

        this.add.sprite(652, 386, 'candle').setScale(0.25).play('flicker');
        this.add.sprite(260, 400, 'candle').setScale(0.5).play('flicker');

        this.add.image(512, 384, 'overlay');
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1024,
    height: 768,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
