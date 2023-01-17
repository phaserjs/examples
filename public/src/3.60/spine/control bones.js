class Example extends Phaser.Scene
{
    constructor ()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/3.8.95/SpinePluginDebug.js', sceneKey: 'spine' }
                ]
            }
        });
    }

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser.png');

        this.load.setPath('assets/spine/3.8/stretchyman/');

        this.load.spine('stretchyman', 'stretchyman-stretchy-ik-pro.json', [ 'stretchyman-stretchy-ik-pro.atlas' ], true);
    }

    create ()
    {
        this.add.image(0, 0, 'logo').setOrigin(0);

        const man = this.add.spine(400, 550, 'stretchyman').setScale(0.8).refresh();

        // man.drawDebug = true;

        const controlBones = [ 'back-arm-ik-target', 'hip', 'back-leg-ik-target', 'belly', 'butt' ];

        for (let i = 0; i < controlBones.length; i++)
        {
            const bone = man.findBone(controlBones[i]);

            console.log(bone.data.name, bone.worldX, bone.worldY);

            const control = this.add.circle(bone.worldX, 600 - (bone.worldY), 4, 0xff00ff).setData('bone', bone);

            control.setInteractive();

            this.input.setDraggable(control);

            this.input.on('drag', function (pointer, gameObject, dragX, dragY)
            {

                gameObject.x = dragX;
                gameObject.y = dragY;

                const bone = gameObject.getData('bone');

                console.log(bone.data.name);

                const coords = this.spine.worldToLocal(dragX, dragY, man.skeleton, bone);

                bone.x = coords.x;
                bone.y = coords.y;

                bone.update();

            }, this);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    scene: Example
};

const game = new Phaser.Game(config);
