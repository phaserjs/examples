class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('contra', 'assets/pics/contra3.png');
    }

    create ()
    {
        const mesh = this.add.mesh2d(400, 300, 'contra',
            [
                -1, -1, 0, 0,
                -1, 1, 0, 1,
                1, -1, 1, 0,
                1, 1, 1, 1,
            ],
            [
                1, 2, 3, 0,
                0, 1, 2, 0,
            ],
            true
        )
        .buildOrderedIndices(2, true)
        .setScale(246, 201)
        .setTintMode(Phaser.TintModes.MULTIPLY_TWO);

        let tinted = false;

        // Switch between two sets of tint colors, using MULTIPLY_TWO tinting.
        this.time.addEvent({
            delay: 500,
            loop: true,
            callback: () => {
                if (tinted)
                {
                    mesh.setTint(0xffaa77).setTint2(0x444488);
                }
                else
                {
                    mesh.setTint(0xffffff).setTint2(0x000000);
                }
                tinted = !tinted;
            }
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
