class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('background', 'assets/bugs/background.png');
        this.load.multiatlas('spin_wave', 'assets/bugs/e_spinwave.json', 'assets/bugs');
    }

    create ()
    {
        this.add.sprite(320, 180, 'background');

        this.anims.create({
            key: "spin",
            frames: this.anims.generateFrameNames('spin_wave', {
                start: 0,
                end: 31,
                zeroPad: 3,
                prefix: 'e_spinwave_',
                suffix: '.png'
            }),
            frameRate: 15,
            yoyo: false,
            repeat: -1
        });

        let spinWave = this.add.sprite(320, 180).play('spin');

        spinWave.setBlendMode(Phaser.BlendModes.ADD);
    }
}

const config = {
	type: Phaser.WEBGL,
	width: 640,
	height: 360,
	pixelArt: true,
    parent: 'phaser-example',
	scene: Example
}

const game = new Phaser.Game(config);
