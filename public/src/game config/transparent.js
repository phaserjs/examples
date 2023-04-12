class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/forgotten-worlds.png');
    }

    create ()
    {
        //  This just injects an image into the div background, so you can see the transparency working.
        const div = document.getElementById('phaser-example');

        div.style.background = 'url(assets/demoscene/multi-color-raster.png)';

        this.add.image(400, 600, 'pic').setOrigin(0.5, 1);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    transparent: true,
    scene: Example
};

const game = new Phaser.Game(config);
