var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var group;

function preload() {
    this.load.image('block', 'assets/sprites/block.png');
}

function create() {
    group = this.physics.add.group({
        bounceX: 1,
        bounceY: 1
    });

    var block1 = group.create(100, 200, 'block').setVelocity(100, 200);
    var block2 = group.create(500, 200, 'block').setVelocity(-100, -100);
    var block3 = group.create(300, 400, 'block').setVelocity(60, 100);
    var block4 = group.create(600, 300, 'block').setVelocity(-30, -50);

    this.physics.add.collider(group);
}

function update() {
    this.physics.world.wrap(group, 48);
}
