class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        const container = this.add.container(0, 300);

        const sprite = this.add.sprite(0, 0, 'lemming');

        const text = this.add.text(10, 10);

        container.add(sprite);

        this.tweens.add({
            targets: container,
            x: 800,
            duration: 3000,
            yoyo: true,
            repeat: -1,
            onUpdate: function ()
            {
                const p = container.localTransform.transformPoint(sprite.x, sprite.y);

                text.setText([
                    sprite.x,
                    sprite.y,
                    p.x,
                    p.y
                ]);
            }
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
