class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.script('threejs', 'js/three145.js');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
        this.load.image('bg', 'assets/skies/gradient3.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.init3D();

        this.add.image(0, 0, 'logo').setOrigin(0, 0);
    }

    //  This is all mostly ThreeJS code
    init3D ()
    {
        const camera = new THREE.PerspectiveCamera(70, 800 / 600, 1, 10000);

        camera.position.z = 300;

        const scene = new THREE.Scene();

        const texture = new THREE.TextureLoader().load('assets/normal-maps/brick.jpg');

        const geometry = new THREE.BoxGeometry(200, 200, 200);
        const crate = new THREE.MeshBasicMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, crate);

        scene.add(mesh);

        //  Tell three to use the Phaser canvas
        //  Also: Notice we're using the WebGL1 Renderer here
        const renderer = new THREE.WebGL1Renderer({
            canvas: this.sys.game.canvas,
            context: this.sys.game.context,
            antialias: true,
        });

        //  Create the Phaser Extern, tells Phaser to hand-off rendering to ThreeJS
        const view = this.add.extern();

        renderer.setPixelRatio(1);
        renderer.setSize(800, 600);

        //  You can skip this if threeJS is providing the _background_
        //  and all Phaser objects are on-top of it
        renderer.autoClear = false;

        //  The Extern render function
        view.render = () => {

            //  This is essential to get ThreeJS to reset the GL state
            renderer.resetState();

            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.01;

            renderer.render(scene, camera);

        };
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
