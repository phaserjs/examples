class MainScene extends Phaser.Scene
{

    constructor()
    {
        super({ key: "MainScene" });
    }

    create ()
    {
        const rtlText1 = this.add.text(200, 100, 'Text 1', { rtl: true });
        rtlText1.destroy();

        const regularText2 = this.add.text(200, 200, 'Text 2', { rtl: false }); // In Chrome / Edge, Text 2 would not be shown!

        const regularText3 = this.add.text(200, 300, 'Text 3', { rtl: false }); // In Chrome / Edge, Text 2 would not be shown!
        
        const regularText4 = this.add.text(200, 400, 'Text 4', { rtl: false }); // In Chrome / Edge, Text 2 would not be shown!
        
        const regularText5 = this.add.text(200, 500, 'Text 5', { rtl: true }); // In Chrome / Edge, Text 2 would not be shown!
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