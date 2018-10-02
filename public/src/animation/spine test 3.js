var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var lastFrameTime = Date.now() / 1000;
// var canvas;
var shader;
var batcher;
// var gl;
var mvp;
var assetManager;
var skeletonRenderer;
var debugRenderer;
var shapes;
var skeletons = {};
var activeSkeleton = "spineboy";
// var swirlEffect = new spine.SwirlEffect(0);
// var jitterEffect = new spine.JitterEffect(20, 20);
var swirlTime = 0;
var ready = false;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.script('spine', 'spine/spine-webgl.js');
}

function create ()
{
    var canvas = this.sys.canvas;
    var context = this.sys.context;
    var gl = this.sys.game.renderer.gl;

    mvp = new spine.webgl.Matrix4();

    // Create a simple shader, mesh, model-view-projection matrix and SkeletonRenderer.
    shader = spine.webgl.Shader.newTwoColoredTextured(gl);
    batcher = new spine.webgl.PolygonBatcher(gl);
    mvp.ortho2d(0, 0, canvas.width - 1, canvas.height - 1);
    skeletonRenderer = new spine.webgl.SkeletonRenderer(gl);
    debugRenderer = new spine.webgl.SkeletonDebugRenderer(gl);
    debugRenderer.drawRegionAttachments = true;
    debugRenderer.drawBoundingBoxes = true;
    debugRenderer.drawMeshHull = true;
    debugRenderer.drawMeshTriangles = true;
    debugRenderer.drawPaths = true;
    debugShader = spine.webgl.Shader.newColored(gl);
    shapes = new spine.webgl.ShapeRenderer(gl);
    assetManager = new spine.webgl.AssetManager(gl);

    // Tell AssetManager to load the resources for each model, including the exported .json file, the .atlas file and the .png
    // file for the atlas. We then wait until all resources are loaded in the load() method.
    assetManager.loadText("assets/animations/spine/webgl/spineboy-ess.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/spineboy.atlas");
    assetManager.loadText("assets/animations/spine/webgl/raptor-pro.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/raptor.atlas");
    assetManager.loadText("assets/animations/spine/webgl/tank-pro.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/tank.atlas");
    assetManager.loadText("assets/animations/spine/webgl/goblins-pro.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/goblins.atlas");
    assetManager.loadText("assets/animations/spine/webgl/vine-pro.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/vine.atlas");
    assetManager.loadText("assets/animations/spine/webgl/stretchyman-pro.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/stretchyman.atlas");
    assetManager.loadText("assets/animations/spine/webgl/coin-pro.json");
    assetManager.loadTextureAtlas("assets/animations/spine/webgl/coin.atlas");
}

function update ()
{
    if (assetManager.isLoadingComplete() && !ready) {
        ready = true;
        skeletons["raptor"] = loadSkeleton("raptor-pro", "walk", false);
        skeletons["spineboy"] = loadSkeleton("spineboy-ess", "run", false);
        skeletons["tank"] = loadSkeleton("tank-pro", "drive", false);
        skeletons["goblins"] = loadSkeleton("goblins-pro", "walk", false, "goblin");
        skeletons["vine"] = loadSkeleton("vine-pro", "grow", false);
        skeletons["stretchyman"] = loadSkeleton("stretchyman-pro", "sneak", false);
        skeletons["coin"] = loadSkeleton("coin-pro", "rotate", false);

        activeSkeleton = 'raptor';

        this.sys.events.on('render', render, this);
    }
}

function loadSkeleton (name, initialAnimation, premultipliedAlpha, skin) {
    if (skin === undefined) skin = "default";

    // Load the texture atlas using name.atlas from the AssetManager.
    atlas = assetManager.get("assets/animations/spine/webgl/" + name.replace("-ess", "").replace("-pro", "") + ".atlas");

    // Create a AtlasAttachmentLoader that resolves region, mesh, boundingbox and path attachments
    atlasLoader = new spine.AtlasAttachmentLoader(atlas);

    // Create a SkeletonJson instance for parsing the .json file.
    var skeletonJson = new spine.SkeletonJson(atlasLoader);

    // Set the scale to apply during parsing, parse the file, and create a new skeleton.
    var skeletonData = skeletonJson.readSkeletonData(assetManager.get("assets/animations/spine/webgl/" + name + ".json"));
    var skeleton = new spine.Skeleton(skeletonData);
    skeleton.setSkinByName(skin);
    var bounds = calculateBounds(skeleton);

    // Create an AnimationState, and set the initial animation in looping mode.
    animationStateData = new spine.AnimationStateData(skeleton.data);
    var animationState = new spine.AnimationState(animationStateData);
    if (name == "spineboy") {
        animationStateData.setMix("walk", "jump", 0.4)
        animationStateData.setMix("jump", "run", 0.4);
        animationState.setAnimation(0, "walk", true);
        var jumpEntry = animationState.addAnimation(0, "jump", false, 3);
        animationState.addAnimation(0, "run", true, 0);
    } else {
        animationState.setAnimation(0, initialAnimation, true);
    }
    /*
    animationState.addListener({
        start: function(track) {
            console.log("Animation on track " + track.trackIndex + " started");
        },
        interrupt: function(track) {
            console.log("Animation on track " + track.trackIndex + " interrupted");
        },
        end: function(track) {
            console.log("Animation on track " + track.trackIndex + " ended");
        },
        disposed: function(track) {
            console.log("Animation on track " + track.trackIndex + " disposed");
        },
        complete: function(track) {
            console.log("Animation on track " + track.trackIndex + " completed");
        },
        event: function(track, event) {
            console.log("Event on track " + track.trackIndex + ": " + JSON.stringify(event));
        }
    })
    */

    // Pack everything up and return to caller.
    return { skeleton: skeleton, state: animationState, bounds: bounds, premultipliedAlpha: premultipliedAlpha };
}

