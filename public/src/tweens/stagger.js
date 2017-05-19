var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var image1 = this.add.image(100, 100, 'block');
    var image2 = this.add.image(100, 200, 'block');
    var image3 = this.add.image(100, 300, 'block');
    var image4 = this.add.image(100, 400, 'block');
    var image5 = this.add.image(100, 500, 'block');

    var tweens = this.tweens.add({
        targets: [ image1, image2, image3, image4, image5 ],
        x: 700,
        duration: 2000,
        ease: 'Sine.easeInOut',
        yoyo: true,
        stagger: 100,
        startDelay: 1000,
        loop: true
    });

    console.log(tweens);
}
