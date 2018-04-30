class Controller extends Phaser.Scene {

    constructor ()
    {
        super('Controller');
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/tests/scenes/ui.png', 'assets/tests/scenes/ui.json');
        this.load.bitmapFont('digital', 'assets/tests/scenes/digital.png', 'assets/tests/scenes/digital.xml');
    }

    create ()
    {
        this.add.image(0, 0, 'ui', 'panel').setOrigin(0);

        //  Buttons
        this.add.image(36, 26, 'ui', 'button-out').setOrigin(0);
        this.add.image(157, 26, 'ui', 'button-out').setOrigin(0);
        this.add.image(278, 26, 'ui', 'button-down').setOrigin(0);

        this.add.image(36, 76, 'ui', 'button-out').setOrigin(0);
        this.add.image(157, 76, 'ui', 'button-out').setOrigin(0);
        this.add.image(278, 76, 'ui', 'button-out').setOrigin(0);

        //  Button Labels
        this.add.image(0, 0, 'ui', 'scene-labels').setOrigin(0);

        //  LCD
        this.add.bitmapText(520, 44, 'digital', 'scene a', 32).setOrigin(0.5, 0).setAlpha(0.8);
        this.add.bitmapText(520, 74, 'digital', 'is active', 22).setOrigin(0.5, 0).setAlpha(0.8);

        //  D-Pad
        this.add.image(670, 26, 'ui', 'nav-out').setOrigin(0);
    }

}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Controller ]
};

let game = new Phaser.Game(config);
