class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('buttonBG', 'assets/sprites/button-bg.png');
        this.load.image('buttonText', 'assets/sprites/button-text.png');
    }

    create ()
    {
        const bg = this.add.image(0, 0, 'buttonBG');
        const text = this.add.image(0, 0, 'buttonText');

        const bg2 = this.add.image(0, 80, 'buttonBG');
        const text2 = this.add.image(0, 80, 'buttonText');

        const container = this.add.container(400, 200, [ bg, text, bg2, text2 ]);

        container.setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);

        bg2.setInteractive();

        container.on('pointerover', () =>
        {

            bg.setTint(0x44ff44);

        });

        container.on('pointerout', () =>
        {

            bg.clearTint();

        });

        bg2.on('pointerover', function ()
        {

            this.setTint(0xff44ff);

        });

        bg2.on('pointerout', function ()
        {

            this.clearTint();

        });

        //  Just to display the hit area, not actually needed to work
        const graphics = this.add.graphics();

        graphics.lineStyle(2, 0x00ffff, 1);

        graphics.strokeCircle(container.x, container.y, container.input.hitArea.radius);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
