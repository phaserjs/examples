class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }

    create ()
    {
        const image1 = this.add.image(100, 80, 'fish', 0);
        const image2 = this.add.image(100, 180, 'fish', 1);
        const image3 = this.add.image(100, 280, 'fish', 2);
        const image4 = this.add.image(100, 380, 'fish', 1);
        const image5 = this.add.image(100, 480, 'fish', 0);

        const tween = this.tweens.add({
            targets: [ image1, image2, image3, image4, image5 ],
            x: 700,
            duration: 4000,
            ease: 'Sine.easeInOut',
            flipX: true,
            yoyo: true,
            repeat: -1,
            delay: function (target, key, value, targetIndex)
            {
                return targetIndex * 1000;
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    clearBeforeRender: false,
    preserveDrawingBuffer: true,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
