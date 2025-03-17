class Example extends Phaser.Scene 
{
    constructor()
    {
        super();
    }

    create ()
    {
        const grid = this.add.grid(200, 200, 200, 200, 40, 40, 0xff00ff, 0.2, 0xff0000);
        grid.lineWidth = 10; // Only works on CANVAS
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);