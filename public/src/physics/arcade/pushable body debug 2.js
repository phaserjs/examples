var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/sprites');

    this.load.image('blockAP');
    this.load.image('blockBP');
    this.load.image('blockANP');
    this.load.image('blockBNP');
    this.load.image('blockANM');
    this.load.image('blockBNM');
}

function create ()
{
    this.physics.world.setBounds(0, 0, 800, 600);

    //  Test 1

    var test1A = this.physics.add.image(128, 200, 'blockAP').setCollideWorldBounds().setInteractive();
    var test1B = this.physics.add.image(128, 400, 'blockBP').setCollideWorldBounds().setInteractive();

    this.physics.add.collider(test1A, test1B);

    test1A.on('pointerdown', () => {
        test1A.setVelocityY(200);
    });

    test1B.on('pointerdown', () => {
        test1B.setVelocityY(-200);
    });

    //  Test 2

    var test2A = this.physics.add.image(256, 200, 'blockANP').setCollideWorldBounds().setInteractive();
    var test2B = this.physics.add.image(256, 400, 'blockBNP').setCollideWorldBounds().setInteractive();

    this.physics.add.collider(test2A, test2B);

    test2A.on('pointerdown', () => {
        test2A.setVelocityY(200);
    });

    test2B.on('pointerdown', () => {
        test2B.setVelocityY(-200);
    });

    //  Test 3

    var test3A = this.physics.add.image(386, 200, 'blockAP').setCollideWorldBounds().setInteractive();
    var test3B = this.physics.add.image(386, 400, 'blockBNP').setCollideWorldBounds().setInteractive();

    this.physics.add.collider(test3A, test3B);

    test3A.on('pointerdown', () => {
        test3A.setVelocityY(200);
    });

    test3B.on('pointerdown', () => {
        test3B.setVelocityY(-200);
    });

    //  Test 4

    var test4A = this.physics.add.image(512, 200, 'blockANP').setCollideWorldBounds().setInteractive();
    var test4B = this.physics.add.image(512, 400, 'blockBP').setCollideWorldBounds().setInteractive();

    this.physics.add.collider(test4A, test4B);

    test4A.on('pointerdown', () => {
        test4A.setVelocityY(200);
    });

    test4B.on('pointerdown', () => {
        test4B.setVelocityY(-200);
    });

    //  Test 5

    var test5A = this.physics.add.image(640, 200, 'blockANM').setCollideWorldBounds().setInteractive();
    var test5B = this.physics.add.image(640, 400, 'blockBP').setCollideWorldBounds().setInteractive();

    this.physics.add.collider(test5A, test5B);

    test5A.on('pointerdown', () => {
        test5A.setVelocityY(200);
    });

    test5B.on('pointerdown', () => {
        test5B.setVelocityY(-200);
    });

}
