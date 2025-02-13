class Example extends Phaser.Scene
{
    element;
    player;
    cursors;

    preload ()
    {
        this.load.image('block', 'assets/sprites/crate32.png');
        this.load.html('body', 'assets/html/arcade-body.html');
    }

    create ()
    {
        // var data = this.cache.html.get('body');
        const domElement = this.add.dom(400, 0).createFromCache('body')
            .setOrigin(0);
        this.physics.add.existing(domElement, false);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.element = this.add.dom(300, 200, 'div', 'font-size: 96px', '💩')
            .setOrigin(0);

        this.physics.add.existing(this.element, false);

        this.element.body.setCollideWorldBounds(true);

        const element = this.add.dom(100, 100, 'div', 'font-size: 96px; background-color: #FFFFFF', '💩').setOrigin(0);

        this.physics.add.existing(element, false);

        element.body.setCollideWorldBounds(true)
        // .setSize(element.width, element.height);
        // console.log(element.displayWidth, element.displayHeight);

        const box = this.physics.add.image(100, 100, 'block');
    }

    update ()
    {
        return;
        this.element.body.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.element.body.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.element.body.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.element.body.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.element.body.setVelocityY(300);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 600,
    height: 450,
    dom: {
        createContainer: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);