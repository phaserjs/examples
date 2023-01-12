class Example extends Phaser.Scene
{
    emitters = [];
    max = 16;

    preload ()
    {
        this.load.image('spark0', 'assets/particles/blue.png');
        this.load.image('spark1', 'assets/particles/yellow.png');
        this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
    }

    create ()
    {
        const tempVec = new Phaser.Math.Vector2();

        const startPoint = new Phaser.Math.Vector2(50, 260);
        const controlPoint1 = new Phaser.Math.Vector2(610, 25);
        const controlPoint2 = new Phaser.Math.Vector2(320, 370);
        const endPoint = new Phaser.Math.Vector2(735, 550);

        const curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);

        const spark0 = this.add.particles('spark0');
        const spark1 = this.add.particles('spark1');

        for (let c = 0; c <= this.max; c++)
        {
            const t = curve.getUtoTmapping(c / this.max);
            const p = curve.getPoint(t);
            const tangent = curve.getTangent(t);

            tempVec.copy(tangent).normalizeRightHand().scale(32).add(p);

            // tempVec.copy(tangent).scale(-32).add(p);

            const angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.BetweenPoints(p, tempVec));

            const particles = (c % 2 === 0) ? spark0 : spark1;

            this.emitters.push(particles.createEmitter({
                x: p.x,
                y: p.y,
                angle: angle,
                speed: { min: 100, max: -500 },
                gravityY: 400,
                scale: { start: 0.2, end: 0.0 },
                lifespan: 1000,
                blendMode: 'ADD'
            }));
        }

        const point0 = this.add.image(startPoint.x, startPoint.y, 'dragcircle', 1).setInteractive();
        const point1 = this.add.image(endPoint.x, endPoint.y, 'dragcircle', 1).setInteractive();
        const point2 = this.add.image(controlPoint1.x, controlPoint1.y, 'dragcircle', 2).setInteractive();
        const point3 = this.add.image(controlPoint2.x, controlPoint2.y, 'dragcircle', 2).setInteractive();

        point0.setData('vector', startPoint);
        point1.setData('vector', endPoint);
        point2.setData('vector', controlPoint1);
        point3.setData('vector', controlPoint2);

        point0.setData('isControl', false);
        point1.setData('isControl', false);
        point2.setData('isControl', true);
        point3.setData('isControl', true);

        this.input.setDraggable([ point0, point1, point2, point3 ]);

        this.input.on('dragstart', (pointer, gameObject) =>
        {

            gameObject.setFrame(1);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

            gameObject.getData('vector').set(dragX, dragY);

            for (let c = 0; c <= this.max; c++)
            {
                const t = curve.getUtoTmapping(c / this.max);
                const p = curve.getPoint(t);
                const tangent = curve.getTangent(t);

                this.emitters[c].setPosition(p.x, p.y);

                // tempVec.copy(tangent).scale(-32).add(p);
                tempVec.copy(tangent).normalizeRightHand().scale(32).add(p);

                const angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.BetweenPoints(p, tempVec));

                this.emitters[c].setAngle(angle);
            }

        });

        this.input.on('dragEnd', (pointer, gameObject) =>
        {

            if (gameObject.getData('isControl'))
            {
                gameObject.setFrame(2);
            }
            else
            {
                gameObject.setFrame(1);
            }

        });
    }

    update ()
    {
        this.emitters.forEach(emitter =>
        {
            emitter.emitParticle();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#080808',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
