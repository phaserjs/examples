class Example extends Phaser.Scene
{
    test7;
    test6;
    test5;
    test4;
    test3;
    test2;
    test1;

    preload ()
    {
        this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
    }

    create ()
    {
        this.add.image(0, 0, 'grid').setOrigin(0);

        //  Test 1
        //  Render object at given coordinates
        this.test1 = this.add.bitmapText(400, 50, 'desyrel', 'PHASER 3', 32).setOrigin(0.5);

        //  Test 2
        //  Render object at given coordinates factoring in origin 1
        this.test2 = this.add.bitmapText(400, 150, 'desyrel', 'PHASER 3', 32).setOrigin(1, 0.5);

        //  Test 3
        //  Render object at given coordinates factoring in origin 0
        this.test3 = this.add.bitmapText(400, 150, 'desyrel', 'PHASER 3', 32).setOrigin(0, 0.5);

        //  Test 4
        //  Render object with scale
        this.test4 = this.add.bitmapText(400, 250, 'desyrel', 'PHASER 3', 32).setOrigin(0.5).setScale(2);

        //  Test 5
        //  Render object with rotation
        this.test5 = this.add.bitmapText(400, 350, 'desyrel', 'PHASER 3', 32).setOrigin(0.5);

        //  Test 6
        //  Render object with alpha
        this.test6 = this.add.bitmapText(400, 450, 'desyrel', 'PHASER 3', 32).setOrigin(0.5).setAlpha(0.5);

        //  Test 7
        //  Render object with blend mode
        this.test7 = this.add.bitmapText(400, 550, 'desyrel', 'PHASER 3', 32).setOrigin(0.5).setBlendMode(1);
    }

    update ()
    {
        this.test5.rotation += 0.01;
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
