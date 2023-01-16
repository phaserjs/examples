class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('bubbles', 'assets/particles/bubbles.png', 'assets/particles/bubbles.json');
    }

    create ()
    {
        this.emitter = this.add.particles(100, 30, 'bubbles', {
            frame: [ 'bluebubble', 'redbubble', 'greenbubble', 'silverbubble' ],
            scale: { min: 0.25, max: 1 },
            rotate: { start: 0, end: 360 },
            speed: { min: 50, max: 100 },
            lifespan: 6000,
            frequency: 50,
            gravityY: 90
        });

        this.tweens.add({
            targets: this.emitter,
            particleX: 700,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inout',
            duration: 1500
        });

        this.rect = new Phaser.Geom.Rectangle(400, 500, 64, 64);

        this.input.on('pointermove', pointer => {

            Phaser.Geom.Rectangle.CenterOn(this.rect, pointer.worldX, pointer.worldY);

        });

        this.graphics = this.add.graphics();
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeRectShape(this.rect);

        const particles = this.emitter.overlap(this.rect);

        particles.forEach(particle => {
            particle.kill();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
