class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('back', 'assets/tweens/cardback.png');
        this.load.image('front', 'assets/tweens/cardfront.png');
    }

    create ()
    {
        const card1 = this.add.image(180, 300, 'back');
        const card2 = this.add.image(400, 300, 'back');
        const card3 = this.add.image(620, 300, 'back');

        //  Scale the card horizontally to zero (which takes 1 second)
        //  Then change the texture to the front of the card
        //  The 'yoyo' in the scaleX will reverse it back again

        this.tweens.add({
            targets: card1,
            props: {
                scaleX: { value: 0, duration: 1000, yoyo: true },
                texture: { value: 'front', duration: 0, delay: 1000 }
            },
            ease: 'Linear'
        });

        this.tweens.add({
            targets: card2,
            props: {
                scaleX: { value: 0, duration: 1000, yoyo: true },
                texture: { value: 'front', duration: 0, delay: 1500 }
            },
            ease: 'Linear',
            delay: 500
        });

        this.tweens.add({
            targets: card3,
            props: {
                scaleX: { value: 0, duration: 1000, yoyo: true },
                texture: { value: 'front', duration: 0, delay: 2000 }
            },
            ease: 'Linear',
            delay: 1000
        });
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
