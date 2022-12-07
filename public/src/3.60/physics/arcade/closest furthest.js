class Example extends Phaser.Scene
{
    gfx;
    group;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        this.group = this.physics.add.group({
            defaultKey: 'block',
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });

        this.group.create(100, 200).setVelocity(100, 200);
        this.group.create(500, 200).setVelocity(-100, -100);
        this.group.create(300, 400).setVelocity(60, 100);
        this.group.create(600, 300).setVelocity(-30, -50);

        this.gfx = this.add.graphics();

        const cursor = this.add.image(0, 0, 'cursor').setVisible(false);

        // Loads the spatial tree
        this.physics.world.step(0);

        this.input.on('pointermove', pointer =>
        {
            cursor.setVisible(true).setPosition(pointer.x, pointer.y);
        });

    }

    update ()
    {
        const pointer = this.input.activePointer;
        const closest = this.physics.closest(pointer);
        const furthest = this.physics.furthest(pointer);

        this.gfx.clear()
            .lineStyle(2, 0xff3300)
            .lineBetween(closest.x, closest.y, pointer.x, pointer.y)
            .lineStyle(2, 0x0099ff)
            .lineBetween(furthest.x, furthest.y, pointer.x, pointer.y);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
