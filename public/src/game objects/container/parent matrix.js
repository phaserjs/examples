var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var text1;
var text2;
var tempMatrix;
var tempParentMatrix;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('lemming', 'assets/sprites/lemming.png');
    this.load.image('topleft', 'assets/sprites/topleft.png');
}

function create ()
{
    image = this.add.image(0, 0, 'lemming');

    container = this.add.container(100, 100, [ image ]);

    var container2 = this.add.container(200, 200, [ container ]);

    //  Visual Container x/y markers
    this.add.image(container.x, container.y, 'topleft').setOrigin(0);
    this.add.image(container2.x, container2.y, 'topleft').setOrigin(0).setScale(2);

    /*
    this.tweens.add({
        targets: container,
        x: 400,
        duration: 6000,
        yoyo: true,
        repeat: -1
    });
    */

    /*
    this.tweens.add({
        targets: container2,
        y: 400,
        duration: 6000,
        yoyo: true,
        repeat: -1
    });
    */

    graphics = this.add.graphics();

    text1 = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    text2 = this.add.text(100, 10, '', { font: '16px Courier', fill: '#00ff00' });

    tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
}

function update ()
{
    image.getWorldTransformMatrix(tempMatrix, tempParentMatrix);

    var d = tempMatrix.decomposeMatrix();

    text1.setText([
        'x: ' + image.x,
        'y: ' + image.y,
        'sx: ' + image.scaleX,
        'sy: ' + image.scaleY,
        'r: ' + image.angle
    ]);

    text2.setText([
        'x: ' + d.translateX,
        'y: ' + d.translateY,
        'sx: ' + d.scaleX,
        'sy: ' + d.scaleY,
        'r: ' + Phaser.Math.RadToDeg(d.rotation)
    ]);

    graphics.clear();

    graphics.lineStyle(1, 0x00ff00, 1);

    graphics.strokeRect(d.translateX, d.translateY, image.width, image.height);
}
