class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('prometheus', 'assets/pics/Prometheus Brings Fire To Mankind.jpg');
    }

    create ()
    {
        const prometheus1 = this.add.image(200, 150, 'prometheus').setScale(0.5);
        const prometheus2 = this.add.image(600, 150, 'prometheus').setScale(0.5);
        const prometheus3 = this.add.image(200, 450, 'prometheus').setScale(0.5);
        const prometheus4 = this.add.image(600, 450, 'prometheus').setScale(0.5);

        Phaser.Actions.AddMaskShape(prometheus1, { useInternal: true });
        Phaser.Actions.AddMaskShape(prometheus2, { useInternal: true, scaleMode: -1 });
        Phaser.Actions.AddMaskShape(prometheus3, { useInternal: true, invert: true, shape: 'rectangle', region: {
            x: 260,
            y: 140,
            width: prometheus3.width - 600,
            height: 20
        } });
        Phaser.Actions.AddMaskShape(prometheus4, { useInternal: true, scaleMode: 1 });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2f3640',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
