class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.json('shapes', 'assets/physics/catstick.json');
        this.load.image('catstick', 'assets/sprites/catstick.png');
        this.load.image('block', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const shapes = this.cache.json.get('shapes');

        const cat = this.add.container(400, 450);

        cat.add(this.add.sprite(0, 0, 'catstick'));

        this.matter.add.gameObject(cat, { shape: shapes.catstick, isStatic: true });

        // var cat = this.matter.add.sprite(400, 450, 'catstick', null, { shape: shapes.catstick, isStatic: true });
        // cat.setScale(0.5);

        cat.setAngle(75);
        cat.setBounce(0.7);

        for (let i = 0; i < 32; i++)
        {
            const x = Phaser.Math.Between(300, 500);
            const y = Phaser.Math.Between(-300, -100);

            this.matter.add.sprite(x, y, 'block').setAngle(20);
        }

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0.3 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
