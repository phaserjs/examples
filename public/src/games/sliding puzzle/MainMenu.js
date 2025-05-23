import FilterShine from './FilterShine.js';
import FilterWipe from './FilterWipe.js';

export default class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        const box = this.add.image(512, 384, 'box');
        const logo = this.add.image(512, -384, 'logo');

        box.enableFilters();
        const wipe = new FilterWipe.Controller(this.cameras.main);
        box.filters.internal.add(wipe);
        wipe.setTopToBottom();
        wipe.setRevealEffect();

        logo.enableFilters();
        logo.filters.internal.add(new FilterShine.Controller(this.cameras.main));

        this.tweens.add({
            targets: wipe,
            progress: 1,
            duration: 3000
        });

        this.tweens.add({
            targets: logo,
            y: 384,
            delay: 1500,
            duration: 2000,
            ease: 'sine.out',
            onComplete: () => {
                this.input.once('pointerdown', () => {
                    wipe.setWipeEffect();
                    wipe.setTexture('box-inside');

                    this.tweens.add({
                        targets: logo,
                        alpha: 0,
                        duration: 1000,
                        ease: 'sine.out'
                    });

                    this.tweens.add({
                        targets: wipe,
                        progress: 1,
                        duration: 2500,
                        onComplete: () => {
                            this.scene.start('Game');
                        }
                    });
                });
            }
        });
    }
}
