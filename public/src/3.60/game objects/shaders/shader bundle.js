class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.glsl('bundle', 'assets/shaders/bundle2.glsl.js');
    }

    create ()
    {
        //  The bundle file contains multiple shaders, all separated by a frontmatter block
        //  You can reference them by name:

        const s1 = this.add.shader('Marble', 0, 0, 400, 600).setOrigin(0);
        const s2 = this.add.shader('Flower Plasma', 400, 0, 400, 600).setOrigin(0);

        // s1.setUniform('size.value', 0.0);
        // s2.setUniform('size.value', 1.0);

        window.s1 = s1;
        window.s2 = s2;

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
