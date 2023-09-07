class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = 'assets/atlas/';
        this.load.multiatlas('megaset', 'tp3-multi-atlas.json');
    }

    create ()
    {
        // Good - This frame from the 1st atlas would be displayed correctly
        this.add.image(40, 60, 'megaset', 'diamond')
        // Good - This frame from the 2nd atlas would be displayed correctly
        this.add.image(80, 60, 'megaset', 'gem')

        // Good - These particles of a frame from the 1st atlas would be displayed correctly
        this.add.particles(40, 200, 'megaset', { frame: 'diamond' });
        // Bad - These particles of a frame from the 2nd atlas would be displayed incorrectly
        this.add.particles(80, 200, 'megaset', { frame: 'gem' });
    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    parent: 'phaser-example'
});
