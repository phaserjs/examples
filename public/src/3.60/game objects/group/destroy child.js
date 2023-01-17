class Example extends Phaser.Scene
{
    text;
    i = 0;
    hsv;
    group;

    preload ()
    {
        this.load.spritesheet('invader', 'assets/tests/invaders/invader3.png', { frameWidth: 48, frameHeight: 32 });
    }

    create ()
    {
        this.hsv = Phaser.Display.Color.HSVColorWheel();

        //  Create some invaders
        this.group = this.add.group({ key: 'invader', frame: 0, repeat: 53 });

        //  And some debug text
        this.text = this.add.text(10, 10, 'Invaders: 54', { font: '16px Courier', fill: '#00ff00' });

        const invaders = this.group.getChildren();

        //  Align them in a grid
        Phaser.Actions.GridAlign(this.group.getChildren(), { width: 9, cellWidth: 58, cellHeight: 48, x: 132, y: 148 });

        //  On each click, kill a sprite
        this.input.on('pointerup', event =>
        {

            //  Get a random sprite from the local array
            const invader = Phaser.Utils.Array.RemoveRandomElement(invaders);

            if (invader)
            {
                //  Then destroy it. This will fire a 'destroy' event that the Group will hear
                //  and then it'll automatically remove itself from the Group.
                invader.destroy();
            }

            console.log(this.group.getChildren());

        }, this);
    }

    update ()
    {
        this.text.setText(`Invaders: ${this.group.getLength()}`);

        const tint = this.hsv[this.i];

        Phaser.Actions.SetTint(this.group.getChildren(), tint.color);

        this.i++;

        if (this.i === this.hsv.length)
        {
            this.i = 0;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
