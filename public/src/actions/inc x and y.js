class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.move = 0;
        this.layer1 = [];
        this.layer2 = [];
    }

    preload ()
    {
        this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');
    }

    create ()
    {
        for (let i = 0; i < 1024; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);
            const frame = `veg0${Phaser.Math.Between(1, 9)}`;

            this.layer1.push(this.add.image(x, y, 'atlas', frame));
        }

        for (let i = 0; i < 1024; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);
            const frame = `veg0${Phaser.Math.Between(1, 9)}`;

            this.layer2.push(this.add.image(x, y, 'atlas', frame));
        }
    }

    update ()
    {
        Phaser.Actions.IncXY(this.layer1, Math.cos(this.move), Math.sin(this.move));
        Phaser.Actions.Rotate(this.layer1, -0.01);

        Phaser.Actions.IncXY(this.layer2, -Math.cos(this.move), -Math.sin(this.move));
        Phaser.Actions.Rotate(this.layer2, 0.01);

        this.move += 0.01;
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