function calculateBounds(skeleton) {
    skeleton.setToSetupPose();
    skeleton.updateWorldTransform();
    var offset = new spine.Vector2();
    var size = new spine.Vector2();
    skeleton.getBounds(offset, size, []);
    return { offset: offset, size: size };
}

function render ()
{
    var canvas = this.sys.canvas;
    var context = this.sys.context;
    var gl = this.sys.game.renderer.gl;

    var now = Date.now() / 1000;
    var delta = now - lastFrameTime;
    lastFrameTime = now;

    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    var bounds = skeletons[activeSkeleton].bounds;
    if (canvas.width != w || canvas.height != h) {
        canvas.width = w;
        canvas.height = h;
    }

    // magic
    var centerX = bounds.offset.x + bounds.size.x / 2;
    var centerY = bounds.offset.y + bounds.size.y / 2;
    var scaleX = bounds.size.x / canvas.width;
    var scaleY = bounds.size.y / canvas.height;
    var scale = Math.max(scaleX, scaleY) * 1.2;
    if (scale < 1) scale = 1;
    var width = canvas.width * scale;
    var height = canvas.height * scale;

    mvp.ortho2d(centerX - width / 2, centerY - height / 2, width, height);
    // gl.viewport(0, 0, canvas.width, canvas.height);

    // gl.clearColor(0.3, 0.3, 0.3, 1);
    // gl.clear(gl.COLOR_BUFFER_BIT);

    // Apply the animation state based on the delta time.
    var state = skeletons[activeSkeleton].state;
    var skeleton = skeletons[activeSkeleton].skeleton;
    var bounds = skeletons[activeSkeleton].bounds;
    var premultipliedAlpha = skeletons[activeSkeleton].premultipliedAlpha;

    state.update(delta);
    state.apply(skeleton);
    skeleton.updateWorldTransform();

    // Bind the shader and set the texture and model-view-projection matrix.
    shader.bind();
    shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
    shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);

    // Start the batch and tell the SkeletonRenderer to render the active skeleton.
    batcher.begin(shader);

    skeletonRenderer.vertexEffect = null;

    /*
    var effect = $("#effectList option:selected").text();
    if (effect == "None") {
        skeletonRenderer.vertexEffect = null;
    } else if (effect == "Swirl") {
        swirlTime += delta;
        var percent = swirlTime % 2;
        if (percent > 1) percent = 1 - (percent -1 );
        // swirlEffect.angle = -60 + 120 * (perecent < 0.5 ? Math.pow(percent * 2, 2) / 2 : Math.pow((percent - 1) * 2, 2) / -2 + 1);
        swirlEffect.angle = 360 * percent;
        swirlEffect.centerX = 200; //bounds.offset.x + bounds.size.x / 2
        swirlEffect.centerY = 200; //bounds.offset.y + bounds.size.y / 2
        swirlEffect.radius = Math.sqrt(bounds.size.x * bounds.size.x + bounds.size.y * bounds.size.y);
        skeletonRenderer.vertexEffect = swirlEffect;
    } else if (effect == "Jitter") {
        skeletonRenderer.vertexEffect = jitterEffect;
    }
    */

    skeletonRenderer.premultipliedAlpha = premultipliedAlpha;
    skeletonRenderer.draw(batcher, skeleton);
    batcher.end();

    shader.unbind();

    // draw debug information
    // var debug = $('#debug').is(':checked');

    var debug = false;
    if (debug) {
        debugShader.bind();
        debugShader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);
        debugRenderer.premultipliedAlpha = premultipliedAlpha;
        shapes.begin(debugShader);
        debugRenderer.draw(shapes, skeleton);
        shapes.end();
        debugShader.unbind();
    }

}
