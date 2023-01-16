class Example extends Phaser.Scene
{
    create ()
    {
        this.matter.world.setBounds().disableGravity();

        const arrow = '40 0 40 20 100 20 100 80 40 80 40 100 0 50';
        const chevron = '100 0 75 50 100 100 25 100 0 50 25 0';
        const star = '50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38';

        const poly1 = this.add.polygon(400, 300, arrow, 0x0000ff, 0.2);

        this.matter.add.gameObject(poly1, { shape: { type: 'fromVerts', verts: arrow, flagInternal: true } });

        poly1.setVelocity(6, 3);
        poly1.setAngularVelocity(0.01);
        poly1.setBounce(1);
        poly1.setFriction(0, 0, 0);

        const poly2 = this.add.polygon(400, 100, chevron, 0xff0000, 0.2);

        this.matter.add.gameObject(poly2, { shape: { type: 'fromVerts', verts: chevron, flagInternal: true } });

        poly2.setVelocity(6, 3);
        poly2.setAngularVelocity(0.01);
        poly2.setBounce(1);
        poly2.setFriction(0, 0, 0);

        const poly3 = this.add.polygon(600, 400, star, 0x00ff00, 0.2);

        this.matter.add.gameObject(poly3, { shape: { type: 'fromVerts', verts: star, flagInternal: true } });

        poly3.setVelocity(4, -2);
        poly3.setBounce(1);
        poly3.setFriction(0, 0, 0);
        poly3.setFrictionAir(0.005);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: false,
                showInternalEdges: true,
                showConvexHulls: true
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
