class Example extends Phaser.Scene
{
    cursor;
    graphics;
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

        this.graphics = this.add.graphics();

        this.cursor = this.add.image(400, 300, 'cursor');

        this.input.on('pointermove', pointer =>
        {
            this.cursor.copyPosition(pointer);
        });

    }

    update ()
    {
        const closest = this.physics.closest(this.cursor);
        const furthest = this.physics.furthest(this.cursor);

        this.graphics.clear()
            .lineStyle(2, 0xff3300)
            .lineBetween(closest.center.x, closest.center.y, this.cursor.x, this.cursor.y)
            .lineStyle(2, 0x0099ff)
            .lineBetween(furthest.center.x, furthest.center.y, this.cursor.x, this.cursor.y);
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
