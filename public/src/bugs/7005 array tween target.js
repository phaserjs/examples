class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        this.add.circle(0, 0, 100, 0xff0000);
        this.add.rectangle(this.scale.width, 0, 100, 100, 0x00ff00);
        this.add.ellipse(0, this.scale.height, 100, 100, 0x00ff00);
        this.add.star(this.scale.width, this.scale.height, 5, 25, 100, 0x00ff00);

        this.tweens.add({ targets: this.children.list, duration: 1000, props: { x: this.scale.width / 2, y: this.scale.height / 2 } })
            .on(Phaser.Tweens.Events.TWEEN_START, () => console.log('added on start listener'));

        // add another item afterwards
        const t = this.add.text(0, 0, 'Test Text', { align: 'center' }).setOrigin(0.5);
        console.log('add item');

        // move it so that it's within the original lists count
        this.children.moveTo(t, 1);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
