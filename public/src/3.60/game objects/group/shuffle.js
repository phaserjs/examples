class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('phaser', 'assets/sprites/phaser.png');
        this.load.image('atari', 'assets/sprites/atari400.png');
        this.load.image('bikku', 'assets/sprites/bikkuriman.png');
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('can', 'assets/sprites/cokecan.png');
    }

    create ()
    {
        const group = this.add.group();

        group.create(230, 200, 'atari');
        group.create(400, 200, 'phaser');
        group.create(480, 200, 'bikku');
        group.create(540, 200, 'block');
        group.create(600, 200, 'can');

        this.input.on('pointerdown', pointer =>
        {

            //  Shuffle the children
            Phaser.Actions.Shuffle(group.getChildren());

            //  Assign their new depth based on their position within the Group

            const children = group.getChildren();

            for (let i = 0; i < children.length; i++)
            {
                children[i].setDepth(i);
            }

        }, this);
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
