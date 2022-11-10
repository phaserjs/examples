class Example extends Phaser.Scene
{
    constructor ()
    {
        super('Example');
        this.character = null;
    }

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser2.png')
        this.load.image('particle', 'assets/particles/yellow.png')
    }

    create ()
    {
        this.lights.enable()
        this.lights.setAmbientColor(0x000000)

        this.cursorKeys = this.input.keyboard.createCursorKeys()

        this.light = this.lights.addLight(0, 0, 300, 0xffffff, 3)
        this.character = this.add.image(500, 600, 'particle')

        const image = this.add.image(500, 500, 'logo')

        this.add.image(500, 300, 'particle')

        image.setDepth(image.y).setPipeline('Light2D')
    }

    update ()
    {
        if (this.light && this.character)
        {
            const { x, y } = this.character
            this.light.setPosition(x, y)
        }

        if (this.character)
        {
            if (this.cursorKeys)
            {
                if (this.cursorKeys.down.isDown) 	this.character.y += 3
                if (this.cursorKeys.up.isDown) 		this.character.y -= 3
                if (this.cursorKeys.left.isDown) 	this.character.x -= 3
                if (this.cursorKeys.right.isDown) this.character.x += 3
            }
            this.character.setDepth(this.character.y)
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
