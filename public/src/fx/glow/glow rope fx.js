class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.rope;
        this.count = 0;
    }

    preload ()
    {
        this.load.image('bg', 'assets/rope/background-red.png');
        this.load.image('banner', 'assets/rope/fade-one.png');
    }

    create ()
    {
        this.add.image(512, 300, 'bg').setAlpha(0.5);

        this.rope = this.add.rope(400, 300, 'banner', null, 20);

        const fx = this.rope.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 32);

        this.tweens.add({
            targets: fx,
            outerStrength: 10,
            yoyo: true,
            loop: -1,
            ease: 'sine.inout'
        });
    }

    update ()
    {
        this.count += 0.1;

        let points = this.rope.points;

        for (let i = 0; i < points.length; i++)
        {
            points[i].y = Math.sin(i * 0.5 + this.count) * 16;
        }

        this.rope.setDirty();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
