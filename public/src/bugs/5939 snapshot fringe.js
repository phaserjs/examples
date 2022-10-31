class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
		const text = this.add.text(0, 0, "0123ABC", {
			fontSize: "180px",
			fontStyle: "900",
		});

        //  DT test
        const texture = this.textures.addDynamicTexture('text', text.width, text.height);
        texture.draw(text);

        //  Issue 5939 example:
        // this.add.rectangle(0, 300, 800, 400, 0xf7f5f5).setOrigin(0);
        // const texture = this.add.renderTexture(0, 300, text.width, text.height).setOrigin(0, 0);
        // texture.draw(text);

        texture.snapshot(image => {

            document.body.appendChild(image);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
