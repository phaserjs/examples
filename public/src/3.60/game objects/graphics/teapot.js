class Example extends Phaser.Scene {
    graphics;

    t = {
        x: -0.03490658503988659,
        y: 0.05235987755982989,
        z: -0.05235987755982989
    };

    models = [];
    model;
    i = 0;

    preload ()
    {
        this.load.text('teapot', 'assets/text/teapot.obj');
        this.load.script('TweenMax', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js');
    }

    create ()
    {
        this.graphics = this.add.graphics();

        this.models.push(this.parseObj(this.cache.text.get('teapot')));

        this.model = this.models[0];

        console.dir(this.model);

        this.rotateZ3D(0.5235987755982988);
        this.rotateY3D(0.5235987755982988);
        this.rotateX3D(0.5235987755982988);

        TweenMax.to(this.t, 20, {
            x: 0.03490658503988659,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
        });

        TweenMax.to(this.t, 30, {
            y: -0.05235987755982989,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
        });

        TweenMax.to(this.t, 15, {
            z: 0.05235987755982989,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
        });
    }

    update ()
    {
        this.rotateX3D(this.t.x);
        this.rotateY3D(this.t.y);
        this.rotateZ3D(this.t.z);

        this.draw();
    }

    draw ()
    {
        const centerX = 400;
        const centerY = 300;
        const scale = 90;

        this.graphics.clear();

        this.graphics.lineStyle(2, 0x00ff00, 1.0);

        this.graphics.beginPath();

        for (let i = 0; i < this.model.faces.length; i++)
        {
            const face = this.model.faces[i];

            const v0 = this.model.verts[face[0] - 1];
            const v1 = this.model.verts[face[1] - 1];
            const v2 = this.model.verts[face[2] - 1];

            if (v0 && v1 && v2 && this.isCcw(v0, v1, v2))
            {
                this.drawLine(centerX + v0.x * scale, centerY - v0.y * scale, centerX + v1.x * scale, centerY - v1.y * scale);
                this.drawLine(centerX + v1.x * scale, centerY - v1.y * scale, centerX + v2.x * scale, centerY - v2.y * scale);
                this.drawLine(centerX + v2.x * scale, centerY - v2.y * scale, centerX + v0.x * scale, centerY - v0.y * scale);
            }
        }

        this.graphics.closePath();
        this.graphics.strokePath();
    }

    drawLine (x0, y0, x1, y1)
    {
        this.graphics.moveTo(x0, y0);
        this.graphics.lineTo(x1, y1);
    }

    isCcw (v0, v1, v2)
    {
        return (v1.x - v0.x) * (v2.y - v0.y) - (v1.y - v0.y) * (v2.x - v0.x) >= 0;
    }

    // Helpers functions
    rotateX3D (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);

        for (let n = 0; n < this.model.verts.length; n++)
        {
            const vert = this.model.verts[n];
            const y = vert.y;
            const z = vert.z;

            vert.y = y * tc - z * ts;
            vert.z = z * tc + y * ts;
        }
    }

    rotateY3D (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);

        for (let n = 0; n < this.model.verts.length; n++)
        {
            const vert = this.model.verts[n];
            const x = vert.x;
            const z = vert.z;

            vert.x = x * tc - z * ts;
            vert.z = z * tc + x * ts;
        }
    }

    rotateZ3D (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);

        for (let n = 0; n < this.model.verts.length; n++)
        {
            const vert = this.model.verts[n];
            const x = vert.x;
            const y = vert.y;

            vert.x = x * tc - y * ts;
            vert.y = y * tc + x * ts;
        }
    }

    parseObj (text)
    {
        const verts = [];
        const faces = [];

        // split the text into lines
        const lines = text.replace('\r', '').split('\n');
        const count = lines.length;

        for (let i = 0; i < count; i++)
        {
            const line = lines[i];

            if (line[0] === 'v')
            {
                // lines that start with 'v' are vertices
                const tokens = line.split(' ');
                verts.push({
                    x: parseFloat(tokens[1]),
                    y: parseFloat(tokens[2]),
                    z: parseFloat(tokens[3])
                });
            }
            else if (line[0] === 'f')
            {
                // lines that start with 'f' are faces
                const tokens = line.split(' ');

                const face = [
                    parseInt(tokens[1], 10),
                    parseInt(tokens[2], 10),
                    parseInt(tokens[3], 10)
                ];

                faces.push(face);

                if (face[0] < 0)
                {
                    face[0] = verts.length + face[0];
                }

                if (face[1] < 0)
                {
                    face[1] = verts.length + face[1];
                }

                if (face[2] < 0)
                {
                    face[2] = verts.length + face[2];
                }
            }
        }

        return {
            verts: verts,
            faces: faces
        };
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
