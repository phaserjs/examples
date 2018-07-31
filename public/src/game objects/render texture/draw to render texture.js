var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bunny', 'assets/sprites/bunny.png');
    this.load.image('pic', 'assets/pics/baal-loader.png');
}

function create ()
{
    var bunny = this.textures.getFrame('bunny');
    var bob = this.add.image(0, 0, 'bunny').setName('bob');

    // console.log(bob.frame);

    // this.add.image(400, 300, 'pic').setAlpha(0.9);

    var rt = this.add.renderTexture(0, 0, 800, 600);

    // console.log(rt.currentMatrix);

    // var rt = this.add.renderTexture(0, 0, 700, 500);

    // rt.draw(bunny, 0, 0);

    // rt.draw(bunny, 100, 100);
    // rt.draw(bunny, 200, 200);

    bob.setAngle(20);

    // var rt = this.add.renderTexture(0, 0, 800, 600);

    rt.draw(bob, 200, 200);
    rt.draw(bob, 300, 300);
    rt.draw(bob, 400, 400);

}
