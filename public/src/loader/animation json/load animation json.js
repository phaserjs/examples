class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.animation('gemData', 'assets/animations/gems.json');
        this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
    }

    create ()
    {
        this.add.sprite(400, 100, 'gems').play('diamond');
        this.add.sprite(400, 200, 'gems').play('prism');
        this.add.sprite(400, 300, 'gems').play('ruby');
        this.add.sprite(400, 400, 'gems').play('square');
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
