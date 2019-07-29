var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 1200,
    backgroundColor: '#cdcdcd',
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpinePlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/spine/stretchyman/');

    this.load.spine('stretchyman', 'stretchyman-pro.json', [ 'stretchyman-pma.atlas' ], true);
}

function create ()
{
    this.spine.setDebugBones(true);
    this.spine.setDebugRegionAttachments(false);
    this.spine.setDebugBoundingBoxes(false);
    this.spine.setDebugMeshHull(false);
    this.spine.setDebugMeshTriangles(false);
    this.spine.setDebugPaths(false);
    this.spine.setDebugSkeletonXY(false);
    this.spine.setDebugClipping(false);

    // var controlBones = [];

    var man = this.add.spine(400, 900, 'stretchyman');

    // man.drawDebug = true;

    this.input.once('pointerdown', () => {

    controlBones = man.getBoneList();

    var temp = this.spine.getVector3(0, 0, 0);
    var coords = this.spine.getVector3(0, 0, 0);

    var skeletonX = man.skeleton.x;
    var skeletonY = man.skeleton.y;

    for (var i = 0; i < controlBones.length; i++)
    {
        var bone = man.findBone(controlBones[i]);

        if (bone.parent === null)
        {
            continue;
        }

        console.log(bone.data.name, bone.x, bone.y, 'world', bone.worldX, bone.worldY);

        var control = this.add.circle(bone.worldX, 1200 - (bone.worldY), 4, 0xff00ff).setData('bone', bone);

        control.setInteractive();

        this.input.setDraggable(control);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

            coords.set(man.x + dragX, dragY - man.y, 0);

            this.spine.sceneRenderer.camera.screenToWorld(coords, 1024, 1200);

            // console.log(dragX, coords.x, dragY, coords.y, (man.y - dragY));
            // console.log(dragY, coords.y);

            var bone = gameObject.getData('bone');

            if (bone.parent !== null)
            {
                bone.parent.worldToLocal(temp.set(coords.x - man.x, coords.y - man.y, 0));
                bone.x = temp.x;
                bone.y = temp.y;
                bone.update();
                // console.log('a', temp.x, temp.y);
            }
            else
            {
                bone.x = coords.x - man.x;
                bone.y = coords.y - man.y;
                bone.update();
                // console.log('b', coords.x, coords.y);
            }

        }, this);
    }


    });


}
