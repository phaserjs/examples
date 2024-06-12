class ParticlesSquare extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flare', 'assets/particles/white-flare.png');
    }

    create ()
    {
        let particles = this.add.particles(300, 300, "flare", {
            lifespan: 1500,
            alpha: { start: 0, end: 1 },
            scale: 0.2,
            quantity: 20,
            emitting: false,
        })

        // emit zone position is in local emitter space (as expected)
        let emitZone = new Phaser.Geom.Circle(0, 0, 300)
        particles.addEmitZone({
            source: emitZone,
            type: "random",
            quantity: -1,
        })

        // deathZone position is in global space
        let deathZone = new Phaser.Geom.Circle(0, 0, 200)
        // you need to manually calculate the offset to put it in the right place
        // let deathZone = new Phaser.Geom.Circle(particles.x, particles.y, 100)
        particles.addDeathZone({
            source: deathZone,
            type: "onEnter",
        })

        particles.start(1500)

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
