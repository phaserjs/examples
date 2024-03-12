class Bullet extends Phaser.Physics.Arcade.Image
{
    fire (x, y, vx, vy)
    {
        this.enableBody(true, x, y, true, true);
        this.setVelocity(vx, vy);
    }

    onCreate ()
    {
        this.disableBody(true, true);
        this.body.collideWorldBounds = true;
        this.body.onWorldBounds = true;
    }

    onWorldBounds ()
    {
        this.disableBody(true, true);
    }
}

class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (world, scene, config)
    {
        super(
            world,
            scene,
            { ...config, classType: Bullet, createCallback: Bullets.prototype.onCreate }
        );
    }

    fire (x, y, vx, vy)
    {
        const bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y, vx, vy);
        }
    }

    onCreate (bullet)
    {
        bullet.onCreate();
    }

    poolInfo ()
    {
        return `${this.name} total=${this.getLength()} active=${this.countActive(true)} inactive=${this.countActive(false)}`;
    }
}

class Example extends Phaser.Scene
{
    bullets;
    enemy;
    enemyBullets;
    enemyFiring;
    enemyMoving;
    plasma;
    player;
    stars;
    text;

    preload ()
    {
        this.load.image('bullet', 'assets/sprites/bullets/bullet7.png');
        this.load.image('enemyBullet', 'assets/sprites/bullets/bullet6.png');
        this.load.image('ship', 'assets/sprites/bsquadron1.png');
        this.load.image('starfield', 'assets/skies/starfield.png');
        this.load.spritesheet('enemy', 'assets/sprites/bsquadron-enemies.png', {
            frameWidth: 192,
            frameHeight: 160
        });
    }

    create ()
    {
        this.stars = this.add.blitter(0, 0, 'starfield');
        this.stars.create(0, 0);
        this.stars.create(0, -512);

        this.bullets = this.add.existing(
            new Bullets(this.physics.world, this, { name: 'bullets' })
        );
        this.bullets.createMultiple({
            key: 'bullet',
            quantity: 5
        });

        this.enemyBullets = this.add.existing(
            new Bullets(this.physics.world, this, { name: 'enemyBullets' })
        );
        this.enemyBullets.createMultiple({
            key: 'enemyBullet',
            quantity: 5
        });

        this.enemy = this.physics.add.sprite(256, 128, 'enemy', 1);
        this.enemy.setBodySize(160, 64);
        // Hit points
        this.enemy.state = 5;

        this.enemyMoving = this.tweens.add({
            targets: this.enemy.body.velocity,
            props: {
                x: { from: 150, to: -150, duration: 4000 },
                y: { from: 50, to: -50, duration: 2000 }
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        this.enemyFiring = this.time.addEvent({
            delay: 750,
            loop: true,
            callback: () =>
            {
                this.enemyBullets.fire(this.enemy.x, this.enemy.y + 32, 0, 150);
            }
        });

        this.player = this.physics.add.image(256, 448, 'ship');

        this.plasma = this.add.particles(0, 0, 'bullet', {
            alpha: { start: 1, end: 0, ease: 'Cubic.easeIn' },
            blendMode: Phaser.BlendModes.SCREEN,
            frequency: -1,
            lifespan: 500,
            radial: false,
            scale: { start: 1, end: 5, ease: 'Cubic.easeOut' }
        });

        this.text = this.add.text(0, 480, '', {
            font: '16px monospace',
            fill: 'aqua'
        });

        this.physics.add.overlap(this.enemy, this.bullets, (enemy, bullet) =>
        {
            const { x, y } = bullet.body.center;

            enemy.state -= 1;
            bullet.disableBody(true, true);
            // this.plasma.setSpeedY(0.2 * bullet.body.velocity.y).emitParticleAt(x, y);
            this.plasma.emitParticleAt(x, y);

            if (enemy.state <= 0)
            {
                enemy.setFrame(3);
                enemy.body.checkCollision.none = true;
                this.enemyFiring.remove();
                this.enemyMoving.stop();
            }
        });

        this.physics.add.overlap(this.player, this.enemyBullets, (player, bullet) =>
        {
            const { x, y } = bullet.body.center;

            bullet.disableBody(true, true);
            // this.plasma.setSpeedY(0.2 * bullet.body.velocity.y).emitParticleAt(x, y);
            this.plasma.emitParticleAt(x, y);
        });

        this.physics.world.on('worldbounds', (body) =>
        {
            body.gameObject.onWorldBounds();
        });

        this.input.on('pointermove', (pointer) =>
        {
            this.player.x = pointer.worldX;
        });

        this.input.on('pointerdown', () =>
        {
            this.bullets.fire(this.player.x, this.player.y, 0, -300);
        });
    }

    update ()
    {
        this.stars.y += 1;
        this.stars.y %= 512;

        this.text.setText([ this.bullets.poolInfo(), this.enemyBullets.poolInfo() ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    pixelArt: true,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
