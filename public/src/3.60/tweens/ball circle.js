class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space3.png');
        this.load.image('star', 'assets/demoscene/ball-tlb.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const stars = this.add.group({ key: 'star', repeat: 32 });

        const circle = new Phaser.Geom.Circle(400, 300, 64);

        Phaser.Actions.PlaceOnCircle(stars.getChildren(), circle);

        this.tweens.add({
            targets: circle,
            radius: 228,
            ease: 'Quintic.easeInOut',
            duration: 1500,
            yoyo: true,
            repeat: -1,
            onUpdate: function ()
            {
                Phaser.Actions.RotateAroundDistance(stars.getChildren(), { x: 400, y: 300 }, 0.02, circle.radius);
            }
        });
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
