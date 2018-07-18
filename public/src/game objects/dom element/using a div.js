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
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    var div = document.createElement('div');
    div.style = 'background-color: lime; width: 220px; height: 100px; font: 48px Arial; font-weight: bold';
    div.innerText = 'Phaser 3';

    element = this.add.dom(400, 300, div);

    this.tweens.add({
        targets: element,
        _y: 600,
        _alpha: 0.5,
        angle: 200,
        duration: 3000,
        scaleX: 2,
        scaleY: 2,
        ease: 'Sine.easeInOut',
        loop: -1,
        yoyo: true
    });

    this.add.image(400, 300, 'einstein');
}
