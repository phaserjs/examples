class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('melon', 'assets/sprites/watermelon.png');
        this.load.image('yune', 'assets/sprites/yune.png');
        this.load.image('star', 'assets/sprites/star.png');
    }

    create ()
    {
        const melon = this.add.image(100, 300, 'melon');
        const yune = this.add.image(400, 300, 'yune');
        const star = this.add.image(700, 300, 'star');

        // const text = this.add.text(100, 0, 'Hello World!').setFontFamily('Arial Black').setFontSize(96).setColor('#fff');

        // melon.setPipeline(pipeline);
        // yune.setPipeline(pipeline);
        // star.setPipeline(pipeline);
        // text.setPipeline(pipeline);

        star.enableFX(32);

        // const glow = star.addGlowFX();

        // console.log(glow);
        // window.glow = glow;

        // const shadow = star.addShadowFX();
        // window.shadow = shadow;

        const pixel = star.addPixelateFX();

        window.pixel = pixel;

        console.log(star.fx);

        this.tweens.add({
            targets: star,
            angle: 360,
            duration: 2500,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
