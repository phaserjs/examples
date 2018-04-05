var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/demoscene/doc-ball.png');
}

function create ()
{
    var container = this.add.container(400, 300);

    //  Add some images to the container

    var ball1 = this.add.image(0, 0, 'ball');
    var ball2 = this.add.image(100, 0, 'ball');
    var ball3 = this.add.image(100, 100, 'ball');
    var ball4 = this.add.image(100, 0, 'ball');

    container.add([ ball1, ball2, ball3, ball4 ]);


}
