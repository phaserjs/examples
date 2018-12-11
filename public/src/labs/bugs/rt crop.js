var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#009900',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var rt1;
var i = -100;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bunny', 'assets/sprites/bunny.png');
    this.load.image('box', 'assets/sprites/50x50.png');
}

function create ()
{
    this.bunny = this.textures.get('bunny').get();
    this.box = this.textures.get('box').get();

    rt1 = this.add.renderTexture(0, 0, 1024, 1024).setInteractive();

    rt1.on('pointermove', function (pointer) {

        if (pointer.isDown)
        {
            this.draw('box', pointer.x - 25, pointer.y - 25);
        }

    });

    rt1.draw(this.bunny, -50, -50);
    rt1.draw(this.bunny, 555, 555);

    // this.cameras.main.zoom = 0.5;
}

function update ()
{
    // rt1.draw(this.bunny, 333 + i++, 333 + i);

    // rt1.draw(this.box, 0, 0);
    // rt1.draw(this.box, 800-50, 0);
    // rt1.draw(this.box, 0, 600-50);
    // rt1.draw(this.box, 800-50, 600-50);
}
