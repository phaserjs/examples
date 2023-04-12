class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/cavern1.png');
        this.load.image('goblin', 'assets/pics/goblin.png');
        this.load.image('spider', 'assets/pics/spider.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        this.add.text(16, 16, 'Move 32px before drag starts').setFontSize(24).setShadow(1, 1);

        this.add.image(200, 300, 'goblin').setInteractive({ draggable: true });
        this.add.image(600, 300, 'spider').setInteractive({ draggable: true });

        //  The pointer has to move 32 pixels before it's considered as a drag
        this.input.dragDistanceThreshold = 32;

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            gameObject.setPosition(dragX, dragY);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
