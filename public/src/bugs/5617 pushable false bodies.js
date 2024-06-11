class Example extends Phaser.Scene {
    preload() {
        this.load.setPath('assets/sprites');
        this.load.image('blockANP');
        this.load.image('blockBNP');
    }

    create() {
        this.physics.world.setBounds(0, 0, 864, 632);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.left = this.physics.add.image(500, 196 - 16, 'blockANP').setCollideWorldBounds().setInteractive();
        this.right = this.physics.add.image(600, 196 - 16, 'blockBNP').setCollideWorldBounds().setInteractive();

        this.left.setBounce(0.5);
        this.right.setBounce(0.5);

        // If either one of these are a circle they will get pushed.

        this.left.setCircle(32);
        this.right.setCircle(32);

        this.left.setPushable(false);
        this.right.setPushable(false);

        this.physics.add.collider(this.left, this.right);
    }


    update() {
        if (this.cursors.left.isDown) {
            this.left.setVelocityX(-160);
        }
        else if (this.cursors.right.isDown) {
            this.left.setVelocityX(160);
        }
        else if (this.cursors.up.isDown) {
            this.left.setVelocityY(-160);
        }
        else if (this.cursors.down.isDown) {
            this.left.setVelocityY(160);
        }
        else {
            this.left.setVelocity(0)
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
};

const game = new Phaser.Game(config);
