class Example extends Phaser.Scene
{
    constructor()
    {
        super({
            key: "example"
        });
    }

    create ()
    {
        let interpValue = 0.5;
        const colorA = Phaser.Display.Color.IntegerToColor(0x000000); //Black
        const colorB = Phaser.Display.Color.IntegerToColor(0xFFFFFF); //White
        const colorObject = Phaser.Display.Color.Interpolate.ColorWithColor(colorA, colorB, 1, interpValue);
        console.log(colorObject);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Example ]
};

const game = new Phaser.Game(config);