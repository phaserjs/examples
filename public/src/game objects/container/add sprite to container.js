class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        //  Our container
        const container = this.add.container(400, 300);

        //  Add some sprites - positions are relative to the Container x/y
        const sprite0 = this.add.sprite(0, 0, 'lemming');
        const sprite1 = this.add.sprite(-100, -100, 'lemming');
        const sprite2 = this.add.sprite(100, -100, 'lemming');
        const sprite3 = this.add.sprite(100, 100, 'lemming');
        const sprite4 = this.add.sprite(-100, 100, 'lemming');

        container.add(sprite0);
        container.add(sprite1);
        container.add(sprite2);
        container.add(sprite3);
        container.add(sprite4);

        //  You could also pass them in as an array, to save doing them one by one

        this.tweens.add({
            targets: container,
            angle: 360,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });
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
