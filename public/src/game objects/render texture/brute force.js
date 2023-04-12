class Example extends Phaser.Scene
{
    t;
    rnd;
    rt;

    preload ()
    {
        this.load.baseURL = 'https://cdn.rawgit.com/samid737/samid737.github.io/eca38c92/409/';
        this.load.crossOrigin = 'anonymous';
        this.load.spritesheet('matrix', '/assets/sprites/font.png', { frameWidth: 110, frameHeight: 125, endFrame: 23 });
    }

    create ()
    {
        this.rt = this.make.renderTexture({ x: 400, y: 300, width: 800, height: 600 });

        this.rnd = Math.random;
    }

    update ()
    {
        for (let i = 0; i < 20; i++)
        {
            this.draw();
        }

        this.t = this.time.now / 100000;

        this.cameras.main.shake(500, this.t / 100);
        this.cameras.main.setZoom(1 + this.t);
    }

    draw ()
    {
        const alpha = this.rnd();
        const tint = (0x00ffff * (this.rnd() * 0.1 + 0.8));
        const frame = ~~(this.rnd() * 22);

        this.rt.drawFrame('matrix', frame, this.rnd() * 800, this.rnd() * 600, alpha, tint);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
