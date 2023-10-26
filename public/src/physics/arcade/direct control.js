class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('master', 'assets/sprites/master.png');
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        this.master = this.physics.add.image(100, 300, 'master');

        this.master.setDirectControl();
        this.master.setImmovable();

        this.tweens.add({
            targets: this.master,
            x: 700,
            duration: 3000,
            ease: 'sine.inout',
            repeat: -1,
            yoyo: true
        });

        this.debug = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        this.mushrooms = [];

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(-1900, 0);

            const mushroom = this.physics.add.image(x, y, 'mushroom');

            mushroom.body.setBounce(1);
            mushroom.body.setMaxVelocity(2000, 2000);
            mushroom.setCollideWorldBounds(true);

            this.mushrooms.push(mushroom);
        }

        this.physics.world.setBounds(0, -2000, 800, 2600);

        this.physics.add.collider(this.master, this.mushrooms);
    }

    update ()
    {
        const block = this.master;

        this.debug.setText([
            'velocity.x: ' + block.body.velocity.x,
            'velocity.y: ' + block.body.velocity.y
        ]);
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
            debug: true,
            gravity: { y: 50 },
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
