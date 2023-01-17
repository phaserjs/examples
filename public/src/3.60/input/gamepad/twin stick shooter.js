class Example extends Phaser.Scene
{
    xparticles;
    fire;
    lastFired = 0;
    enemies;
    bullets;
    text;
    gamepad;
    ship;

    preload ()
    {
        this.load.image('background', 'assets/tests/space/nebula.jpg');
        this.load.atlas('space', 'assets/tests/space/space.png', 'assets/tests/space/space.json');
        this.load.atlas('explosion', 'assets/particles/explosion.png', 'assets/particles/explosion.json');
    }

    create ()
    {
        this.textures.addSpriteSheetFromAtlas('mine-sheet', { atlas: 'space', frame: 'mine', frameWidth: 64 });
        this.anims.create({ key: 'mine-anim', frames: this.anims.generateFrameNumbers('mine-sheet', { start: 0, end: 15 }), frameRate: 20, repeat: -1 });

        this.add.tileSprite(400, 300, 800, 600, 'background');
        this.add.image(200, 200, 'space', 'purple-planet').setOrigin(0);

        this.bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true
        });

        this.ship = this.physics.add.image(400, 300, 'space', 'ship').setDepth(2);

        this.ship.setDamping(true);
        this.ship.setDrag(0.95);
        this.ship.setMaxVelocity(400);

        this.enemies = this.physics.add.group({
            classType: Enemy,
            maxSize: 60,
            runChildUpdate: true
        });

        this.text = this.add.text(10, 10, 'Press a button on the Gamepad to use', { font: '16px Courier', fill: '#00ff00' });

        this.input.gamepad.on('down', (pad, button, index) =>
        {

            if (pad.getAxisTotal() < 4)
            {
                this.text.setText('Gamepad does not have enough axis for a twin-stick demo');
            }
            else
            {
                this.text.setText('Left Stick to move, Right Stick to shoot');

                pad.setAxisThreshold(0.3);

                this.gamepad = pad;
            }

        }, this);

        this.xparticles = this.add.particles('explosion');

        /*
        xparticles.createEmitter({
            frame: [ 'smoke-puff', 'cloud', 'smoke-puff' ],
            angle: { min: 240, max: 300 },
            speed: { min: 200, max: 300 },
            quantity: 6,
            lifespan: 2000,
            alpha: { start: 1, end: 0 },
            scale: { start: 1.5, end: 0.5 },
            on: false
        });
        */

        this.xparticles.createEmitter({
            frame: 'red',
            angle: { min: 0, max: 360, steps: 32 },
            lifespan: 1000,
            speed: 400,
            quantity: 32,
            scale: { start: 0.3, end: 0 },
            on: false
        });

        this.xparticles.createEmitter({
            frame: 'muzzleflash2',
            lifespan: 200,
            scale: { start: 2, end: 0 },
            rotate: { start: 0, end: 180 },
            on: false
        });

        const particles = this.add.particles('space');

        const emitter = particles.createEmitter({
            frame: 'blue',
            speed: 200,
            lifespan: {
                onEmit: function (particle, key, t, value)
                {
                    return Phaser.Math.Percent(this.ship.body.speed, 0, 400) * 2000;
                }
            },
            alpha: {
                onEmit: function (particle, key, t, value)
                {
                    return Phaser.Math.Percent(this.ship.body.speed, 0, 400);
                }
            },
            angle: {
                onEmit: function (particle, key, t, value)
                {
                    // var v = Phaser.Math.Between(-10, 10);
                    const v = 0;
                    return (this.ship.angle - 180) + v;
                }
            },
            scale: { start: 0.6, end: 0 },
            blendMode: 'ADD'
        });

        emitter.startFollow(this.ship);



        this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, this.checkBulletVsEnemy, this);

        for (let i = 0; i < 6; i++)
        {
            this.launchEnemy();
        }

        console.log(this.physics.world);
    }

    update (time)
    {
        if (!this.gamepad)
        {
            return;
        }

        this.text.setText([
            this.gamepad.leftStick.x,
            this.ship.body.angularVelocity
        ]);

        this.ship.setAngularVelocity(300 * this.gamepad.leftStick.x);

        if (this.gamepad.leftStick.y <= 0)
        {
            this.physics.velocityFromRotation(this.ship.rotation, Math.abs(800 * this.gamepad.leftStick.y), this.ship.body.acceleration);
        }

        this.physics.world.wrap(this.ship, 32);

        if (this.gamepad.A && time > this.lastFired)
        {
            const bullet = this.bullets.get();

            if (bullet)
            {
                bullet.fire(this.ship);

                this.lastFired = time + 100;
            }
        }
    }

    launchEnemy ()
    {
        const b = this.enemies.get();

        if (b)
        {
            b.launch();
        }
    }

    checkBulletVsEnemy (bullet, enemy)
    {
        return (bullet.active && enemy.active);
    }

    hitShip (ship, enemy)
    {
    }

    hitEnemy (bullet, enemy)
    {
        this.xparticles.emitParticleAt(enemy.x, enemy.y);

        this.cameras.main.shake(500, 0.01);

        bullet.kill();
        enemy.kill();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    input: {
        gamepad: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);

class Bullet extends Phaser.Physics.Arcade.Image
{
    constructor (scene)
    {
        super(scene, 0, 0, 'space', 'blaster');

        this.setBlendMode(1);
        this.setDepth(1);

        this.speed = 800;
        this.lifespan = 1000;

        this._temp = new Phaser.Math.Vector2();
    }

    fire (ship)
    {
        this.lifespan = 1000;

        this.setActive(true);
        this.setVisible(true);
        this.setAngle(ship.body.rotation);
        this.setPosition(ship.x, ship.y);

        this.body.reset(ship.x, ship.y);

        this.body.setSize(10, 10, true);

        const angle = Phaser.Math.DegToRad(ship.body.rotation);

        this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);

        this.body.velocity.x *= 2;
        this.body.velocity.y *= 2;
    }

    update (time, delta)
    {
        this.lifespan -= delta;

        if (this.lifespan <= 0)
        {
            this.kill();
        }
    }

    kill ()
    {
        this.setActive(false);
        this.setVisible(false);
        this.body.stop();
    }
}

