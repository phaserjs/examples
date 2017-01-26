var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};

var game = new Phaser.Game(config);

function preload() {

    window.state = this;

    this.load.image('phaser', 'assets/sprites/diamond.png');

}

function create() {

    for (var i = 0; i < 10000; i++)
    {
        var x = Phaser.Math.Between(0, 24000);
        var y = Phaser.Math.Between(0, 600);

        var sprite = this.add.image(x, y, 'phaser');
    }

}

function update() {

    // this.camera.x--;

}

function render() {

    var ctx = this.sys.game.context;

    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.fillRect(4, 4, 164, 64);

    ctx.font = '16px Courier';
    ctx.fillStyle = 'rgb(0,255,0)';

    ctx.fillText(this.sys.game.renderer.drawCount + ' / 10,000', 8, 22);
    ctx.fillText('cx: ' + this.sys.camera.x + ' cr: ' + this.sys.camera.right, 8, 42);

}
