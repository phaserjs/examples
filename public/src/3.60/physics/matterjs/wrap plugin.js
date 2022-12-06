class Example extends Phaser.Scene
{
    create ()
    {
        //  Let's create a bunch of random shaped objects and add them to the world
        for (let i = 0; i < 48; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);

            const wrapBounds = {
                wrap: {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 800,
                        y: 600
                    }
                }
            };

            if (Math.random() < 0.7)
            {
                const sides = Phaser.Math.Between(3, 14);
                const radius = Phaser.Math.Between(8, 50);

                this.matter.add.polygon(x, y, sides, radius, { restitution: 0.9, plugin: wrapBounds });
            }
            else
            {
                const width = Phaser.Math.Between(16, 128);
                const height = Phaser.Math.Between(8, 64);

                this.matter.add.rectangle(x, y, width, height, { restitution: 0.9, plugin: wrapBounds });
            }
        }

        this.matter.add.mouseSpring();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0.05,
                y: 0.1
            },
            plugins: {
                wrap: true
            },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
