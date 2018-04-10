var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('buttonBG', 'assets/sprites/button-bg.png');
    this.load.image('buttonText', 'assets/sprites/button-text.png');
}

function create ()
{
    //  Normal image, rotation is fine
    var image1 = this.add.image(200, 300, 'buttonBG');
    image1.setAngle(20);

    var containerImage = this.add.image(0, 0, 'buttonBG');

    //  Container rotation inversed?
    var container = this.add.container(600, 300, containerImage);

    container.setAngle(20);

}
