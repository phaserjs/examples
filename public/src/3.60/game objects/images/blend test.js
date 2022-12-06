class Example extends Phaser.Scene
{
    image1;
    image0;
    t = 0;

    preload ()
    {
        this.load.image('p0', 'assets/particles/red.png');
        this.load.image('p1', 'assets/particles/yellow.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        const bunny = this.add.image(400, 300, 'bunny');
        this.image0 = this.add.image(400 - 15, 300, 'p0');
        this.image1 = this.add.image(400 + 15, 300, 'p1');
        this.image0.blendMode = 'ADD';
        this.image1.blendMode = 'ADD';
    }

    update ()
    {
        this.image0.y = this.image1.y = 300 + Math.sin(this.t) * 100;
        this.t += 0.01;
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
