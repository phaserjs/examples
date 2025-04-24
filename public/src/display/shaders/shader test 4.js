class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('spiralTime', 'assets/shaders/spiralTime.frag');
        this.load.image('pic', 'assets/pics/rick-and-morty-by-sawuinhaff-da64e7y.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('splat1', 'assets/pics/splat1.png');
        this.load.image('splat2', 'assets/pics/splat2.png');
        this.load.image('splat3', 'assets/pics/splat3.png');
    }

    create()
    {
        const shape1 = this.make.graphics().fillCircle(400, 300, 300);
        const shape2 = this.make.graphics().fillCircle(400, 300, 200);

        const geomask1 = shape1.createGeometryMask();
            geomask1.geometryMask.setName('geo1');
        const geomask2 = shape2.createGeometryMask();
            geomask2.geometryMask.setName('geo2');

        const maskImage1 = this.make.image({ x: 400, y: 300, key: 'splat1', add: false });
        const maskImage2 = this.make.image({ x: 400, y: 300, key: 'splat2', add: false });
        const maskImage3 = this.make.image({ x: 400, y: 300, key: 'splat3', add: false });
        const maskImage4 = this.make.image({ x: 400, y: 300, key: 'bunny', add: false });

        // const bitmask1 = maskImage1.createBitmapMask();
        // const bitmask2 = maskImage2.createBitmapMask();
        // const bitmask3 = maskImage3.createBitmapMask();
        // const bitmask4 = maskImage4.createBitmapMask();

        // bitmask3.invertAlpha = true;

        // mask3.invertAlpha = true;

        // this.cameras.main.setMask(geomask1, false);
        // this.cameras.main.setMask(bitmask1, false);
        this.cameras.main.filters.external.addMask(maskImage1);

        this.add.image(700, 300, 'bunny').setName('bunny');

        this.add.image(400, 300, 'pic');
        // this.add.image(400, 300, 'pic').setName('rick').setMask(geomask2);
        // this.add.image(400, 300, 'pic').setMask(bitmask3);

        // var shader = this.add.shader(600, 300, 800, 600, fragmentShader7);

        // mask4.invertAlpha = true;
        // var shader = this.add.shader(400, 300, 800, 400, fragmentShader);
        
        const shader = this.add.shader({
            name: 'spiralTime',
            fragmentKey: 'spiralTime',
            setupUniforms: (setUniform, drawingContext) =>
            {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, this.scale.width, this.scale.width);
        shader.enableFilters().filters.external.addMask(maskImage3);
        // var shader = this.add.shader(700, 300, 800, 400, fragmentShader).setMask(mask2);

        // shader.setPointer(this.input.activePointer);

        this.text = this.add.text(80, 320, '', { font: '16px Courier', fill: '#00ff00' }).setName('text');

        this.add.image(400, 300, 'logo').setName('logo');
        // this.add.image(400, 300, 'logo').setMask(mask2);
        // this.add.image(300, 300, 'logo').setMask(mask4);

        // this.add.image(400, 500, 'logo').setMask(mask4);
    }

    update()
    {
        if (this.text)
        {
            this.text.setText([
                this.sys.game.loop.getDuration(),
                this.sys.game.loop.getDurationMS()
            ]);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
