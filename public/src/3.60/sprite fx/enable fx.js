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
        this.load.image('128', 'assets/sprites/atari400.png');
        this.load.image('debug', 'assets/pics/checker.png');
    }

    create ()
    {
        const melon = this.add.image(100, 300, 'melon');
        const yune = this.add.image(400, 300, 'yune');
        const grid = this.add.image(400, 300, '128');
        const star = this.add.image(700, 300, 'star');

        melon.enableFX(32);
        yune.enableFX(32);
        grid.enableFX(32);
        star.enableFX(32);

        // const glow = star.addGlowFX();
        // console.log(glow);
        // window.glow = glow;

        // const shadow = star.addShadowFX();
        // window.shadow = shadow;
        // const pixel = star.addPixelateFX();
        // window.pixel = pixel;
        // console.log(star.fx);

        // atari.addGlowFX();
        // grid.addGlowFX();
        // star.addGlowFX();

        // melon.addShadowFX();
        // yune.addShadowFX();
        // grid.addShadowFX();
        // star.addShadowFX();

        // melon.addPixelateFX();
        // yune.addPixelateFX();
        // grid.addPixelateFX();
        // star.addPixelateFX();

        // melon.addVignetteFX();
        // yune.addVignetteFX();
        // grid.addVignetteFX();
        // star.addVignetteFX();

        melon.addShineFX();
        yune.addShineFX();
        grid.addShineFX();
        star.addShineFX();

        // grid.addVignetteFX();
        // star.addVignetteFX();

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
