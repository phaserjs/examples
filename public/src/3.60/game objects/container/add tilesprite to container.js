class Example extends Phaser.Scene
{
    iter = 0;
    ts;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        //  Our container
        const container = this.add.container(400, 300).setName('conty');

        this.ts = this.add.tileSprite(0, 0, 400, 600, 'mushroom').setName('tiley');
        container.add(this.ts);

        const image = this.add.image(0, 0, 'mushroom').setName('mushy').setScale(4);
        container.add(image);

        this.input.on('pointerup', function ()
        {

            this.scene.stop();
        
        }, this);
    }

    update ()
    {
        this.ts.tilePositionX = Math.cos(-this.iter) * 400;
        this.ts.tilePositionY = Math.sin(-this.iter) * 400;

        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
