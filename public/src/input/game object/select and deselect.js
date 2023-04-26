class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.atlas('ui', 'assets/ui/dark-ui.png', 'assets/ui/dark-ui.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.currentSwitch = null;

        //  Create a bunch of toggles

        for (let i = 0; i < 8; i++)
        {
            const x = (i < 4) ? 200 : 600;
            const y = (i % 4) * 140 + 100;

            const sprite = this.add.sprite(x, y, 'ui', 'toggle-off').setInteractive();

            sprite.on('pointerdown', (pointer, x, y, event) => {

                if (this.currentSwitch)
                {
                    this.currentSwitch.setFrame('toggle-off');
                }

                if (this.currentSwitch === sprite)
                {
                    this.currentSwitch = null;
                }
                else
                {
                    this.currentSwitch = sprite;

                    sprite.setFrame('toggle-on');
                }

                event.stopPropagation();

            });
        }

        //  Clicking anywhere else in the game will deselect the current switch

        this.input.on('pointerdown', () => {

            if (this.currentSwitch)
            {
                this.currentSwitch.setFrame('toggle-off');
                this.currentSwitch = null;
            }

        });
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
