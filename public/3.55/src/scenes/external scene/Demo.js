class Demo extends Phaser.Scene
{
    eye;

    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.eye = this.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), 'eye');
    }

    update ()
    {
        this.eye.rotation += 0.02;
    }
}
