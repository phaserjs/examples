class Example extends Phaser.Scene
{
    orb;
    spotlight;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', [ 'assets/textures/gold.png', 'assets/textures/gold-n.png' ]);
        this.load.image('orb', [ 'assets/normal-maps/gem2.png', 'assets/normal-maps/orb-128.png' ]);
    }

    create ()
    {
        this.lights.enable();
        this.lights.setAmbientColor(0x556677);

        this.add.sprite(400, 300, 'bg').setLighting(true);

        this.orb = this.add.image(500, 400, 'orb').setLighting(true);

        // Environment fill lights
        this.lights.addLight(-200, -200, 2000, 0x6633aa).setIntensity(0.5).setZ(600);
        this.lights.addLight(1000, 800, 2000, 0x007f7f).setIntensity(1).setZ(100);

        // A spotlight
        const light = this.lights.addConeLight(400, -200, 1200, 0xffffff, 2, Math.PI / 2, 0.4, 0.8);
        this.spotlight = light;
    }

    update (time, delta)
    {
        const orb = this.orb;
        const spotlight = this.spotlight;

        orb.x = 400 + 500 * Math.sin(time / 2000);
        orb.rotation = time / 678;

        // Compute relative angle to orb.
        const rel = Phaser.Math.Angle.Between(spotlight.x, spotlight.y, orb.x, orb.y);
        const prox = Math.abs(Math.PI / 2 - rel);
        const aim = Math.max(0, 1 - prox * 1.5);

        // Aim at orb, if the relative angle is close.
        spotlight.setConeRotation(Phaser.Math.Linear(Math.PI / 2, rel, aim));
        const tight = Phaser.Math.Linear(0.4, 0.2, aim);
        spotlight.setConeAngles(tight, tight * 2);

        // Tint the spotlight by alert level.
        const tint = Phaser.Display.Color.Interpolate.RGBWithRGB(255, 255, 255, 255, 0, 0, 1, aim).color;
        spotlight.setColor(tint);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: Example
};

const game = new Phaser.Game(config);
