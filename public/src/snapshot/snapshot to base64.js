class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('myImage', 'assets/sprites/phaser1.png');
        this.load.glsl('fireball', 'assets/shaders/shader0.frag');
    }

    create ()
    {
        this.add.shader('fireball', 400, 300, 800, 600);

        for (let i = 0; i < 16; ++i)
        {
            this.add.image(Math.random() * 800, Math.random() * 600, 'myImage');
        }

        this.input.once('pointerdown', () => {

            this.renderer.snapshot(image => {

                //  For testing to see if the snapshot worked:
                document.body.appendChild(image);

                const snap = this.textures.createCanvas('snap', image.width, image.height);

                snap.draw(0, 0, image);

                const base64 = snap.canvas.toDataURL();

                console.log(base64);

            });

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
