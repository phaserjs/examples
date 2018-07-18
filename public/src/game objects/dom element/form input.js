var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create
    }
};

var element;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.text('nameform', 'assets/text/nameform.html');
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    element = this.add.dom(400, 0).createFromCache('nameform');

    this.tweens.add({
        targets: element,
        y: 300,
        duration: 3000,
        ease: 'Power3'
    });

    this.add.image(400, 300, 'einstein');
}
