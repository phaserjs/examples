class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('spark0', 'assets/particles/blue.png');
        this.load.image('spark1', 'assets/particles/red.png');
        this.load.image('logo', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        const p0 = new Phaser.Math.Vector2(200, 500);
        const p1 = new Phaser.Math.Vector2(200, 200);
        const p2 = new Phaser.Math.Vector2(600, 200);
        const p3 = new Phaser.Math.Vector2(600, 500);

        const curve = new Phaser.Curves.CubicBezier(p0, p1, p2, p3);

        const max = 28;
        const points = [];
        const tangents = [];

        for (let c = 0; c <= max; c++)
        {
            const t = curve.getUtoTmapping(c / max);

            points.push(curve.getPoint(t));
            tangents.push(curve.getTangent(t));
        }

        const tempVec = new Phaser.Math.Vector2();

        const spark0 = this.add.particles('spark0');
        const spark1 = this.add.particles('spark1');

        for (let i = 0; i < points.length; i++)
        {
            const p = points[i];

            tempVec.copy(tangents[i]).normalizeRightHand().scale(-32).add(p);

            const angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.BetweenPoints(p, tempVec));

            const particles = (i % 2 === 0) ? spark0 : spark1;

            particles.createEmitter({
                x: tempVec.x,
                y: tempVec.y,
                angle: angle,
                speed: { min: -100, max: 500 },
                gravityY: 200,
                scale: { start: 0.4, end: 0.1 },
                lifespan: 800,
                blendMode: 'SCREEN'
            });
        }

        this.add.image(400, 400, 'logo');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
