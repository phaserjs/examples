class Example extends Phaser.Scene
{
    point;
    circle;
    light;
    guide;
    spider;

    preload ()
    {
        this.load.image('spider', [ 'assets/normal-maps/spider.png', 'assets/normal-maps/spider_n.png' ]);
        this.load.image('light', 'assets/normal-maps/light.png');
    }

    create ()
    {
        this.spider = this.add.sprite(400, 300, 'spider');
        this.spider.setPipeline('Light2D');

        this.light = this.lights.addLight(0, 0, 500).setIntensity(6);

        this.lights.enable().setAmbientColor(0x888888);

        //  So you can see where the light is positioned
        this.circle = new Phaser.Geom.Circle(400, 300, 200);

        this.guide = this.add.image(0, 0, 'light');
    }

    update ()
    {
        this.spider.rotation += 0.005;

        Phaser.Geom.Circle.CircumferencePoint(this.circle, this.spider.rotation - (Math.PI / 2), this.guide);

        this.light.x = this.guide.x;
        this.light.y = this.guide.y;
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