class Enemy extends Phaser.Physics.Arcade.Sprite
{
    static spaceOuter = new Phaser.Geom.Rectangle(-200, -200, 1200, 1000);
    static spaceInner = new Phaser.Geom.Rectangle(0, 0, 800, 600);

    constructor (scene)
    {
        super(scene, 0, 0, 'mine-sheet');

        this.setDepth(1);

        this.speed = 100;
        this.checkOutOfBounds = false;
        this.target = new Phaser.Math.Vector2();
    }

    launch ()
    {
        this.play('mine-anim');

        this.checkOutOfBounds = false;

        const p = Phaser.Geom.Rectangle.RandomOutside(Enemy.spaceOuter, Enemy.spaceInner);

        Enemy.spaceInner.getRandomPoint(this.target);

        this.speed = Phaser.Math.Between(100, 400);

        this.setActive(true);
        this.setVisible(true);
        this.setPosition(p.x, p.y);

        this.body.reset(p.x, p.y);

        const angle = Phaser.Math.Angle.BetweenPoints(p, this.target);

        this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);
    }

    update (time, delta)
    {
        const withinGame = Enemy.spaceInner.contains(this.x, this.y);

        if (!this.checkOutOfBounds && withinGame)
        {
            this.checkOutOfBounds = true;
        }
        else if (this.checkOutOfBounds && !withinGame)
        {
            this.kill();
        }
    }

    kill ()
    {
        this.setActive(false);
        this.setVisible(false);
        this.body.stop();
        this.scene.launchEnemy();
    }
}
