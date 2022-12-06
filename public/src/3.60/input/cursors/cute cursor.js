class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('box', 'assets/sprites/block.png');
    }

    create ()
    {
        this.input.setDefaultCursor('url(assets/input/cursors/vigyori/arrow.cur), pointer');

        //  Create some custom cursor boxes

        this.add.sprite(100, 300, 'box').setInteractive({ cursor: 'url(assets/input/cursors/vigyori/link.cur), pointer' });
        this.add.sprite(300, 300, 'box').setInteractive({ cursor: 'url(assets/input/cursors/vigyori/cross.cur), pointer' });
        this.add.sprite(500, 300, 'box').setInteractive({ cursor: 'url(assets/input/cursors/vigyori/help.cur), pointer' });
        this.add.sprite(700, 300, 'box').setInteractive({ cursor: 'url(assets/input/cursors/vigyori/no.cur), pointer' });
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
