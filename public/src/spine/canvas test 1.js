var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: {
        preload: preload,
        create: create,
        update: update,
        render: render,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpinePlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var skeleton;
var bounds;
var state;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/animations/spine/');

    this.load.spine('boy', 'spineboy.json', 'spineboy.atlas');
}

function create ()
{
    // this.spine.skeletonRenderer.debugRendering = true;
    // this.spine.skeletonRenderer.triangleRendering = true;

    skeleton = this.spine.createSkeleton('boy');

    bounds = this.spine.getBounds(skeleton);

    state = this.spine.createAnimationState(skeleton, 'run');

    this.sys.events.on('render', render, this);
}

function update (time, delta)
{
    state.update(delta / 1000);

    state.apply(skeleton);
}

function render ()
{
    var canvas = this.sys.canvas;
    var context = this.sys.context;

    //  ALl needs moving to Spine Game Object
    var centerX = bounds.offset.x + bounds.size.x / 2;
    var centerY = bounds.offset.y + bounds.size.y / 2;
    var scaleX = bounds.size.x / canvas.width;
    var scaleY = bounds.size.y / canvas.height;
    var scale = Math.max(scaleX, scaleY) * 1.2;
    if (scale < 1) scale = 1;
    var width = canvas.width * scale;
    var height = canvas.height * scale;

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(1 / scale, 1 / scale);
    context.translate(-centerX, -centerY);
    context.translate(width / 2, height / 2);

    skeleton.updateWorldTransform();

    this.spine.skeletonRenderer.draw(skeleton);

    context.restore();
}
