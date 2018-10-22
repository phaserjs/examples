var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        render: render
    }
};

var lastFrameTime = Date.now() / 1000;
var skeleton;
var bounds;
var spine;
var state;
var skelName = 'spineboy-ess';
var animName = 'walk';

var game = new Phaser.Game(config);

function preload ()
{
    this.load.plugin('SpinePlugin', 'plugins/SpinePlugin.js', true, 'spine');

    this.load.json('spineboy', 'assets/animations/spine/spineboy-ess.json');
    this.load.text('spineboyAtlas', 'assets/animations/spine/spineboy.atlas');
    this.load.image('spineboy', 'assets/animations/spine/spineboy.png');
}

function create ()
{
    spine = this.plugins.get('SpinePlugin');

    // spine.skeletonRenderer.debugRendering = true;
    // spine.skeletonRenderer.triangleRendering = true;

    skeleton = spine.createSkeleton('spineboy', 'spineboyAtlas', 'spineboy');

    console.log(skeleton);

    bounds = spine.getBounds(skeleton);

    console.log(bounds);

    state = spine.createAnimationState(skeleton, animName);

    this.sys.events.on('render', render, this);
}

function render ()
{
    var now = Date.now() / 1000;
    var delta = now - lastFrameTime;
    lastFrameTime = now;

    var canvas = this.sys.canvas;
    var context = this.sys.context;

    // magic
    var centerX = bounds.offset.x + bounds.size.x / 2;
    var centerY = bounds.offset.y + bounds.size.y / 2;
    var scaleX = bounds.size.x / canvas.width;
    var scaleY = bounds.size.y / canvas.height;
    var scale = Math.max(scaleX, scaleY) * 1.2;
    if (scale < 1) scale = 1;
    var width = canvas.width * scale;
    var height = canvas.height * scale;

    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#cccccc";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(1 / scale, 1 / scale);
    context.translate(-centerX, -centerY);
    context.translate(width / 2, height / 2);

    // context.save();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // context.fillStyle = "#cccccc";
    // context.fillRect(0, 0, canvas.width, canvas.height);
    // context.restore();

    state.update(delta);

    state.apply(skeleton);

    skeleton.updateWorldTransform();

    spine.skeletonRenderer.draw(skeleton);

    // context.strokeStyle = "green";
    // context.beginPath();
    // context.moveTo(-1000, 0);
    // context.lineTo(1000, 0);
    // context.moveTo(0, -1000);
    // context.lineTo(0, 1000);
    // context.stroke();
}
