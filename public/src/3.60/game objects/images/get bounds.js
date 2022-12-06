class Example extends Phaser.Scene
{
    rect;
    bottomRight;
    bottomLeft;
    topRight;
    topLeft;
    image;

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
        this.load.image('ball', 'assets/sprites/blue_ball.png');
    }

    create ()
    {
        this.image = this.add.image(400, 300, 'einstein');
        this.topLeft = this.add.image(400,300, 'ball');
        this.topRight = this.add.image(400,300, 'ball');
        this.bottomLeft = this.add.image(400,300, 'ball');
        this.bottomRight = this.add.image(400,300, 'ball');

        this.image.setScale(0.5,0.5);

        this.rect = this.image.getBounds();

        this.topLeft.setPosition(this.rect.x,this.rect.y);
        this.topRight.setPosition(this.rect.x + this.rect.width, this.rect.y);
        this.bottomLeft.setPosition(this.rect.x, this.rect.y + this.rect.height);
        this.bottomRight.setPosition(this.rect.x + this.rect.width, this.rect.y + this.rect.height);

    }

    update ()
    {
        this.image.rotation += 0.01;

        this.rect = this.image.getBounds();

        this.topLeft.setPosition(this.rect.x,this.rect.y);
        this.topRight.setPosition(this.rect.x + this.rect.width,this.rect.y);
        this.bottomLeft.setPosition(this.rect.x,this.rect.y + this.rect.height);
        this.bottomRight.setPosition(this.rect.x + this.rect.width,this.rect.y + this.rect.height);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

// var line;
const game = new Phaser.Game(config);
