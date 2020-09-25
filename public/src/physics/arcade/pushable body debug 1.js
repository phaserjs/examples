var config = {
    type: Phaser.AUTO,
    width: 800+256,
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
    this.physics.world.setBounds(0, 0, 800+256, 600);

    //  Test 1

    var test1A = this.physics.add.image(80, 400, 'blockAP').setCollideWorldBounds().setInteractive();
    var test1B = this.physics.add.image(80, 200, 'blockBP').setCollideWorldBounds().setInteractive();

    test1A.setBounce(0.5);
    test1B.setBounce(0.5);

    test1A.on('pointerdown', () => {
        test1A.setVelocityY(-200);
    });

    test1B.on('pointerdown', () => {
        test1B.setVelocityY(200);
    });

    //  Test 2

    var test2A = this.physics.add.image(208, 400, 'blockANP').setCollideWorldBounds().setInteractive();
    var test2B = this.physics.add.image(208, 200, 'blockBNP').setCollideWorldBounds().setInteractive();

    test2A.setBounce(0.5);
    test2B.setBounce(0.5);
    test2A.setPushable(false);
    test2B.setPushable(false);

    test2A.on('pointerdown', () => {
        test2A.setVelocityY(-200);
    });

    test2B.on('pointerdown', () => {
        test2B.setVelocityY(200);
    });

    //  Test 3

    var test3A = this.physics.add.image(336, 400, 'blockAP').setCollideWorldBounds().setInteractive();
    var test3B = this.physics.add.image(336, 200, 'blockBNP').setCollideWorldBounds().setInteractive();

    test3A.setBounce(0.5);
    test3B.setBounce(0.5);
    test3B.setPushable(false);

    test3A.on('pointerdown', () => {
        test3A.setVelocityY(-200);
    });

    test3B.on('pointerdown', () => {
        test3B.setVelocityY(200);
    });

    //  Test 4

    var test4A = this.physics.add.image(464, 400, 'blockANP').setCollideWorldBounds().setInteractive();
    var test4B = this.physics.add.image(464, 200, 'blockBP').setCollideWorldBounds().setInteractive();

    test4A.setBounce(0.5);
    test4B.setBounce(0.5);
    test4A.setPushable(false);

    test4A.on('pointerdown', () => {
        test4A.setVelocityY(-200);
    });

    test4B.on('pointerdown', () => {
        test4B.setVelocityY(200);
    });

    //  Test 5

    var test5A = this.physics.add.image(592, 400, 'blockAP').setCollideWorldBounds().setInteractive();
    var test5B = this.physics.add.image(592, 200, 'blockBNM').setCollideWorldBounds().setInteractive();

    test5A.setBounce(0.5);
    test5B.setBounce(0.5);
    test5B.setImmovable(true);

    test5A.on('pointerdown', () => {
        test5A.setVelocityY(-200);
    });

    test5B.on('pointerdown', () => {
        test5B.setVelocityY(200);
    });

    //  Test 6

    var test6A = this.physics.add.image(720, 400, 'blockANP').setCollideWorldBounds().setInteractive();
    var test6B = this.physics.add.image(720, 200, 'blockBNM').setCollideWorldBounds().setInteractive();

    test6A.setBounce(0.5);
    test6B.setBounce(0.5);
    test6A.setPushable(false);
    test6B.setImmovable(true);

    test6A.on('pointerdown', () => {
        test6A.setVelocityY(-200);
    });

    test6B.on('pointerdown', () => {
        test6B.setVelocityY(200);
    });

    //  Test 7

    var test7A = this.physics.add.image(848, 400, 'blockANM').setCollideWorldBounds().setInteractive();
    var test7B = this.physics.add.image(848, 200, 'blockBP').setCollideWorldBounds().setInteractive();

    test7A.setBounce(0.5);
    test7B.setBounce(0.5);
    test7A.setImmovable(true);
    test7B.setPushable(true);

    test7A.on('pointerdown', () => {
        test7A.setVelocityY(-200);
    });

    test7B.on('pointerdown', () => {
        test7B.setVelocityY(200);
    });

    //  Test 8

    var test8A = this.physics.add.image(976, 400, 'blockANM').setCollideWorldBounds().setInteractive();
    var test8B = this.physics.add.image(976, 200, 'blockBNP').setCollideWorldBounds().setInteractive();

    test8A.setBounce(0.5);
    test8B.setBounce(0.5);
    test8A.setImmovable(true);
    test8B.setPushable(false);

    test8A.on('pointerdown', () => {
        test8A.setVelocityY(-200);
    });

    test8B.on('pointerdown', () => {
        test8B.setVelocityY(200);
    });

    //  Runner

    this.add.text(16, 16, 'Click the collider first:');

    var atob = this.add.text(280, 16, 'A to B').setInteractive();
    var btoa = this.add.text(400, 16, 'B to A').setInteractive();

    atob.once('pointerdown', () => {

        atob.setColor('#ffff00');
        btoa.setAlpha(0.2);

        this.physics.add.collider(test1A, test1B);
        this.physics.add.collider(test2A, test2B);
        this.physics.add.collider(test3A, test3B);
        this.physics.add.collider(test4A, test4B);
        this.physics.add.collider(test5A, test5B);
        this.physics.add.collider(test6A, test6B);
        this.physics.add.collider(test7A, test7B);
        this.physics.add.collider(test8A, test8B);

    });

    btoa.once('pointerdown', () => {

        btoa.setColor('#ffff00');
        atob.setAlpha(0.2);

        this.physics.add.collider(test1B, test1A);
        this.physics.add.collider(test2B, test2A);
        this.physics.add.collider(test3B, test3A);
        this.physics.add.collider(test4B, test4A);
        this.physics.add.collider(test5B, test5A);
        this.physics.add.collider(test6B, test6A);
        this.physics.add.collider(test7B, test7A);
        this.physics.add.collider(test8B, test8A);

    });
}
