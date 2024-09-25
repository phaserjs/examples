class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.image('bg', 'assets/pics/checker.png');
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create ()
    {
        // this.add.image(0, 0, 'bg').setOrigin(0, 0).setDisplaySize(256, 256);

        // this.add.image(1, 1, 'bg').setOrigin(0, 0).setDisplaySize(256, 256);

        // this.add.image(140, 140, 'bg').setDisplaySize(257, 257);
        // this.add.image(140+257, 140, 'bg').setDisplaySize(257, 257);
        // this.add.image(140+257+257, 140, 'bg').setDisplaySize(257, 257);
        //   this.add.image(201, 300, 'bg').setDisplaySize(101, 101);

        //  49 x 249 (3.80)
        //  50 x 249 (dev)

        const p1 = this.add.image(100, 100, 'bg').setDisplaySize(101, 101);

        this.add.image(251.32, 103, 'bg').setDisplaySize(101, 101);

        this.add.image(401, 123, 'bg').setOrigin(0, 0).setDisplaySize(101, 101);


        // const p2 = this.add.image(201, 100, 'bg').setDisplaySize(101, 101);

        // console.log/(p1.x, p1.y, 'pic2', p2.x, p2.y);
        // console.log(p1.getBounds()); // x: 49.5, y: 249.5, wh: 101 (3.80 and dev)

    }
}

const config = {
    type: Phaser.WEBGL,
    backgroundColor: "00dd00",
    parent: 'phaser-example',
    scene: Example,
    roundPixels: true,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);