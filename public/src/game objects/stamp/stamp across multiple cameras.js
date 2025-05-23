class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('cave', 'assets/sprites/cave.png');
        this.load.image('nebula', 'assets/skies/nebula.jpg');
    }

    create ()
    {
        this.image = this.add.image(200, 150, 'nebula');

        this.cameras.main.setSize(400, 300);

        this.camera1 = this.cameras.add(400, 0, 400, 300);
        this.camera2 = this.cameras.add(0, 300, 400, 300);
        this.camera3 = this.cameras.add(400, 300, 400, 300).setAlpha(0.5);

        // Create Stamp in the middle of the screen.
        this.stamp = this.add.stamp(400, 300, 'cave');

        // Remove Stamp from a camera.
        this.cameras.main.ignore(this.stamp);
    }

    update ()
    {
        this.image.rotation += 0.01;
        this.stamp.rotation -= 0.007;
        this.camera1.scrollX = Math.sin(this.image.rotation) * 200;
        this.camera2.rotation = Math.cos(this.image.rotation);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
