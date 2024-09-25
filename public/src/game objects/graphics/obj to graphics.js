const worldMatrix = new Phaser.Math.Matrix4();
const transMatrix = new Phaser.Math.Matrix4();
const scaleMatrix = new Phaser.Math.Matrix4();
const viewMatrix = new Phaser.Math.Matrix4();
const projectionMatrix = new Phaser.Math.Matrix4();

class Camera3D
{
    constructor ()
    {
        this.position = new Phaser.Math.Vector3();
        this.target = new Phaser.Math.Vector3();
    }
}

class Mesh3D
{
    constructor (modelData, x, y, z)
    {
        this.vertices = modelData.models[0].vertices;
        this.faces = modelData.models[0].faces;

        console.log(this.faces);
        console.log(this.vertices);

        this.position = new Phaser.Math.Vector3(x, y, z);
        this.rotation = new Phaser.Math.Vector3();
        this.scale = new Phaser.Math.Vector3(1, 1, 1);

        this.thickness = 2;
        this.color = 0x00ff00;
        this.alpha = 1;

        this.visible = true;

        this._pA = new Phaser.Math.Vector2();
        this._pB = new Phaser.Math.Vector2();
        this._pC = new Phaser.Math.Vector2();
        this._pD = new Phaser.Math.Vector2();
    }

    render (graphics, viewMatrix, projectionMatrix)
    {
        if (!this.visible || this.alpha === 0)
        {
            return;
        }

        worldMatrix.identity();
        transMatrix.identity().translate(this.position.x, this.position.y, this.position.z);
        scaleMatrix.identity().scaling(this.scale.x, this.scale.y, this.scale.z);

        worldMatrix.yawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z);
        worldMatrix.multiply(transMatrix);
        worldMatrix.multiply(scaleMatrix);

        const transformMatrix = worldMatrix.multiply(viewMatrix).multiply(projectionMatrix);

        graphics.lineStyle(this.thickness, this.color, this.alpha);
        graphics.beginPath();

        const vertices = this.vertices;

        for (let f = 0; f < this.faces.length; f++)
        {
            const face = this.faces[f];
            const verts = face.vertices;

            this.project(this._pA, vertices[verts[0].vertexIndex], transformMatrix);
            this.project(this._pB, vertices[verts[1].vertexIndex], transformMatrix);
            this.project(this._pC, vertices[verts[2].vertexIndex], transformMatrix);

            this.drawLine(graphics, this._pA, this._pB);
            this.drawLine(graphics, this._pB, this._pC);
            this.drawLine(graphics, this._pC, this._pD);

            if (verts[3])
            {
                this.project(this._pD, vertices[verts[3].vertexIndex], transformMatrix);
                this.drawLine(graphics, this._pD, this._pA);
            }

            console.log(this._pA, this._pB, this._pC, this._pD);
            debugger;
        }

        graphics.closePath();
        graphics.strokePath();
    }

    drawLine (graphics, pointA, pointB)
    {
        graphics.moveTo(pointA.x, pointA.y);
        graphics.lineTo(pointB.x, pointB.y);
    }

    project (local, coord, transMat)
    {
        // var point = BABYLON.Vector3.TransformCoordinates(coord, transMat);

        const m = transMat.val;

        var x = (coord.x * m[0]) + (coord.y * m[4]) + (coord.z * m[8]) + m[12];
        var y = (coord.x * m[1]) + (coord.y * m[5]) + (coord.z * m[9]) + m[13];
        // var z = (coord.x * transMat.m[2]) + (coord.y * transMat.m[6]) + (coord.z * transMat.m[10]) + transMat.m[14];
        // var w = (coord.x * transMat.m[3]) + (coord.y * transMat.m[7]) + (coord.z * transMat.m[11]) + transMat.m[15];

        // return new Vector3(x / w, y / w, z / w);

        local.x = x * 800 + 800 / 2.0 >> 0;
        local.y = -y * 600 + 600 / 2.0 >> 0;
    }
}

class Obj3D
{
    constructor (camera, modelData, x, y, z)
    {
        this.camera = camera;
        this.model = modelData.models[0];

        this.x = x;
        this.y = y;
        this.z = z;

        this.thickness = 2;
        this.color = 0x00ff00;
        this.alpha = 1;

        this.scale = 100;
    }

    rotateX (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);
        const verts = this.model.vertices;

