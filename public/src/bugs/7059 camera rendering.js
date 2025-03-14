class MainScene extends Phaser.Scene
{

    constructor()
    {
        super({ key: "MainScene" });
    }

    init() {
        this.cameras.main.setSize(400, 300).setName('1').setBackgroundColor(0xff0000);

        this.cameras.add(400, 0, 400, 300).setName('2').setBackgroundColor(0x00ffff);
        this.cameras.add(0, 300, 400, 300).setName('3').setBackgroundColor(0x0000ff);
        this.cameras.add(400, 300, 400, 300).setName('4').setBackgroundColor(0xffff00);
    }

    preload() {
        this.load.image("earth", "assets/pics/ayu.png");

        this.load.scripts('inspector', [
            'https://cdn.jsdelivr.net/npm/tweakpane@3.1.0',
            'https://cdn.jsdelivr.net/npm/phaser-plugin-inspector@2.4.1',
        ]);
    }

    create ()
    {
        this.earth = this.add.image(200, 150, "earth");
        // const gui = new dat.GUI();
        // for (let i = 0; i < this.cameras.cameras.length; i++)
        // {
        //     const camera = this.cameras.cameras[ i ];
        //     gui.add(camera, 'alpha', 0.1, 1).step(0.1);
        // }
    }

    update (time)
    {
        this.earth.rotation += 0.005;
        this.earth.y = this.earth.y + Math.sin(time / 1000 * 2)
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ MainScene ]
};

const game = new Phaser.Game(config);