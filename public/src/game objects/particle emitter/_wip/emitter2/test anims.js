class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
    }

    create ()
    {
        this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

        const emitter = this.add.particles(400, 100, 'gems', {
            // anim: [ 'diamond', 'prism', 'square', 'ruby' ],
            // anim: 'diamond',
            // anim: { anims: [ 'diamond', 'prism', 'ruby' ], cycle: true, quantity: 100 },
            anim: { anims: { key: 'ruby', randomFrame: true } },
            speed: 100,
            lifespan: 6000,
            gravityY: 120
        });

        console.log(emitter);
        console.log(emitter.anims);

        // this.tweens.add({
        //     targets: emitter,
        //     x: 600,
        //     yoyo: true,
        //     repeat: -1,
        //     duration: 2000,
        //     ease: 'sine.inout'
        // });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
