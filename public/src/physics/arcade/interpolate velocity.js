class Example extends Phaser.Scene
{
    fishes;

    preload ()
    {
        this.load.image('sea', 'assets/pics/undersea.jpg');
        this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }

    create ()
    {
        this.add.image(400, 300, 'sea');

        this.fishes = this.physics.add.group({
            key: 'fish',
            frame: [ 0, 1, 2 ],
            repeat: 1,
            setXY: { x: 400, y: 300 },
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });

        this.fishes.getChildren()[0].setVelocity(100, -200);
    }

    update ()
    {
        let prev;

        for (const fish of this.fishes.getChildren())
        {
            fish.rotation = fish.body.angle;

            if (prev)
            {
                fish.body.velocity.lerp(prev.body.velocity, 0.05);
            }

            prev = fish;
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
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
