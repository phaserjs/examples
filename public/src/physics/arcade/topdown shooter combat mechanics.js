class Example extends Phaser.Scene
{
    time = 0;
    enemyBullets;
    playerBullets;
    moveKeys;
    reticle;
    healthpoints;
    player;
    enemy;
    hp1;
    hp2;
    hp3;

    preload ()
    {
        // Load in images and sprites
        this.load.spritesheet('player_handgun', 'assets/sprites/player_handgun.png',
            { frameWidth: 66, frameHeight: 60 }
        ); // Made by tokkatrain: https://tokkatrain.itch.io/top-down-basic-set
        this.load.image('bullet', 'assets/sprites/bullets/bullet6.png');
        this.load.image('target', 'assets/demoscene/ball.png');
        this.load.image('background', 'assets/skies/underwater1.png');
    }

    create ()
    {
        // Set world bounds
        this.physics.world.setBounds(0, 0, 1600, 1200);

        // Add 2 groups for Bullet objects
        this.playerBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
        this.enemyBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });

        // Add background player, enemy, reticle, healthpoint sprites
        const background = this.add.image(800, 600, 'background');
        this.player = this.physics.add.sprite(800, 600, 'player_handgun');
        this.enemy = this.physics.add.sprite(300, 600, 'player_handgun');
        this.reticle = this.physics.add.sprite(800, 700, 'target');
        this.hp1 = this.add.image(-350, -250, 'target').setScrollFactor(0.5, 0.5);
        this.hp2 = this.add.image(-300, -250, 'target').setScrollFactor(0.5, 0.5);
        this.hp3 = this.add.image(-250, -250, 'target').setScrollFactor(0.5, 0.5);

        // Set image/sprite properties
        background.setOrigin(0.5, 0.5).setDisplaySize(1600, 1200);
        this.player.setOrigin(0.5, 0.5).setDisplaySize(132, 120).setCollideWorldBounds(true).setDrag(500, 500);
        this.enemy.setOrigin(0.5, 0.5).setDisplaySize(132, 120).setCollideWorldBounds(true);
        this.reticle.setOrigin(0.5, 0.5).setDisplaySize(25, 25).setCollideWorldBounds(true);
        this.hp1.setOrigin(0.5, 0.5).setDisplaySize(50, 50);
        this.hp2.setOrigin(0.5, 0.5).setDisplaySize(50, 50);
        this.hp3.setOrigin(0.5, 0.5).setDisplaySize(50, 50);

        // Set sprite variables
        this.player.health = 3;
        this.enemy.health = 3;
        this.enemy.lastFired = 0;

        // Set camera properties
        this.cameras.main.zoom = 0.5;
        this.cameras.main.startFollow(this.player);

        // Creates object for input with WASD kets
        this.moveKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        // Enables movement of player with WASD keys
        this.input.keyboard.on('keydown_W', event => {
            this.player.setAccelerationY(-800);
        });
        this.input.keyboard.on('keydown_S', event => {
            this.player.setAccelerationY(800);
        });
        this.input.keyboard.on('keydown_A', event => {
            this.player.setAccelerationX(-800);
        });
        this.input.keyboard.on('keydown_D', event => {
            this.player.setAccelerationX(800);
        });

        // Stops player acceleration on uppress of WASD keys
        this.input.keyboard.on('keyup_W', event => {
            if (this.moveKeys['down'].isUp) { this.player.setAccelerationY(0); }
        });
        this.input.keyboard.on('keyup_S', event => {
            if (this.moveKeys['up'].isUp) { this.player.setAccelerationY(0); }
        });
        this.input.keyboard.on('keyup_A', event => {
            if (this.moveKeys['right'].isUp) { this.player.setAccelerationX(0); }
        });
        this.input.keyboard.on('keyup_D', event => {
            if (this.moveKeys['left'].isUp) { this.player.setAccelerationX(0); }
        });

        // Fires bullet from player on left click of mouse
        this.input.on('pointerdown', (pointer, time, lastFired) =>
        {
            if (this.player.active === false) { return; }

            // Get bullet from bullets group
            const bullet = this.playerBullets.get().setActive(true).setVisible(true);

            if (bullet)
            {
                bullet.fire(this.player, this.reticle);
                this.physics.add.collider(this.enemy, bullet, (enemyHit, bulletHit) => this.enemyHitCallback(enemyHit, bulletHit));
            }
        });

        // Pointer lock will only work after mousedown
        game.canvas.addEventListener('mousedown', () => {
            game.input.mouse.requestPointerLock();
        });

        // Exit pointer lock when Q or escape (by default) is pressed.
        this.input.keyboard.on('keydown_Q', event => {
            if (game.input.mouse.locked) { game.input.mouse.releasePointerLock(); }
        }, 0);

        // Move reticle upon locked pointer move
        this.input.on('pointermove', pointer =>
        {
            if (this.input.mouse.locked)
            {
                this.reticle.x += pointer.movementX;
                this.reticle.y += pointer.movementY;
            }
        });

    }

    update (time, delta)
    {
        // Rotates player to face towards reticle
        this.player.rotation = Phaser.Math.Angle.Between(this.player.x, this.player.y, this.reticle.x, this.reticle.y);

        // Rotates enemy to face towards player
        this.enemy.rotation = Phaser.Math.Angle.Between(this.enemy.x, this.enemy.y, this.player.x, this.player.y);

        // Make reticle move with player
        this.reticle.body.velocity.x = this.player.body.velocity.x;
        this.reticle.body.velocity.y = this.player.body.velocity.y;

        // Constrain velocity of player
        this.constrainVelocity(this.player, 500);

        // Constrain position of constrainReticle
        this.constrainReticle(this.reticle);

        // Make enemy fire
        this.enemyFire(time);
    }

    enemyHitCallback (enemyHit, bulletHit)
    {
        // Reduce health of enemy
        if (bulletHit.active === true && enemyHit.active === true)
        {
            enemyHit.health = enemyHit.health - 1;
            console.log('Enemy hp: ', enemyHit.health);

            // Kill enemy if health <= 0
            if (enemyHit.health <= 0)
            {
                enemyHit.setActive(false).setVisible(false);
            }

            // Destroy bullet
            bulletHit.setActive(false).setVisible(false);
        }
    }

    playerHitCallback (playerHit, bulletHit)
    {
        // Reduce health of player
        if (bulletHit.active === true && playerHit.active === true)
        {
            playerHit.health = playerHit.health - 1;
            console.log('Player hp: ', playerHit.health);

            // Kill hp sprites and kill player if health <= 0
            if (playerHit.health === 2)
            {
                this.hp3.destroy();
            }
            else if (playerHit.health === 1)
            {
                this.hp2.destroy();
            }
            else
            {
                this.hp1.destroy();

                // Game over state should execute here
            }

            // Destroy bullet
            bulletHit.setActive(false).setVisible(false);
        }
    }

    enemyFire (time)
    {
        if (this.enemy.active === false)
        {
            return;
        }

        if ((time - this.enemy.lastFired) > 1000)
        {
            this.enemy.lastFired = time;

            // Get bullet from bullets group
            const bullet = this.enemyBullets.get().setActive(true).setVisible(true);

            if (bullet)
            {
                bullet.fire(this.enemy, this.player);

                // Add collider between bullet and player
                this.physics.add.collider(this.player, bullet, (playerHit, bulletHit) => this.playerHitCallback(playerHit, bulletHit));
            }
        }
    }

    constrainVelocity (sprite, maxVelocity)
    {
        if (!sprite || !sprite.body)
        { return; }

        let angle, currVelocitySqr, vx, vy;
        vx = sprite.body.velocity.x;
        vy = sprite.body.velocity.y;
        currVelocitySqr = vx * vx + vy * vy;

        if (currVelocitySqr > maxVelocity * maxVelocity)
        {
            angle = Math.atan2(vy, vx);
            vx = Math.cos(angle) * maxVelocity;
            vy = Math.sin(angle) * maxVelocity;
            sprite.body.velocity.x = vx;
            sprite.body.velocity.y = vy;
        }
    }

    constrainReticle (reticle)
    {
        const distX = reticle.x - this.player.x; // X distance between player & reticle
        const distY = reticle.y - this.player.y; // Y distance between player & reticle

        // Ensures reticle cannot be moved offscreen (player follow)
        if (distX > 800)
        { reticle.x = this.player.x + 800; }
        else if (distX < -800)
        { reticle.x = this.player.x - 800; }

        if (distY > 600)
        { reticle.y = this.player.y + 600; }
        else if (distY < -600)
        { reticle.y = this.player.y - 600; }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);

class Bullet extends Phaser.GameObjects.Image
{
    constructor (scene)
    {
        super(scene, 0, 0, 'bullet');
        this.speed = 1;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
    }

    fire (shooter, target)
    {
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x - this.x) / (target.y - this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed * Math.sin(this.direction);
            this.ySpeed = this.speed * Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed * Math.sin(this.direction);
            this.ySpeed = -this.speed * Math.cos(this.direction);
        }

        this.rotation = shooter.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    }

    update (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}
