var config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    backgroundColor: '#2d2d88',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var camera;
var scene;
var mesh;
var renderer;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprites/phaser.png');
    this.load.script('threejs', 'assets/tests/three.min.js');
}

function create ()
{
    // this.add.text(10, 10, 'Extern Test 1');

    var e = this.add.extern();

    this.add.image(400, 300, 'logo');

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;

    scene = new THREE.Scene();

    var texture = new THREE.TextureLoader().load('assets/textures/tiles.jpg');

    var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { canvas: this.game.canvas, context: this.game.context, antialias: true } );
    // renderer = new THREE.WebGLRenderer();
    // renderer.setSize(800, 600);

    e.render = function (prenderer, pcamera, pcalcMatrix)
    {
        renderer.state.reset();

        renderer.render(scene, camera);
    }

    renderer.autoClear = false;

    // document.body.appendChild( renderer.domElement );
}

function update ()
{
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    // renderer.render( scene, camera );
}

