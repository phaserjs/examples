class Bullet extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'bullet');
    }

    fire (x, y)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(-600);
    }

    kill ()
    {
        this.setActive(false);
        this.setVisible(false);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y <= -32)
        {
            this.kill();
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 30,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet (x, y)
    {
        let bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y);
        }
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.bullets;
        this.emitter;
        this.explode;
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space3.png');
        this.load.image('bullet', 'assets/sprites/bullets/bullet7.png');
        this.load.image('ship', 'assets/sprites/bsquadron1.png');
        this.load.atlas('bubbles', 'assets/particles/bubbles.png', 'assets/particles/bubbles.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.emitter = this.add.particles(0, 0, 'bubbles', {
            x: 100,
            y: 30,
            frame: [ 'bluebubble', 'redbubble', 'greenbubble', 'silverbubble' ],
            scale: { min: 0.25, max: 1 },
            rotate: { start: 0, end: 360 },
            speed: { min: 50, max: 100 },
            lifespan: 6000,
            frequency: 100,
            blendMode: 'ADD',
            gravityY: 110
        });

        this.explode = this.add.particles(0, 0, 'bubbles', {
            frame: 'elec1',
            angle: { start: 0, end: 360, steps: 32 },
            lifespan: 1500,
            speed: 400,
            quantity: 32,
            scale: { start: 0.5, end: 0 },
            emitting: false
        });

        this.tweens.add({
            targets: this.emitter,
            particleX: 700,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inout',
            duration: 1500
        });

        this.bullets = new Bullets(this);

        const ship = this.add.image(400, 550, 'ship');

        this.input.on('pointermove', (pointer) => {

            ship.x = pointer.worldX;

        });

        this.input.on('pointerdown', (pointer) => {

            this.bullets.fireBullet(ship.x, ship.y);

        });

        this.add.text(16, 16, 'Click to shoot');
    }

    update ()
    {
        const bullets = this.bullets.getChildren();

        bullets.forEach(bullet => {

            if (bullet.active)
            {
                const particles = this.emitter.overlap(bullet.body);

                if (particles.length > 0)
                {
                    particles.forEach(particle => {

                        this.explode.emitParticleAt(particle.x, particle.y);

                        particle.kill();

                    });

                    bullet.kill();
                }
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
