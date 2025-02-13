const width = 1080;
const height = 1920;

class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();
        // draw a red rectangle with outline only the size of the game
        graphics.lineStyle(20, 0xff0000);
        graphics.strokeRect(0, 0, width, height);
        
        // draw a blue circle at all four corners of the game
        graphics.fillStyle(0x0000ff);
        graphics.fillCircle(0, 0, 50);
        graphics.fillCircle(width, 0, 50);
        graphics.fillCircle(0, height, 50);
        graphics.fillCircle(width, height, 50);

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.EXPAND,
        // mode: Phaser.Scale.FIT,
        // mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: width,
        height: height,
        max: {
            width: 4000,
            height: 100,
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
