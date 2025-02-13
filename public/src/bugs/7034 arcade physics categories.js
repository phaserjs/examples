class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mine', 'assets/sprites/mine.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        this.physics.world.setBounds(0, 0, 800, 600);

        // --- 1) Define Categories (bitmask values) ---
        this.categories = {
            playerMelee: 1,  // 2^0 -> 0b0001
            playerRanged: 2,  // 2^1 -> 0b0010
            enemyMelee: 4,  // 2^2 -> 0b0100
            enemyRanged: 8   // 2^3 -> 0b1000
        };

        // --- 2) Create Four Groups ---
        this.playerMeleeGroup = this.physics.add.group();
        this.playerRangedGroup = this.physics.add.group();

        this.playerMeleeGroup.setCollisionCategory(this.categories.playerMelee);
        this.playerMeleeGroup.setCollidesWith([ this.categories.playerMelee, this.categories.playerRanged ]);
        
        this.playerRangedGroup.setCollisionCategory(this.categories.playerRanged);
        this.playerRangedGroup.setCollidesWith([ this.categories.playerMelee, this.categories.playerRanged ]);

        // --- 3) Add Some Containers, One for Each Type ---
        // Player Melee
        this.playerMelee1 = this.createUnit(
            100, 300, 0x00ff00, "playerMelee1",
            this.categories.playerMelee,
            [ this.categories.playerMelee, this.categories.playerRanged ],
            this.playerMeleeGroup
        );
        // Player Ranged
        this.playerRanged1 = this.createUnit(
            200, 300, 0x008800, "playerRanged1",
            this.categories.playerRanged,
            [ this.categories.playerMelee, this.categories.playerRanged ],
            this.playerRangedGroup
        );
        // -- Player Melee <-> Player Ranged (friendly collisions) --
        this.physics.add.collider(
            this.playerMeleeGroup,
            this.playerRangedGroup,
            this.handleFriendlyCollision,
            undefined,
            this
        );

        // --- 5) DEMO: Remove Collision After 6s ---
        this.time.addEvent({
            delay: 6000,
            callback: () =>
            {
                console.log("Removing collision between playerRanged and category playerMelee");
                // e.g. Player Ranged no longer collides with player Melee
                console.log('remove player Ranged');
                this.playerRanged1.body.removeCollidesWith(this.categories.playerMelee);
                console.log('remove player Melee');
                this.playerMelee1.body.removeCollidesWith(this.categories.playerRanged);

            },
            callbackScope: this
        });

        // --- 6) Drag Behavior (optional) ---
        // Make containers draggable
        this.input.setDraggable([
            this.playerMelee1,
            this.playerRanged1,
        ]);

        this.input.on('dragstart', (pointer, obj) =>
        {
            console.log("dragstart on", obj.name);
            // Stop velocity if you don't want it fighting the drag
            obj.body.setVelocity(0, 0);
        });

        this.input.on('drag', (pointer, obj, dragX, dragY) =>
        {
            obj.setPosition(dragX, dragY);
        });

        this.input.on('dragend', (pointer, obj) =>
        {
            console.log("dragend on", obj.name);
            // Re-enable velocity if desired
            // obj.body.setVelocityX(50);
        });

        // this.removeCollisions();
    }

    removeCollisions () 
    {
        console.log('remove player Ranged');
        this.playerRanged1.body.removeCollidesWith(this.categories.playerMelee);
        console.log('remove player Melee');
        this.playerMelee1.body.removeCollidesWith(this.categories.playerRanged);
    }

    // --- Create a container with a rectangle, apply physics, etc. ---
    createUnit (x, y, color, name, collisionCat, collidesWithCats, group, velocityX = 50)
    {
        const container = this.add.container(x, y);
        container.setName(name);
        container.setSize(50, 50);

        // Make an internal rectangle to visualize it
        const rect = this.add.rectangle(0, 0, 50, 50, color);
        container.add(rect);

        // check if `name` includes the string 'melee'
        // if so, add a mine sprite to the container
        const sprite = this.add.image(0, 0, name.includes('Melee') ? 'mine' : 'arrow');
        container.add(sprite);

        // For input + dragging
        container.setSize(50, 50);
        container.setInteractive();

        // Add Arcade Physics
        this.physics.world.enable(container);
        container.body.setCollideWorldBounds(true);
        container.body.setVelocityX(velocityX);

        // Assign categories
        container.body.setCollisionCategory(collisionCat);
        container.body.setCollidesWith(collidesWithCats);

        // Add to the correct group
        group.add(container);

        return container;
    }

    // --- Collision Callbacks ---
    handleFriendlyCollision (go1, go2)
    {
        console.log("Friendly collision between:", go1.name, "and", go2.name);
    }

    handleOpponentCollision (go1, go2)
    {
        console.log("Opponent collision between:", go1.name, "and", go2.name);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);