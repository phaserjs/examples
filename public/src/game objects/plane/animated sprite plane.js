class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient22.png');
        this.load.audio('grapevine', 'assets/audio/raisins.m4a');
        this.load.atlas('raisins', 'assets/animations/california-raisins.png', 'assets/animations/california-raisins.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.anims.create({
            key: 'sing',
            frames: this.anims.generateFrameNames('raisins', { start: 0, end: 10, prefix: 'frame_', zeroPad: 2 }),
            frameRate: 10,
            repeat: -1
        });

        const plane = this.add.plane(400, 300, 'raisins', null, 2, 2, true);

        const text = this.add.text(10, 10);

        this.sound.play('grapevine', { loop: true });

        if (this.sound.locked)
        {
            text.setText('Click to Start');

            this.sound.once('unlocked', () => {

                plane.play('sing');
                text.setText('Click / Drag to rotate. Wheel to zoom.');

            });
        }
        else
        {
            plane.play('sing');
            text.setText('Click / Drag to rotate. Wheel to zoom.');
        }

        plane.modelRotation.y = -0.8;
        plane.viewPosition.z = 3;

        const rotateRate = 1;
        const panRate = 1;
        const zoomRate = 4;

        this.input.on('pointermove', pointer => {

            if (!pointer.isDown)
            {
                return;
            }

            if (!pointer.event.shiftKey)
            {
                plane.modelRotation.y += pointer.velocity.x * (rotateRate / 800);
                plane.modelRotation.x += pointer.velocity.y * (rotateRate / 600);
            }
            else
            {
                plane.panX(pointer.velocity.x * (panRate / 800));
                plane.panY(pointer.velocity.y * (panRate / 600));
            }

        });

        this.input.on('wheel', (pointer, over, deltaX, deltaY, deltaZ) => {

            plane.panZ(deltaY * (zoomRate / 600));

        });
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

let game = new Phaser.Game(config);
