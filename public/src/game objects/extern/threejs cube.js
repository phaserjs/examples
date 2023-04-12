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

        const texture1 = new THREE.TextureLoader().load('assets/normal-maps/brick.jpg');
        const texture2 = new THREE.TextureLoader().load('assets/textures/gold.png');
        const texture3 = new THREE.TextureLoader().load('assets/textures/grass.png');

        const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
        const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
        const material3 = new THREE.MeshBasicMaterial({ map: texture3 });

        const geometry1 = new THREE.BoxGeometry(100, 100, 100);
        const mesh1 = new THREE.Mesh(geometry1, material1);

        const geometry2 = new THREE.SphereGeometry(64, 32, 16);
        const mesh2 = new THREE.Mesh(geometry2, material2);

        const geometry3 = new THREE.CylinderGeometry(35, 35, 80, 32);
        const mesh3 = new THREE.Mesh(geometry3, material3);

        mesh2.position.x = -200;
        mesh3.position.x = 200;

        scene.add(mesh1);
        scene.add(mesh2);
        scene.add(mesh3);

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

            mesh1.rotation.x += 0.005;
            mesh1.rotation.y += 0.01;

            mesh2.rotation.x -= 0.005;
            mesh2.rotation.y += 0.02;

            mesh3.rotation.x += 0.03;
            mesh3.rotation.y += 0.02;

            renderer.render(scene, camera);

            //  Call it again, after rendering, if you get graphical corruption
            // renderer.resetState();

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
