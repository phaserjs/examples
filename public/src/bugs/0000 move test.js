class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('goblin', 'assets/pics/goblin.png');
        this.load.image('spider', 'assets/pics/spider.png');
    }

    create ()
    {
        const goblin = this.add.image(200, 300, 'goblin').setInteractive({ draggable: true });
        const spider = this.add.image(600, 300, 'spider').setInteractive({ draggable: true });

        goblin.on('drag', (pointer, dragX, dragY) => {

            goblin.setPosition(dragX, dragY);
            this.children.bringToTop(goblin);

        });

        spider.on('drag', (pointer, dragX, dragY) => {

            spider.setPosition(dragX, dragY);
            this.children.bringToTop(spider);

        });

        goblin.on('pointermove', (pointer) => {

            console.log('goblin move');

        });

        spider.on('pointermove', (pointer) => {

            console.log('spider move');

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
