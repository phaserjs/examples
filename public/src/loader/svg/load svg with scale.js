class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.svg('pencil', 'assets/svg/pencil.svg');
        this.load.svg('cartman', 'assets/svg/cartman.svg');
        this.load.svg('fireflower', 'assets/svg/fireflower.svg');

        // this.load.svg('pencil2', 'assets/svg/pencil.svg', { width: 104 * 4, height: 97 * 4 });
        // this.load.svg('cartman2', 'assets/svg/cartman.svg', { width: 104 * 4, height: 97 * 4 });

        this.load.svg('pencil2', 'assets/svg/pencil.svg', { scale: 0.2 });
        this.load.svg('cartman2', 'assets/svg/cartman.svg', { scale: 4.65 });
        this.load.svg('fireflower2', 'assets/svg/fireflower.svg', { scale: 0.3 });
    }

    create ()
    {
        const text = this.add.text(10, 10, 'Click to toggle', { font: '16px Courier', fill: '#000000' });

        //  Using default viewbox sizes + scaling:
        const svg0 = this.add.image(550, 350, 'fireflower').setScale(0.3).setOrigin(0);
        const svg1 = this.add.image(50, 100, 'cartman').setScale(3).setOrigin(0);
        const svg2 = this.add.image(440, 380, 'pencil').setScale(0.2).setOrigin(0);

        //  Using SVGs that were scaled during preload, not at run-time:
        const svg3 = this.add.image(550, 350, 'fireflower2').setOrigin(0).setVisible(false);
        const svg4 = this.add.image(50, 100, 'cartman2').setOrigin(0).setVisible(false);
        const svg5 = this.add.image(440, 380, 'pencil2').setOrigin(0).setVisible(false);

        this.input.on('pointerup', () =>
        {

            if (svg0.visible)
            {
                svg0.visible = false;
                svg1.visible = false;
                svg2.visible = false;
                svg3.visible = true;
                svg4.visible = true;
                svg5.visible = true;

                text.setText('SVGs resized during preload');
            }
            else
            {
                svg0.visible = true;
                svg1.visible = true;
                svg2.visible = true;
                svg3.visible = false;
                svg4.visible = false;
                svg5.visible = false;

                text.setText('SVGs resized at run-time');
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
