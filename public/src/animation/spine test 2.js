var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var lastFrameTime = Date.now() / 1000;
var skeleton, state, bounds;
var skeletonRenderer;

var skelName = 'spineboy-ess';
var animName = 'walk';

var game = new Phaser.Game(config);

function preload ()
{
    this.load.script('spine', '/phaser/plugins/spine/src/spine-canvas.js');

    this.load.json('spineboy', 'assets/animations/spine/spineboy-ess.json');
    this.load.text('spineboyAtlas', 'assets/animations/spine/spineboy.atlas');
    this.load.image('spineboy', 'assets/animations/spine/spineboy.png');
}

function create ()
{
    skeletonRenderer = new spine.canvas.SkeletonRenderer(this.sys.context);

    // skeletonRenderer.debugRendering = true;
    // skeletonRenderer.triangleRendering = true;

    // Load the texture atlas using name.atlas and name.png from the AssetManager.
    var ct = new spine.canvas.CanvasTexture(this.textures.get('spineboy').getSourceImage());

    atlas = new spine.TextureAtlas(this.cache.text.get('spineboyAtlas'), function () { return ct; });

    // Create a AtlasAttachmentLoader
    atlasLoader = new spine.AtlasAttachmentLoader(atlas);

    // Create a SkeletonJson instance for parsing the .json file.
    var skeletonJson = new spine.SkeletonJson(atlasLoader);

    // Set the scale to apply during parsing, parse the file, and create a new skeleton.
    var skeletonData = skeletonJson.readSkeletonData(this.cache.json.get('spineboy'));
    skeleton = new spine.Skeleton(skeletonData);
    skeleton.flipY = true;
    bounds = calculateBounds(skeleton);
    skeleton.setSkinByName('default');

    state = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
    state.setAnimation(0, animName, true);

    /*
    animationState.addListener({
        event: function(trackIndex, event) {
            // console.log("Event on track " + trackIndex + ": " + JSON.stringify(event));
        },
        complete: function(trackIndex, loopCount) {
            // console.log("Animation on track " + trackIndex + " completed, loop count: " + loopCount);
        },
        start: function(trackIndex) {
            // console.log("Animation on track " + trackIndex + " started");
        },
        end: function(trackIndex) {
            // console.log("Animation on track " + trackIndex + " ended");
        }
    })
    */

    this.sys.events.on('render', render, this);
}

function calculateBounds(skeleton) {
    var data = skeleton.data;
    skeleton.setToSetupPose();
    skeleton.updateWorldTransform();
    var offset = new spine.Vector2();
    var size = new spine.Vector2();
    skeleton.getBounds(offset, size, []);
    return { offset: offset, size: size };
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
    skeletonRenderer.draw(skeleton);

    // context.strokeStyle = "green";
    // context.beginPath();
    // context.moveTo(-1000, 0);
    // context.lineTo(1000, 0);
    // context.moveTo(0, -1000);
    // context.lineTo(0, 1000);
    // context.stroke();
}
