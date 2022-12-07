class Example extends Phaser.Scene
{
    text;
    imageR;
    imageE;
    imageS;
    imageA;
    imageH;
    imageP;
    keys;

    preload ()
    {
        this.load.image('P', 'assets/input/p.png');
        this.load.image('H', 'assets/input/h.png');
        this.load.image('A', 'assets/input/a.png');
        this.load.image('S', 'assets/input/s.png');
        this.load.image('E', 'assets/input/e.png');
        this.load.image('R', 'assets/input/r.png');
    }

    create ()
    {
        this.imageP = this.add.image(50, 300, 'P').setOrigin(0);
        this.imageH = this.add.image(200, 300, 'H').setOrigin(0);
        this.imageA = this.add.image(350, 300, 'A').setOrigin(0);
        this.imageS = this.add.image(500, 300, 'S').setOrigin(0);
        this.imageE = this.add.image(650, 300, 'E').setOrigin(0);
        this.imageR = this.add.image(800, 300, 'R').setOrigin(0);

        this.keys = this.input.keyboard.addKeys('P,H,A,S,E,R');

        this.text = this.add.text(10, 10, 'Press one of the keys P, H, A, S, E or R', { font: '16px Courier', fill: '#000000' });
    }

    update ()
    {
        this.imageP.setAlpha((this.keys.P.isDown) ? 1 : 0.2);
        this.imageH.setAlpha((this.keys.H.isDown) ? 1 : 0.2);
        this.imageA.setAlpha((this.keys.A.isDown) ? 1 : 0.2);
        this.imageS.setAlpha((this.keys.S.isDown) ? 1 : 0.2);
        this.imageE.setAlpha((this.keys.E.isDown) ? 1 : 0.2);
        this.imageR.setAlpha((this.keys.R.isDown) ? 1 : 0.2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
