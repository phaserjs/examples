class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/textures/gold.png');
        this.load.image('displacement', 'assets/textures/gold-n.png');
    }

    create ()
    {
        const bg = this.add.image(this.sys.scale.width / 2, this.sys.scale.height / 2, 'bg');
        Phaser.Actions.FitToRegion(bg, 1);

        Phaser.Actions.AddEffectShine(bg, {
            displacementMap: 'displacement',
            displacement: 1,
            colorFactor: [ 0, 1, 2, 1 ],
            direction: 0,
            scale: 1,
            duration: 5000,
            ease: 'Quad.inout',
            yoyo: true
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#2f3640',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
