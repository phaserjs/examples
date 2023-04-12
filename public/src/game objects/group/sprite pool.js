class Example extends Phaser.Scene
{
    captionTextFormat =
        `Total:    %1
        Max:      %2
        Active:   %3
        Inactive: %4
        Used:     %5
        Free:     %6
        Full:     %7`;

    captionStyle = {
        fill: '#7fdbff',
        fontFamily: 'monospace',
        lineSpacing: 4
    };

    caption;
    group;

    preload ()
    {
        this.load.image('space', 'assets/skies/space.jpg');
        this.load.spritesheet('alien', 'assets/tests/invaders/invader1.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.anims.create({
            key: 'creep',
            frames: this.anims.generateFrameNumbers('alien', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });

        this.add.image(400, 300, 'space');

        this.group = this.add.group({
            defaultKey: 'alien',
            maxSize: 100,
            createCallback: function (alien)
            {
                alien.setName(`alien${this.getLength()}`);
                console.log('Created', alien.name);
            },
            removeCallback: function (alien)
            {
                console.log('Removed', alien.name);
            }
        });

        // You could also fill the group first:
        // group.createMultiple({
        //     active: false,
        //     key: group.defaultKey,
        //     repeat: group.maxSize - 1
        // });

        this.caption = this.add.text(16, 16, '', this.captionStyle);

        this.time.addEvent({
            delay: 100,
            loop: true,
            callback: () => this.addAlien()
        });
    }

    update ()
    {
        Phaser.Actions.IncY(this.group.getChildren(), 1);

        this.group.children.iterate(alien =>
        {
            if (alien.y > 600)
            {
                this.group.killAndHide(alien);
            }
        });

        this.caption.setText(Phaser.Utils.String.Format(this.captionTextFormat, [
            this.group.getLength(),
            this.group.maxSize,
            this.group.countActive(true),
            this.group.countActive(false),
            this.group.getTotalUsed(),
            this.group.getTotalFree(),
            this.group.isFull()
        ]));
    }

    activateAlien (alien)
    {
        alien
            .setActive(true)
            .setVisible(true)
            .setTint(Phaser.Display.Color.RandomRGB().color)
            .play('creep');
    }

    addAlien ()
    {
        // Random position above screen
        const x = Phaser.Math.Between(250, 800);
        const y = Phaser.Math.Between(-64, 0);

        // Find first inactive sprite in group or add new sprite, and set position
        const alien = this.group.get(x, y);

        // None free or already at maximum amount of sprites in group
        if (!alien) { return; }

        this.activateAlien(alien);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
