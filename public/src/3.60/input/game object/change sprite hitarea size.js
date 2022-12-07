class Example extends Phaser.Scene
{
    rotation = 0.005;
    hitarea2;
    hitarea1;
    atari3;
    atari2;
    atari1;

    preload ()
    {
        this.load.image('atari1', 'assets/sprites/atari130xe.png');
        this.load.image('atari2', 'assets/sprites/atari130xe-input.png');
    }

    create ()
    {
        //  The texture is 220 x 104 pixels in size.

        //  By default, `setInteractive` will create a Rectangle with
        //  a position of 0 x 0 and a size of 220 x 104:
        this.atari1 = this.add.image(150, 300, 'atari1').setInteractive();

        //  For this one, we'll change it so that the hit area is only over
        //  the keyboard part of the image (i.e. a smaller hit area than the texture size):
        this.atari2 = this.add.image(400, 300, 'atari2').setInteractive();

        //  The 18 x 51 is the coordinate from the top-left of the texture
        //  The 183 x 39 is the width and height of the hit area rectangle
        this.atari2.input.hitArea.setTo(18, 51, 183, 39);

        //  For this one, we'll change it so that the hit area is 60px bigger than the texture on each side
        this.atari3 = this.add.image(650, 300, 'atari1').setInteractive();

        //  Coordinates are relative from the top-left, so we want out hit area to be
        //  an extra 60 pixels around the texture, so -30 from the x/y and + 60 to the texture width and height
        this.atari3.input.hitArea.setTo(-30, -30, 220 + 60, 104 + 60);

        //  Debug output:
        const text = this.add.text(10, 10, 'Click to toggle rotation\nMouse over the hit areas', { font: '16px Courier', fill: '#00ff00' });

        this.atari1.on('pointerover', () => { text.setText('Over Image 1'); });
        this.atari1.on('pointerout', () => { text.setText(''); });

        this.atari2.on('pointerover', () => { text.setText('Over Image 2'); });
        this.atari2.on('pointerout', () => { text.setText(''); });

        this.atari3.on('pointerover', () => { text.setText('Over Image 3'); });
        this.atari3.on('pointerout', () => { text.setText(''); });


        //  Draw the hit areas to a graphics object so we can visualize it:
        this.hitarea1 = this.add.rectangle(this.atari1.x, this.atari1.y, this.atari1.width, this.atari1.height, 0x00ff00, 0.5);
        this.hitarea2 = this.add.rectangle(this.atari3.x, this.atari3.y, this.atari3.width + 60, this.atari3.height + 60, 0xff00ff, 0.5);

        this.input.on('pointerdown', () =>
        {

            this.rotation = (this.rotation === 0) ? 0.005 : 0;

        });
    }

    update ()
    {
        this.atari1.rotation += this.rotation;
        this.atari2.rotation += this.rotation;
        this.atari3.rotation += this.rotation;
        
        this.hitarea1.rotation += this.rotation;
        this.hitarea2.rotation += this.rotation;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
