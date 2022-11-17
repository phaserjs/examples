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
        const goblin = this.add.image(400, 100, 'goblin').setInteractive({ draggable: true });

        const element = this.add.dom(400, 300, 'div', 'background-color: rgba(255, 255, 0, 0.5); width: 300px; height: 200px; font: 48px Arial; font-weight: bold', 'Phaser 3');

        element.node.draggable = 'true';

        element.addListener('drag');

        element.on('drag', event => {

            console.log('dom move', event);

        });

        goblin.on('drag', (pointer, dragX, dragY) => {

            goblin.setPosition(dragX, dragY);
            this.children.bringToTop(goblin);

        });

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example,
    dom: {
        createContainer: true
    }
};

const game = new Phaser.Game(config);
