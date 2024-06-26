class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.atlas('tiles', 'assets/sets/platformer.png', 'assets/sets/platformer.json');
        this.load.image('bg', 'assets/sets/background.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const water = this.physics.add.staticGroup();

        for (let i = 0; i < 6; i++)
        {
            water.create(i * 128, 552, 'tiles', '17');
        }

        const ground = this.physics.add.staticGroup();

        ground.create(64, 536, 'tiles', '6');
        ground.create(64, 536-128, 'tiles', '6');
        ground.create(64, 536-256, 'tiles', '6');
        ground.create(64, 536-384, 'tiles', '3');
        ground.create(736, 536, 'tiles', '1');

        this.add.image(740, 440, 'tiles', 'sign2');

        const platform1 = this.physics.add.image(600, 128, 'tiles', 'platform1').setScale(0.5).setDirectControl().setImmovable();
        const platform2 = this.physics.add.image(700, 270, 'tiles', 'platform1').setScale(0.5).setDirectControl().setImmovable();
        const platform3 = this.physics.add.image(200, 400, 'tiles', 'platform1').setScale(0.5).setDirectControl().setImmovable();

        this.physics.world.setBounds(0, -400, 800, 1000);

        this.player = this.physics.add.sprite(64, 64, 'dude').setBounce(0.2).setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.tweens.add({
            targets: platform1,
            x: 200,
            duration: 4000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: platform2,
            x: 250,
            duration: 3000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: platform3,
            x: 550,
            y: 450,
            duration: 2500,
            yoyo: true,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, ground);
        this.physics.add.collider(this.player, [ platform1, platform2, platform3 ]);
        this.physics.add.collider(this.player, water, () => this.player.setPosition(64, 64));
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            // debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
