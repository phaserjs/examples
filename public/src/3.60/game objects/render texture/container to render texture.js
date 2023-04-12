class Example extends Phaser.Scene
{
    container;
    rt;

    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        this.container = this.add.container(400, 300).setVisible(false);

        //  Add some sprites - positions are relative to the Container x/y
        const sprite0 = this.add.sprite(0, 0, 'lemming');
        const sprite1 = this.add.sprite(-100, -100, 'lemming');
        const sprite2 = this.add.sprite(100, -100, 'lemming');
        const sprite3 = this.add.sprite(100, 100, 'lemming');
        const sprite4 = this.add.sprite(-100, 100, 'lemming');

        this.container.add([ sprite0, sprite1, sprite2, sprite3, sprite4 ]);

        this.rt = this.add.renderTexture(400, 300, 800, 600);

        this.rt.draw(this.container);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.container);
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
