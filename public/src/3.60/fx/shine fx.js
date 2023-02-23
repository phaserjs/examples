


class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('photomcard', 'assets/games/card-memory-game/cards/card-4.png');
    }

    create ()
    {
        const card = this.add.plane(this.sys.scale.width / 2, this.sys.scale.height / 2, 'photomcard');
        card.setScale(2)
        const fx = card.postFX.addShine(1, .2, 5);

        this.add.tween({
            targets: card,
            duration: 4000,
            repeatDelay: 800,
            rotateY: 360,
            repeat: -1
        });

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // pixelArt: true,
    backgroundColor: '#2f3640',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
