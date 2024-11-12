

const node0 = [-100, -100, -100];
const node1 = [-100, -100,  100];
const node2 = [-100,  100, -100];
const node3 = [-100,  100,  100];
const node4 = [ 100, -100, -100];
const node5 = [ 100, -100,  100];
const node6 = [ 100,  100, -100];
const node7 = [ 100,  100,  100];
const nodes = [node0, node1, node2, node3, node4, node5, node6, node7];

const edge0  = [0, 1];
const edge1  = [1, 3];
const edge2  = [3, 2];
const edge3  = [2, 0];
const edge4  = [4, 5];
const edge5  = [5, 7];
const edge6  = [7, 6];
const edge7  = [6, 4];
const edge8  = [0, 4];
const edge9  = [1, 5];
const edge10 = [2, 6];
const edge11 = [3, 7];
const edges = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];

const t = {
    x: -0.03490658503988659,
    y: 0.05235987755982989,
    z: -0.05235987755982989
};


class Example extends Phaser.Scene
{
    graphics;
    create ()
    {
        this.graphics = this.add.graphics({x: 400, y: 300});

        this.rotateZ3D(0.5235987755982988);
        this.rotateY3D(0.5235987755982988);
        this.rotateX3D(0.5235987755982988);

        this.tweens.add({
            targets: [t],
            duration: 6000,
            x: 0.03490658503988659,
            ease: Phaser.Math.Easing.Sine.InOut,
            yoyo: true,
            repeat: -1,
        });

        this.tweens.add({
            targets: [t],
            duration: 4000,
            y: -0.05235987755982989,
            ease: Phaser.Math.Easing.Sine.InOut,
            yoyo: true,
            repeat: -1,
        });

        this.tweens.add({
            targets: [t],
            duration: 4000,
            z: 0.05235987755982989,
            ease: Phaser.Math.Easing.Sine.InOut,
            yoyo: true,
            repeat: -1,
        });
    }

    update ()
    {
        this.rotateX3D(t.x);
        this.rotateY3D(t.y);
        this.rotateZ3D(t.z);

        this.graphics.clear();

        this.graphics.lineStyle(2, 0x00ff00, 1.0);

        this.graphics.beginPath();

        for (let e = 0; e < edges.length; e++)
        {
            const n0 = edges[e][0];
            const n1 = edges[e][1];
            const node0 = nodes[n0];
            const node1 = nodes[n1];

            this.graphics.moveTo(node0[0], node0[1]);
            this.graphics.lineTo(node1[0], node1[1]);
        }

        this.graphics.closePath();
        this.graphics.strokePath();
    }

    rotateZ3D (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);

        for (let n = 0; n < nodes.length; n++)
        {
            const node = nodes[n];
            const x = node[0];
            const y = node[1];

            node[0] = x * tc - y * ts;
            node[1] = y * tc + x * ts;
        }
    }

    rotateY3D (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);

        for (let n = 0; n < nodes.length; n++)
        {
            const node = nodes[n];
            const x = node[0];
            const z = node[2];

            node[0] = x * tc - z * ts;
            node[2] = z * tc + x * ts;
        }
    }

    rotateX3D (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);

        for (let n = 0; n < nodes.length; n++)
        {
            const node = nodes[n];
            const y = node[1];
            const z = node[2];

            node[1] = y * tc - z * ts;
            node[2] = z * tc + y * ts;
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);


