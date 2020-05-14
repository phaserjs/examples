var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
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
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: 1 });
    this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: 2 });
    this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: 3 });
    this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: 4 });

    this.add.sprite(400, 100, 'gems').on('animationcomplete-diamond', animComplete, this).play('diamond');
    this.add.sprite(400, 200, 'gems').on('animationcomplete-prism', animComplete, this).play('prism');
    this.add.sprite(400, 300, 'gems').on('animationcomplete-ruby', animComplete, this).play('ruby');
    this.add.sprite(400, 400, 'gems').on('animationcomplete-square', animComplete, this).play('square');
}

function animComplete (animation, animationFrame, gameObject)
{
    console.log('animation.key', animation.key);
    console.log('textureKey', animationFrame.textureKey);
    console.log('textureFrame', animationFrame.textureFrame);
    console.log('gameObject', gameObject);

    //  Animation is over, let's fade the sprite out
    this.tweens.add({
        targets: gameObject,
        duration: 3000,
        alpha: 0
    });
}
