class Example extends Phaser.Scene
{
    rainbowMask;
    catAstroPhi;
    cat;

    preload ()
    {
        this.load.bitmapFont('atari-classic', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');

        this.load.image('bg', 'assets/animations/nyan/bg.png');

        this.load.image('rainbow', 'assets/animations/nyan/rainbow.png');

        this.load.spritesheet('cat', 'assets/animations/nyan/cat.png', { frameWidth: 97, frameHeight: 59 });

        this.load.audio('CatAstroPhi', [
            'assets/audio/CatAstroPhi_shmup_normal.ogg',
            'assets/audio/CatAstroPhi_shmup_normal.mp3'
        ]);
    }

    create ()
    {

        this.catAstroPhi = this.sound.add('CatAstroPhi');

        this.catAstroPhi.play({
            seek: 2.550
        });

        // play() method call above has the same effect as the
        // two lines below but it is done in only one command
        // and it is a bit more efficient

        // catAstroPhi.play();
        // catAstroPhi.seek = 2.550;

        this.add.image(400, 300, 'bg');

        if (this.sound.locked)
        {
            const text = this.add.bitmapText(400, 300, 'atari-classic', 'Tap to start', 40);
            text.x -= Math.round(text.width / 2);
            text.y -= Math.round(text.height / 2);

            this.sound.once('unlocked', function (soundManager)
            {
                text.visible = false;

                this.setup.call(this);

            }, this);
        }
        else
        {
            this.setup.call(this);
        }
    }

    update ()
    {
        if (this.cat)
        {
            this.cat.x = this.cat.width / 2 + (this.catAstroPhi.seek / this.catAstroPhi.duration) * (800 - this.cat.width);

            this.rainbowMask.clear();
            this.rainbowMask.fillRect(0, 0, this.cat.x - 15, 600);

            if (!this.catAstroPhi.isPlaying && this.cat.anims.isPlaying)
            {
                this.cat.anims.pause();
            }
            else if (this.catAstroPhi.isPlaying && !this.cat.anims.isPlaying)
            {
                this.cat.anims.resume();
            }

            this.cat.anims.timeScale = this.catAstroPhi.totalRate;
        }
    }

    setup ()
    {
        const gui = new dat.GUI();

        const sm = gui.addFolder('CatAstroPhi Sound');
        sm.add(this.catAstroPhi, 'seek', 0, this.catAstroPhi.duration).step(0.01).listen();
        sm.add(this.catAstroPhi, 'rate', 0.5, 2).listen();
        sm.add(this.catAstroPhi, 'detune', -1200, 1200).step(50).listen();
        sm.add(this.catAstroPhi, 'loop').listen();
        sm.add(this.catAstroPhi, 'play');
        sm.add(this.catAstroPhi, 'pause');
        sm.add(this.catAstroPhi, 'resume');
        sm.add(this.catAstroPhi, 'stop');
        sm.open();

        this.rainbowMask = this.make.graphics();

        const rainbow = this.add.image(400, 300, 'rainbow');
        rainbow.mask = new Phaser.Display.Masks.GeometryMask(this, this.rainbowMask);

        this.anims.create({
            key: 'cat',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 5, first: 0 }),
            frameRate: 15,
            repeat: -1
        });

        this.cat = this.add.sprite(0, 300, 'cat').setInteractive();
        this.cat.play('cat');

        this.input.setDraggable(this.cat);

        this.input.on('drag', (pointer, cat, dragX, dragY) =>
        {

            cat.x = Math.min(Math.max(cat.width / 2, dragX), 800 - cat.width / 2);

            this.catAstroPhi.seek = (cat.x - cat.width / 2) / (800 - cat.width) * this.catAstroPhi.duration;
        });
    }
}

/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 */

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    pixelArt: true,
    audio: {
        noAudio: true
    }
};

const game = new Phaser.Game(config);
