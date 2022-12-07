class Example extends Phaser.Scene
{
    particles;
    fpsText;

    preload ()
    {
        this.load.image('fire', 'assets/particles/muzzleflash3.png');
    }

    create ()
    {
        this.fpsText = this.add.text(10, 10, 'FPS: -- \n-- Particles', {
            font: 'bold 26px Arial',
            fill: '#ffffff'
        });

        this.particles = this.add.particles('fire');

        this.particles.createEmitter({
            alpha: { start: 1, end: 0 },
            scale: { start: 0.5, end: 2.5 },

            // tint: { start: 0xff945e, end: 0xff945e },
            speed: 20,
            accelerationY: -300,
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 1000, max: 1100 },
            blendMode: 'ADD',
            frequency: 110,
            maxParticles: 10,
            x: 400,
            y: 300
        });
    }

    update (time, delta)
    {
        this.fpsText.setText(`FPS: ${(1000 / delta).toFixed(3)}\n${this.particles.emitters.first.alive.length} Particles`);
    }
}

/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 */

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
