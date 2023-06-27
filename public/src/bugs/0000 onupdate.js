class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ship', 'assets/tweens/spacetank.png');
    }

    create ()
    {
        const ship1 = this.add.image(200, 300, 'ship');
        const ship2 = this.add.image(600, 300, 'ship');

        // this.tweens.add({
        //     targets: [ ship1, ship2 ],
        //     alpha: {
        //         from: 1,
        //         to: 0,
        //         yoyo: true,
        //         duration: 500,
        //         ease: Phaser.Math.Easing.Sine.InOut,
        //     },
        //     onUpdate: (t) => {
        //         console.log(t.progress);
        //     }
        // });

        this.cameras.main.setBackgroundColor('rgb(87,255,0)');

        const timeline = this.add.timeline([
            {
                at: 1000,
                tween: {
                    targets: [ ship1, ship2 ],
                    alpha: {
                        from: 1,
                        to: 0,
                        yoyo: true,
                        duration: 500,
                        ease: Phaser.Math.Easing.Sine.InOut,
                    },
                    onUpdate: (t) => {
                        console.log(t.progress);
                    }
                }
            }
        ]);

        timeline.play();



    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 'rgb(87,255,0)',
    clearBeforeRender: false,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