        for (let n = 0; n < verts.length; n++)
        {
            const vert = verts[n];
            const y = vert.y;
            const z = vert.z;

            vert.y = y * tc - z * ts;
            vert.z = z * tc + y * ts;
        }
    }

    rotateY (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);
        const verts = this.model.vertices;

        for (let n = 0; n < verts.length; n++)
        {
            const vert = verts[n];
            const x = vert.x;
            const z = vert.z;

            vert.x = x * tc - z * ts;
            vert.z = z * tc + x * ts;
        }
    }

    rotateZ (theta)
    {
        const ts = Math.sin(theta);
        const tc = Math.cos(theta);
        const verts = this.model.vertices;

        for (let n = 0; n < verts.length; n++)
        {
            const vert = verts[n];
            const x = vert.x;
            const y = vert.y;

            vert.x = x * tc - y * ts;
            vert.y = y * tc + x * ts;
        }
    }

    render (graphics)
    {
        const model = this.model;
        const faces = model.faces;
        const vertices = model.vertices;

        const x = this.camera.x + this.x;
        const y = this.camera.y + this.y;
        const scale = this.scale;

        graphics.lineStyle(this.thickness, this.color, this.alpha);

        graphics.beginPath();

        for (let i = 0; i < faces.length; i++)
        {
            const face = faces[i];
            const verts = face.vertices;

            const v0 = vertices[verts[0].vertexIndex];
            const v1 = vertices[verts[1].vertexIndex];
            const v2 = vertices[verts[2].vertexIndex];
            const v3 = (verts[3]) ? vertices[verts[3].vertexIndex] : false;

            if (v0 && v1 && v2 && v3)
            {
                this.drawLine(graphics, x + v0.x * scale, y - v0.y * scale, x + v1.x * scale, y - v1.y * scale);
                this.drawLine(graphics, x + v1.x * scale, y - v1.y * scale, x + v2.x * scale, y - v2.y * scale);
                this.drawLine(graphics, x + v2.x * scale, y - v2.y * scale, x + v3.x * scale, y - v3.y * scale);
                this.drawLine(graphics, x + v3.x * scale, y - v3.y * scale, x + v0.x * scale, y - v0.y * scale);
            }
        }

        graphics.closePath();
        graphics.strokePath();
    }

    drawLine (graphics, x0, y0, x1, y1)
    {
        graphics.moveTo(x0, y0);
        graphics.lineTo(x1, y1);
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.obj('cube', 'assets/text/bevelledcube.obj');

        // this.load.text('logo', 'assets/text/phaser-logo-3d.obj');
        // this.load.text('bevelledcube', 'assets/text/bevelledcube.obj');
        // this.load.text('computer', 'assets/text/computer.obj');
        // this.load.text('geosphere', 'assets/text/geosphere.obj');
        // this.load.text('spike', 'assets/text/spike.obj');
        // this.load.text('torus', 'assets/text/torus.obj');
        // this.load.text('chaosphere', 'assets/text/chaosphere.obj');
        // this.load.text('implodedcube', 'assets/text/implodedcube.obj');
        // this.load.text('monobird', 'assets/text/monobird.obj');
        // this.load.text('teapot', 'assets/text/teapot.obj');
    }

    create ()
    {
        this.graphics = this.add.graphics();

        this.camera = new Camera3D();

        this.camera.position.set(0, 6, -12);
        this.camera.target.set(0, 0, 50);

        this.mesh = new Mesh3D(this.cache.obj.get('cube'), 0, 3, 0);

        // this.camera = {
        //     x: 200,
        //     y: 340
        // };

        // this.model = new Obj3D(this.camera, this.cache.obj.get('cube'), 200, 20, 50);
        // t.color = 0xff00ff;
        // t.scale = 200;
    }

    update ()
    {
        this.graphics.clear();
       
        viewMatrix.identity().lookAtRH(this.camera.position, this.camera.target, Phaser.Math.Vector3.UP);
        projectionMatrix.identity().perspectiveLH(0.8, 800 / 800, 0.01, 1.0);

        // var viewMatrix = BABYLON.Matrix.LookAtLH(this.camera.position, this.camera.target, BABYLON.Vector3.Up());
        // var projectionMatrix = BABYLON.Matrix.PerspectiveFovLH(0.8, 800 / 600, 0.01, 1.0);

        this.mesh.render(this.graphics, viewMatrix, projectionMatrix);

        // this.model.rotateX(0.01);
        // this.model.rotateY(0.03);
        // this.model.rotateZ(0.01);

        // this.model.render(this.graphics);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
