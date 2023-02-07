export default class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        const box = this.add.image(512, 384, 'box').setAlpha(0);
        const boxOpen = this.add.image(512, 384, 'box-inside').setAlpha(0);

        const logo = this.add.image(512, -384, 'logo');

        this.tweens.add({
            targets: box,
            alpha: 1,
            duration: 2000
        });

        this.tweens.add({
            targets: logo,
            y: 384,
            delay: 1500,
            duration: 2000,
            ease: 'sine.out'
        });

        this.input.once('pointerdown', () => {

            this.tweens.add({
                targets: box,
                alpha: 0,
                duration: 1000
            });

            this.tweens.add({
                targets: boxOpen,
                alpha: 1,
                duration: 1000
            });

            this.tweens.add({
                targets: logo,
                y: 900,
                scale: 0.2,
                duration: 1000,
                ease: 'sine.out',
                onComplete: () => {
                    this.scene.start('Game');
                }
            });

        });
    }
}
