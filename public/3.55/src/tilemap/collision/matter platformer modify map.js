class Example extends Phaser.Scene
{
    playerController;
    cursors;
    cam;
    smoothedControls;
    map;

    constructor () {
        super({ key: "main" });
    }

    preload ()
    {
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/matter-platformer-dynamic-example.json');
        this.load.image('kenney_redux_64x64', 'assets/tilemaps/tiles/kenney_redux_64x64.png');
        this.load.spritesheet('player', 'assets/sprites/dude-cropped.png', { frameWidth: 32, frameHeight: 42 });
        this.load.image('box', 'assets/sprites/box-item-boxed.png');
    }

    create ()
    {
        this.map = this.make.tilemap({ key: 'map' });
        const tileset = this.map.addTilesetImage('kenney_redux_64x64');
        const bgLayer = this.map.createLayer('Background Layer', tileset, 0, 0);
        const groundLayer = this.map.createLayer('Ground Layer', tileset, 0, 0);
        const fgLayer = this.map.createLayer('Foreground Layer', tileset, 0, 0).setDepth(1);

        // Set up the layer to have matter bodies. Any colliding tiles will be given a Matter body.
        groundLayer.setCollisionByProperty({ collides: true });
        this.matter.world.convertTilemapLayer(groundLayer);

        this.matter.world.setBounds(this.map.widthInPixels, this.map.heightInPixels);
        this.matter.world.drawDebug = false;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.smoothedControls = new SmoothedHorionztalControl(0.001);

        // The player is a collection of bodies and sensors
        this.playerController = {
            matterSprite: this.matter.add.sprite(0, 0, 'player', 4),
            blocked: {
                left: false,
                right: false,
                bottom: false
            },
            numTouching: {
                left: 0,
                right: 0,
                bottom: 0
            },
            sensors: {
                bottom: null,
                left: null,
                right: null
            },
            time: {
                leftDown: 0,
                rightDown: 0
            },
            lastJumpedAt: 0,
            speed: {
                run: 5,
                jump: 7
            }
        };

        const M = Phaser.Physics.Matter.Matter;
        const w = this.playerController.matterSprite.width;
        const h = this.playerController.matterSprite.height;

        // Move the sensor to player center
        const sx = w / 2;
        const sy = h / 2;

        // The player's body is going to be a compound body.
        const height_fix = 0;
        const playerBody = M.Bodies.rectangle(sx, sy, w * 0.75, h, { chamfer: { radius: 10 } });
        this.playerController.sensors.bottom = M.Bodies.rectangle(sx, h, sx, 5, { isSensor: true });
        this.playerController.sensors.left = M.Bodies.rectangle(sx - w * 0.45, sy, 5, h * 0.25, { isSensor: true });
        this.playerController.sensors.right = M.Bodies.rectangle(sx + w * 0.45, sy, 5, h * 0.25, { isSensor: true });
        const compoundBody = M.Body.create({
            parts: [
                playerBody, this.playerController.sensors.bottom, this.playerController.sensors.left,
                this.playerController.sensors.right
            ],
            restitution: 0.05 // Prevent body from sticking against a wall
        });

        // There is a "Button Press Sensor" polygon in the "Sensors" layer in Tiled. We can use this to
        // map out the "pressable" hitbox for the button.
        const sensor = this.map.findObject('Sensors', function (obj)
        {
            return obj.name === 'Button Press Sensor';
        });
        const center = M.Vertices.centre(sensor.polygon); // Matter places shapes by center of mass
        const sensorBody = this.matter.add.fromVertices(
            sensor.x + center.x, sensor.y + center.y,
            sensor.polygon,
            { isStatic: true, isSensor: true }
        );

        this.playerController.matterSprite
            .setExistingBody(compoundBody)
            .setFixedRotation() // Sets max inertia to prevent rotation
            .setPosition(32, 1000);

        this.cam = this.cameras.main;
        this.cam.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.smoothMoveCameraTowards(this.playerController.matterSprite);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        // Use matter events to detect whether the player is touching a surface to the left, right or
        // bottom.

        // Loop over the active colliding pairs and count the surfaces the player is touching.
        this.matter.world.on('collisionstart', function (event)
        {
            for (let i = 0; i < event.pairs.length; i++)
            {
                const bodyA = event.pairs[i].bodyA;
                const bodyB = event.pairs[i].bodyB;
                if ((bodyA === playerBody && bodyB === sensorBody) ||
                    (bodyA === sensorBody && bodyB === playerBody))
                {
                    this.matter.world.remove(sensorBody);

                    const buttonTile = groundLayer.getTileAt(4, 18);

                    // Change the tile to the new index (a "pressed" button tile) and tell the existing
                    // matter body to update itself from the Tiled collision data.
                    buttonTile.index = 93;
                    buttonTile.physics.matterBody.setFromTileCollision();

                    // Animate a bridge of new tiles opening up over the lava.
                    for (let j = 5; j <= 14; j++)
                    {
                        this.time.addEvent({
                            delay: (j - 5) * 50,
                            callback: function (x)
                            {
                                const bridgeTile = groundLayer.putTileAt(12, x, 19);

                                // When creating a new tile that didn't already have a tile body, you
                                // can use the tileBody factory method. See
                                // Phaser.Physics.Matter.TileBody for options. This will default to
                                // adding a body with the Tiled collision data here.
                                this.matter.add.tileBody(bridgeTile);
                            }.bind(this, j)
                        });
                    }
                }
            }
        }, this);

        // Use matter events to detect whether the player is touching a surface to the left, right or
        // bottom.

        // Before matter's update, reset the player's count of what surfaces it is touching.
        this.matter.world.on('beforeupdate', function (event)
        {
            this.playerController.numTouching.left = 0;
            this.playerController.numTouching.right = 0;
            this.playerController.numTouching.bottom = 0;
        }, this);

        // Loop over the active colliding pairs and count the surfaces the player is touching.
        this.matter.world.on('collisionactive', function (event)
        {
            const playerBody = this.playerController.body;
            const left = this.playerController.sensors.left;
            const right = this.playerController.sensors.right;
            const bottom = this.playerController.sensors.bottom;

            for (let i = 0; i < event.pairs.length; i++)
            {
                const bodyA = event.pairs[i].bodyA;
                const bodyB = event.pairs[i].bodyB;

                if (bodyA === playerBody || bodyB === playerBody)
                {
                    continue;
                }
                else if (bodyA === bottom || bodyB === bottom)
                {
                    // Standing on any surface counts (e.g. jumping off of a non-static crate).
                    this.playerController.numTouching.bottom += 1;
                }
                else if ((bodyA === left && bodyB.isStatic) || (bodyB === left && bodyA.isStatic))
                {
                    // Only static objects count since we don't want to be blocked by an object that we
                    // can push around.
                    this.playerController.numTouching.left += 1;
                }
                else if ((bodyA === right && bodyB.isStatic) || (bodyB === right && bodyA.isStatic))
                {
                    this.playerController.numTouching.right += 1;
                }
            }
        }, this);

        // Update over, so now we can determine if any direction is blocked
        this.matter.world.on('afterupdate', function (event)
        {
            this.playerController.blocked.right = this.playerController.numTouching.right > 0 ? true : false;
            this.playerController.blocked.left = this.playerController.numTouching.left > 0 ? true : false;
            this.playerController.blocked.bottom = this.playerController.numTouching.bottom > 0 ? true : false;
        }, this);

        this.input.on('pointerdown', function ()
        {
            this.matter.world.drawDebug = !this.matter.world.drawDebug;
            this.matter.world.debugGraphic.visible = this.matter.world.drawDebug;
        }, this);

        const lines = [
            'Arrow keys to move. Press "Up" to jump.',
            'Press the button!',
            'Click to toggle rendering Matter debug.'
        ];

        const text = this.add.text(16, 16, lines, {
            fontSize: '20px',
            padding: { x: 20, y: 10 },
            backgroundColor: '#ffffff',
            fill: '#000000'
        });
        text.setScrollFactor(0);
    }

    update (time, delta)
    {
        const matterSprite = this.playerController.matterSprite;
        if (!matterSprite) { return; }

        // Player death
        if (matterSprite.y > this.map.heightInPixels)
        {
            matterSprite.destroy();
            this.playerController.matterSprite = null;
            this.restart();
            return;
        }

        // Horizontal movement
        let oldVelocityX;
        let targetVelocityX;
        let newVelocityX;

        if (this.cursors.left.isDown && !this.playerController.blocked.left)
        {
            this.smoothedControls.moveLeft(delta);
            matterSprite.anims.play('left', true);

            // Lerp the velocity towards the max run using the smoothed controls. This simulates a
            // player controlled acceleration.
            oldVelocityX = matterSprite.body.velocity.x;
            targetVelocityX = -this.playerController.speed.run;
            newVelocityX = Phaser.Math.Linear(oldVelocityX, targetVelocityX, -this.smoothedControls.value);

            matterSprite.setVelocityX(newVelocityX);
        }
        else if (this.cursors.right.isDown && !this.playerController.blocked.right)
        {
            this.smoothedControls.moveRight(delta);
            matterSprite.anims.play('right', true);

            // Lerp the velocity towards the max run using the smoothed controls. This simulates a
            // player controlled acceleration.
            oldVelocityX = matterSprite.body.velocity.x;
            targetVelocityX = this.playerController.speed.run;
            newVelocityX = Phaser.Math.Linear(oldVelocityX, targetVelocityX, this.smoothedControls.value);

            matterSprite.setVelocityX(newVelocityX);
        }
        else
        {
            this.smoothedControls.reset();
            matterSprite.anims.play('idle', true);
        }

        // Jumping

        // Add a slight delay between jumps since the sensors will still collide for a few frames after
        // a jump is initiated
        const canJump = (time - this.playerController.lastJumpedAt) > 250;
        if (this.cursors.up.isDown & canJump && this.playerController.blocked.bottom)
        {
            matterSprite.setVelocityY(-this.playerController.speed.jump);
            this.playerController.lastJumpedAt = time;
        }

        this.smoothMoveCameraTowards(matterSprite, 0.9);
    }

    smoothMoveCameraTowards (target, smoothFactor)
    {
        if (smoothFactor === undefined) { smoothFactor = 0; }
        this.cam.scrollX = smoothFactor * this.cam.scrollX + (1 - smoothFactor) * (target.x - this.cam.width * 0.5);
        this.cam.scrollY = smoothFactor * this.cam.scrollY + (1 - smoothFactor) * (target.y - this.cam.height * 0.5);
    }

    restart ()
    {
        this.cam.fade(500, 0, 0, 0);
        this.cam.shake(250, 0.01);

        this.time.addEvent({
            delay: 500,
            callback: function ()
            {
                this.cam.resetFX();
                this.scene.stop();
                this.scene.start('main');
            },
            callbackScope: this
        });
    }

}

// Smoothed horizontal controls helper. This gives us a value between -1 and 1 depending on how long
// the player has been pressing left or right, respectively.
class SmoothedHorionztalControl
{
    constructor (speed)
    {
        this.msSpeed = speed;
        this.value = 0;
    }

    moveLeft (delta)
    {
        if (this.value > 0) { this.reset(); }
        this.value -= this.msSpeed * delta;
        if (this.value < -1) { this.value = -1; }
    }

    moveRight (delta)
    {
        if (this.value < 0) { this.reset(); }
        this.value += this.msSpeed * delta;
        if (this.value > 1) { this.value = 1; }
    }

    reset ()
    {
        this.value = 0;
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
            gravity: { y: 1 },
            enableSleep: false,
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
