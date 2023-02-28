// Bullet class - fires from ship and "destroys" planet
class Bullet extends Phaser.GameObjects.Image
{
    speed;
    flame;
    constructor(scene, x, y) {
        super(scene, x, y, "bullet");
        this.speed = Phaser.Math.GetSpeed(450, 1);
        this.postFX.addBloom(0xffffff, 1, 1, 2, 1.2);
        this.name = "bullet";

    }

    fire (x, y)
    {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    }

    destroyBullet ()
    {
        if (this.flame === undefined) {
            // Create particles for flame
            this.flame = this.scene.add.particles(this.x, this.y, 'flares',
                {
                    frame: 'white',
                    color: [0xfacc22, 0xf89800, 0xf83600, 0x9f0404],
                    colorEase: 'quad.out',
                    lifespan: 500,
                    scale: { start: 0.70, end: 0, ease: 'sine.out' },
                    speed: 200,
                    advance: 500,
                    frequency: 50,
                    blendMode: 'ADD',
                    duration: 1000,
                });
                this.flame.setDepth(1);
            // When particles are complete, destroy them
            this.flame.once("complete", () => {
                this.flame.destroy();
            })
        }

        // Destroy bullet after 50ms (helps to enter inside of planet)
        this.scene.time.addEvent({
            delay: 50,
            callback: () => {
                this.setActive(false);
                this.setVisible(false);
                this.destroy();
            }
        });

    }

    // Update bullet position and destroy if it goes off screen
    update (time, delta)
    {
        this.x += this.speed * delta;

        if (this.x > this.scene.sys.canvas.width) {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
        }
    }
}

// Logic game
class Example extends Phaser.Scene
{
    ship;
    bullets;
    // Control for firing bullets
    spacebar;
    constructor ()
    {
        super({
            key: 'MainScene'
        });
    }

    init ()
    {
        // Description text for fire bullet
        this.add.text(10, 10, 'Press "space" to fire bullet', { font: '16px Courier', fill: '#ffffff' }).setDepth(100);

        // Fade in camera
        this.cameras.main.fadeIn(800);
    }

    preload ()
    {
        this.load.setPath("assets/");
        this.load.image("bullet", "sprites/bullets/bullet6.png");
        this.load.image("ship", "sprites/x2kship.png");
        this.load.image("bg", "tests/space/nebula.jpg");
        this.load.image("planet", "tests/space/blue-planet.png");

        this.load.atlas('flares', '/particles/flares.png', '/particles/flares.json');
    }

    create ()
    {
        // Just stars background
        const bg = this.add.image(0, 0, "bg")
            .setOrigin(0, 0)
            .setTint(0x333333);

        const planet = this.physics.add.image(this.sys.scale.width - 100, this.sys.scale.height / 2, "planet")
            .setScale(.2);
        planet.flipX = true;
        // Tween to rotate slow planet
        this.tweens.add({
            targets: planet,
            duration: 5000000,
            rotation: 360,
            repeat: -1
        });

        // FX bloom for the planet
        const planetFX = planet.postFX.addBloom(0xffffff, 1, 1, 0, 1.2);

        this.ship = this.add.image(100, this.sys.scale.height / 2, 'ship')
            .setDepth(2);

        this.bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true,
        });

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Effect for planet bloom
        const planetFXTween = this.tweens.add({
            targets: planetFX,
            blurStrength: 2,
            yoyo: true,
            duration: 100,
            paused: true,
            onComplete: () => {
                planetFXTween.restart();
                planetFXTween.pause();
            }
        });

        this.physics.add.overlap(this.bullets, planet, (planet, bullet) => {
            // If bullet hits planet, destroy the bullet and play the effect
            bullet.destroyBullet();
            if (!planetFXTween.isPlaying()) {
                planetFXTween.restart();
                planetFXTween.play();
            }
        })

    }

    // Bullet fire
    update() {
        if (this.spacebar)
        {
            if (Phaser.Input.Keyboard.JustDown(this.spacebar))
            {
                const bullet = this.bullets.get();

                if (bullet) {
                    bullet.fire(this.ship.x, this.ship.y);
                }
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 700,
    height: 500,
    physics: {
        default: 'arcade'
    },
    backgroundColor: '#2f3640',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
