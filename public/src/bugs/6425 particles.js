class ParticlesSquare extends Phaser.Scene
{
    preload()
    {
        this.load.image("smokeTest", "assets/particles/smoke0.png");
    }

    create()
    {
        const mainCam = this.cameras.main;
        const width = 1600;
        const height = 1200;

        mainCam.setBackgroundColor("#FFFFFF");
        mainCam.setZoom(0.50);
        mainCam.centerOn(width/2,height/2)

        for (let x = 0; x < width; x +=100)
        {
            for (let y = 0; y < height; y += 200)
            {
                this.add.particles(0, 0, "smokeTest", {
                    x,
                    y,
                    lifespan: { min: 3000, max: 5000 },
                    speed: { min: 5, max: 25 },
                    angle: { min: 270 - 10, max: 270 + 10 },
                    timeScale: 0.35,
                    gravityX: -2,
                    gravityY: -5,
                    scale: {
                        start: 0.33,
                        end: 1.2,
                        ease: Phaser.Math.Easing.Cubic.In
                    },
                    rotate: { min: 0, max: 360 },
                    alpha: { start: 0.6, end: 0 },
                    quantity: 1,
                    tint: [0x000000, 0x141414, 0x292929, 0x2e2e2e],
                    frequency: 25,
                    // blendMode: Phaser.BlendModes.NORMAL,
                    // particleBringToTop: true,
                });

            }
        }

    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: ParticlesSquare
};

const game = new Phaser.Game(config);
