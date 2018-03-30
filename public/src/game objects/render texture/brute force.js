var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

var rt;
var matrixTexture;
var t;

function preload()
{
    this.load.baseURL = "https://cdn.rawgit.com/samid737/samid737.github.io/eca38c92/409/";
    this.load.crossOrigin = 'anonymous';
    this.load.spritesheet('matrix', '/assets/sprites/font.png', { frameWidth: 110, frameHeight: 125, endFrame: 23 });
}

function create()
{
    matrixTexture = this.textures.get('matrix');

    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);
}

function update()
{
    for (i = 0; i < 20; i++)
    {
        draw();
    }

    t = this.time.now / 100000;

    this.cameras.main.shake(500, t / 100);
    this.cameras.main.setZoom(1 + t);
}

function draw()
{
    rt.save();

    rt.globalAlpha = Math.random();
    rt.globalTint = (0x00ffff * (Math.random() * 0.1 + 0.9));

    var frame = matrixTexture.frames[Math.floor(Math.random() * 10)];

    var rand = Math.random() + 0.1;

    rt.currentMatrix = [rand, 0, 0, rand, Math.random() * 800, Math.random() * 600];

    rt.draw(matrixTexture, frame, -matrixTexture.frames[0].halfWidth, -matrixTexture.frames[0].halfHeight);
    rt.restore();
}