class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload () 
    {
        this.load.image('map', 'assets/tests/camera/earthbound-scarab.png');
        this.load.image('map2', 'assets/tests/camera/earthbound-scarab.png');
        this.load.image('ship', 'assets/sprites/shmup-ship2.png');
    }

    create () 
    {
        // Set world bounds
        this.matter.world.setBounds(0, 0, 800, 600);

        this.background = this.add.image(0, 0, "map2").setOrigin(0,0);

        //  Add a minimap
        this.minimap = this.add.image(20, 20, "map").setOrigin(0,0);
        this.minimap.frame.setCutSize(64, 64);

        //  Add a player ship and camera follow
        this.player = this.matter.add.sprite(512, 512, 'ship')
            .setFixedRotation()
            .setFrictionAir(0.05)
            .setMass(30);
            
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update () 
    {
        if (this.cursors.left.isDown)
        {
            this.player.thrustBack(0.1);
            this.player.flipX = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.thrust(0.1);
            this.player.flipX = false;
        }
        if (this.cursors.up.isDown)
        {
            this.player.thrustLeft(0.1);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.thrustRight(0.1);
        }

        this.minimap.frame.setCutPosition(this.player.x, this.player.y);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            },
            enableSleeping: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
