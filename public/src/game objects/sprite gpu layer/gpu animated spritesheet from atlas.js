class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = 'assets/atlas/trimsheet/';
        this.load.atlas('testanims', 'trimsheet.png', 'trimsheet.json');
    }

    create ()
    {
        const count = 1024 * 4; // Try a million!
        const b2 = this.textures.addSpriteSheetFromAtlas(
            'bubble2',
            {
                atlas: 'testanims',
                frame: 'bubble',
                frameWidth: 34,
                frameHeight: 68
            }
        );
        const config4 = {
            key: 'bobble2',
            frames: this.anims.generateFrameNumbers('bubble2', { start: 0, end: 6 }),
            frameRate: 10
        };
        const bobble2Anim = this.anims.create(config4);

        const layer = this.add.spriteGPULayer('testanims', count);

        layer.setAnimations([bobble2Anim]);

        console.log(layer);

        const template = {
            animation: {
                base: 'bobble2',
                duration: 500,
                delay: 0
            },
            x: {
                base: -100,
                ease: 'Linear',
                amplitude: 1100,
                duration: 15000,
                yoyo: false
            }
        };

        for (let i = 0; i < count; i++)
        {
            template.animation.delay = Math.random() * 500;
            template.x.duration = (Math.random() * 10000 + 10000) / ((count + i) / (count * 2));
            template.x.delay = Math.random() * 30000;
            template.y = 50 + 550 * i / count;
            template.scaleX = (count + i) / (count * 2);
            template.scaleY = template.scaleX;

            layer.addMember(template);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    backgroundColor: '#808080'
};

const game = new Phaser.Game(config);
