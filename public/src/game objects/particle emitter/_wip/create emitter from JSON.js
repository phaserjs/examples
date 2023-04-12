class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.json('emitter', 'assets/particles/emitter.json'); // see './particle editor.js'
    }

    create ()
    {
        const particles = this.add.particles('flares');

        particles.createEmitter(this.cache.json.get('emitter'));

    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
