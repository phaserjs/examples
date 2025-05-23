// Test whether transforming a Container matches the expected transforms.
class Example extends Phaser.Scene {
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const bg = this.add.image(0, 0, 'block').setOrigin(0).setScale(10).setTint(0x404040);

        // Create a set of game objects.
        const sprite1 = this.add.sprite(0, 0, 'block');
        const blitter1 = this.add.blitter(0, 0, 'block');
        blitter1.create(100, 0);
        const rect1 = this.add.rectangle(200, 0, 128, 128, 0xffffff);

        this.tweens.add({
            targets: sprite1,
            rotation: 1,
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: sprite1,
            scale: 1.5,
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        // Create a set of game objects and add them to a Container.
        const sprite2 = this.add.sprite(0, 0, 'block');
        const blitter2 = this.add.blitter(0, 0, 'block');
        blitter2.create(100, 0);
        const rect2 = this.add.rectangle(200, 0, 128, 128, 0xffffff);
        const container = this.add.container(200, 200, [sprite2, blitter2, rect2]);

        this.tweens.add({
            targets: container,
            rotation: 1,
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: container,
            scale: 1.5,
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        // Create a set of game objects and nest them inside several Containers.
        const sprite3 = this.add.sprite(0, 0, 'block');
        const blitter3 = this.add.blitter(0, 0, 'block');
        blitter3.create(100, 0);
        const rect3 = this.add.rectangle(200, 0, 128, 128, 0xffffff);
        const container1 = this.add.container(200, 200, [sprite3, blitter3, rect3]);
        const container2 = this.add.container(200, 200, [container1]);
        const container3 = this.add.container(200, 200, [container2]);

        this.tweens.add({
            targets: [container3, container2, container1],
            rotation: 1,
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: [container3, container2, container1],
            scale: 1.5,
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        // Transform the camera, to ensure no transform issues are sneaking in.
        this.cameras.main.setZoom(0.5).setScroll(-100, -100).setRotation(1);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
