class Example extends Phaser.Scene
{
    time = 0;
    lastFired = 0;
    bullets;
    moveKeys;
    reticle;
    player;

    preload ()
    {
        // Load in images and sprites
        this.load.spritesheet(
            'player_handgun',
            'assets/sprites/player_handgun.png',
            { frameWidth: 66, frameHeight: 60 }
        ); // Made by tokkatrain: https://tokkatrain.itch.io/top-down-basic-set
        this.load.image('target', 'assets/demoscene/ball.png');
        this.load.image('background', 'assets/skies/underwater1.png');
    }

    create ()
    {
        // Create world bounds
        this.physics.world.setBounds(0, 0, 1600, 1200);

        // Add background, player, and reticle sprites
        const background = this.add.image(800, 600, 'background');
        this.player = this.physics.add.sprite(800, 600, 'player_handgun');
        this.reticle = this.physics.add.sprite(800, 700, 'target');

        // Set image/sprite properties
        background.setOrigin(0.5, 0.5).setDisplaySize(1600, 1200);
        this.player
            .setOrigin(0.5, 0.5)
            .setDisplaySize(132, 120)
            .setCollideWorldBounds(true)
            .setDrag(500, 500);
        this.reticle
            .setOrigin(0.5, 0.5)
            .setDisplaySize(25, 25)
            .setCollideWorldBounds(true);

        // Set camera zoom
        this.cameras.main.zoom = 0.5;

        // Creates object for input with WASD kets
        this.moveKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        // Enables movement of player with WASD keys
        this.input.keyboard.on('keydown_W', (event) => {
            this.player.setAccelerationY(-800);
        });
        this.input.keyboard.on('keydown_S', (event) => {
            this.player.setAccelerationY(800);
        });
        this.input.keyboard.on('keydown_A', (event) => {
            this.player.setAccelerationX(-800);
        });
        this.input.keyboard.on('keydown_D', (event) => {
            this.player.setAccelerationX(800);
        });

        // Stops player acceleration on uppress of WASD keys
        this.input.keyboard.on('keyup_W', (event) => {
            if (this.moveKeys['down'].isUp) { this.player.setAccelerationY(0); }
        });
        this.input.keyboard.on('keyup_S', (event) => {
            if (this.moveKeys['up'].isUp) { this.player.setAccelerationY(0); }
        });
        this.input.keyboard.on('keyup_A', (event) => {
            if (this.moveKeys['right'].isUp) { this.player.setAccelerationX(0); }
        });
        this.input.keyboard.on('keyup_D', (event) => {
            if (this.moveKeys['left'].isUp) { this.player.setAccelerationX(0); }
        });

        // Locks pointer on mousedown
        game.canvas.addEventListener('mousedown', () => {
            game.input.mouse.requestPointerLock();
        });

        // Exit pointer lock when Q or escape (by default) is pressed.
        this.input.keyboard.on(
            'keydown_Q',
            (event) =>
            {
                if (game.input.mouse.locked) { game.input.mouse.releasePointerLock(); }
            },
            0,
        );

        // Move reticle upon locked pointer move
        this.input.on(
            'pointermove',
            function (pointer)
            {
                if (this.input.mouse.locked)
                {
                    // Move reticle with mouse
                    this.reticle.x += pointer.movementX;
                    this.reticle.y += pointer.movementY;

                    // Only works when camera follows player
                    const distX = this.reticle.x - this.player.x;
                    const distY = this.reticle.y - this.player.y;

                    // Ensures reticle cannot be moved offscreen
                    if (distX > 800) { this.reticle.x = this.player.x + 800; }
                    else if (distX < -800) { this.reticle.x = this.player.x - 800; }

                    if (distY > 600) { this.reticle.y = this.player.y + 600; }
                    else if (distY < -600) { this.reticle.y = this.player.y - 600; }
                }
            },
            this
        );
    }

    update (time, delta)
    {
        // Rotates player to face towards reticle
        this.player.rotation = Phaser.Math.Angle.Between(
            this.player.x,
            this.player.y,
            this.reticle.x,
            this.reticle.y
        );

        // Camera position is average between reticle and player positions
        const avgX = (this.player.x + this.reticle.x) / 2 - 400;
        const avgY = (this.player.y + this.reticle.y) / 2 - 300;
        this.cameras.main.scrollX = avgX;
        this.cameras.main.scrollY = avgY;

        // Make reticle move with player
        this.reticle.body.velocity.x = this.player.body.velocity.x;
        this.reticle.body.velocity.y = this.player.body.velocity.y;

        // Constrain velocity of player
        this.constrainVelocity(this.player, 500);

        // Constrain position of reticle
        this.constrainReticle(this.reticle, 550);
    }

    constrainVelocity (sprite, maxVelocity)
    {
        if (!sprite || !sprite.body) { return; }

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

    constrainReticle (reticle, radius)
    {
        const distX = reticle.x - this.player.x; // X distance between player & reticle
        const distY = reticle.y - this.player.y; // Y distance between player & reticle

        // Ensures reticle cannot be moved offscreen
        if (distX > 800) { reticle.x = this.player.x + 800; }
        else if (distX < -800) { reticle.x = this.player.x - 800; }

        if (distY > 600) { reticle.y = this.player.y + 600; }
        else if (distY < -600) { reticle.y = this.player.y - 600; }

        // Ensures reticle cannot be moved further than dist(radius) from player
        const distBetween = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            reticle.x,
            reticle.y
        );
        if (distBetween > radius)
        {
            // Place reticle on perimeter of circle on line intersecting player & reticle
            const scale = distBetween / radius;

            reticle.x = this.player.x + (reticle.x - this.player.x) / scale;
            reticle.y = this.player.y + (reticle.y - this.player.y) / scale;
        }
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
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
