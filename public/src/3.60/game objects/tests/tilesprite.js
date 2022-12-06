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
        this.load.image('pic', 'assets/sprites/space-baddie.png');
    }

    create ()
    {
        this.add.image(0, 0, 'grid').setOrigin(0);

        //  Test 1
        //  Render object at given coordinates
        this.test1 = this.add.tileSprite(400, 50, 192, 32, 'pic').setOrigin(0.5);

        //  Test 2
        //  Render object at given coordinates factoring in origin 1
        this.test2 = this.add.tileSprite(400, 150, 192, 32, 'pic').setOrigin(1, 0.5);

        //  Test 3
        //  Render object at given coordinates factoring in origin 0
        this.test3 = this.add.tileSprite(400, 150, 192, 32, 'pic').setOrigin(0, 0.5);

        //  Test 4
        //  Render object with scale
        this.test4 = this.add.tileSprite(400, 250, 192, 32, 'pic').setOrigin(0.5).setScale(2);

        //  Test 5
        //  Render object with rotation
        this.test5 = this.add.tileSprite(400, 350, 192, 32, 'pic').setOrigin(0.5);

        //  Test 6
        //  Render object with alpha
        this.test6 = this.add.tileSprite(400, 450, 192, 32, 'pic').setOrigin(0.5).setAlpha(0.5);

        //  Test 7
        //  Render object with blend mode
        this.test7 = this.add.tileSprite(400, 550, 192, 32, 'pic').setOrigin(0.5).setBlendMode(1);
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
