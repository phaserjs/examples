class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser.png');
        this.load.text('data', 'assets/loader-tests/test.txt');
    }

    create ()
    {
        this.add.image(8, 8, 'logo').setOrigin(0);

        const data = this.cache.text.get('data');

        this.add.dom(400, 300, 'div', 'background-color: rgba(0, 0, 80); width: 600px; height: 500px; font: 12px Courier; color: white; overflow: hidden', data);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    dom: {
        createContainer: true
    },
    scene: Example
};

const game = new Phaser.Game(config);
