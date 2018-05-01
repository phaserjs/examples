class Controller extends Phaser.Scene {

    constructor ()
    {
        super('Controller');

        this.active;
        this.currentScene;

        this.button1;
        this.button2;
        this.button3;
        this.button4;
        this.button5;
        this.button6;

        this.text1;
        this.text2;

        this.dpad;
        this.padUp = new Phaser.Geom.Rectangle(23, 0, 32, 26);
        this.padDown = new Phaser.Geom.Rectangle(23, 53, 32, 26);
        this.padLeft = new Phaser.Geom.Rectangle(0, 26, 23, 27);
        this.padRight = new Phaser.Geom.Rectangle(55, 26, 23, 27);

        this.bg;
    }

    preload ()
    {
        this.load.image('bg', 'assets/tests/scenes/bg.jpg');
        this.load.atlas('space', 'assets/tests/scenes/space.png', 'assets/tests/scenes/space.json');
        this.load.atlas('ui', 'assets/tests/scenes/ui.png', 'assets/tests/scenes/ui.json');
        this.load.bitmapFont('digital', 'assets/tests/scenes/digital.png', 'assets/tests/scenes/digital.xml');
    }

    create ()
    {
        this.textures.addSpriteSheetFromAtlas('mine', { atlas: 'space', frame: 'mine', frameWidth: 64 });
        this.textures.addSpriteSheetFromAtlas('asteroid', { atlas: 'space', frame: 'asteroid', frameWidth: 96 });

        this.anims.create({ key: 'asteroid', frames: this.anims.generateFrameNumbers('asteroid', { start: 0, end: 24 }), frameRate: 12, repeat: -1 });
        this.anims.create({ key: 'mine', frames: this.anims.generateFrameNumbers('mine', { start: 0, end: 15 }), frameRate: 20, repeat: -1 });

        this.bg = this.add.tileSprite(400, 300, 800, 600, 'bg');

        this.add.image(0, 0, 'ui', 'panel').setOrigin(0);

        //  Buttons
        this.createButton(1, 'SceneA', 'nebula', 36, 26);
        this.createButton(2, 'SceneB', 'sun', 157, 26);
        this.createButton(3, 'SceneC', 'asteroids', 278, 26);
        this.createButton(4, 'SceneD', 'planet', 36, 76);
        this.createButton(5, 'SceneE', 'ship', 157, 76);
        this.createButton(6, 'SceneF', 'mines', 278, 76);

        //  Button 1 is active first
        this.button1.setFrame('button-down');
        this.button1.setData('active', true);

        this.active = this.button1;

        //  Button Labels
        this.add.image(0, 0, 'ui', 'scene-labels').setOrigin(0);

        //  LCD
        this.text1 = this.add.bitmapText(520, 42, 'digital', 'nebula', 32).setOrigin(0.5, 0).setAlpha(0.8);
        this.text2 = this.add.bitmapText(520, 74, 'digital', 'index 1 / 6', 22).setOrigin(0.5, 0).setAlpha(0.8);

        //  D-Pad
        this.createDPad();

        this.scene.launch('SceneA');
        this.scene.launch('SceneB');
        this.scene.launch('SceneC');
        this.scene.launch('SceneD');
        this.scene.launch('SceneE');
        this.scene.launch('SceneF');

        this.currentScene = this.scene.get('SceneA');
    }

    createButton (id, scene, name, x, y)
    {
        let btn = this.add.image(x, y, 'ui', 'button-out').setOrigin(0);

        btn.setInteractive();

        btn.setData('id', id);
        btn.setData('scene', scene);
        btn.setData('name', name);
        btn.setData('active', false);

        btn.on('pointerover', function () {

            if (!this.getData('active'))
            {
                this.setFrame('button-over');
            }

        });

        btn.on('pointerout', function () {

            if (this.getData('active'))
            {
                this.setFrame('button-down');
            }
            else
            {
                this.setFrame('button-out');
            }

        });

        btn.on('pointerup', function () {

            if (!btn.getData('active'))
            {
                this.setActiveScene(btn);
            }

        }, this);

        this['button' + id] = btn;
    }

    createDPad ()
    {
        this.dpad = this.add.image(670, 26, 'ui', 'nav-out').setOrigin(0);

        this.dpad.setInteractive();

        this.dpad.on('pointermove', function (pointer, px, py) {

            if (this.padUp.contains(px, py))
            {
                this.dpad.setFrame('nav-up');
            }
            else if (this.padDown.contains(px, py))
            {
                this.dpad.setFrame('nav-down');
            }
            else if (this.padLeft.contains(px, py))
            {
                this.dpad.setFrame('nav-left');
            }
            else if (this.padRight.contains(px, py))
            {
                this.dpad.setFrame('nav-right');
            }
            else
            {
                this.dpad.setFrame('nav-out');
            }

        }, this);

        this.dpad.on('pointerup', function (pointer, px, py) {

            if (this.padUp.contains(px, py))
            {
                this.scene.bringToTop(this.currentScene);
            }
            else if (this.padDown.contains(px, py))
            {
                this.scene.moveAbove('Controller', this.currentScene);
            }
            else if (this.padLeft.contains(px, py))
            {
                let idx = this.scene.getIndex(this.currentScene);                

                if (idx > 1)
                {
                    this.scene.moveDown(this.currentScene);
                }
            }
            else if (this.padRight.contains(px, py))
            {
                this.scene.moveUp(this.currentScene);
            }

        }, this);
    }

    setActiveScene (btn)
    {
        //  De-activate the old one
        this.active.setData('active', false);
        this.active.setFrame('button-out');

        btn.setData('active', true);
        btn.setFrame('button-down');

        this.active = btn;
        this.currentScene = this.scene.get(btn.getData('scene'));

        this.text1.setText(btn.getData('name'));
    }

    update (time, delta)
    {
        this.bg.tilePositionX += 0.02 * delta;
        this.bg.tilePositionY += 0.005 * delta;

        let idx = this.scene.getIndex(this.currentScene);

        this.text2.setText('index ' + idx + ' / 6');
    }

}

class SceneA extends Phaser.Scene {

    constructor ()
    {
        super('SceneA');

        this.nebula;
    }

    create ()
    {
        this.cameras.main.setViewport(0, 136, 800, 464);

        this.nebula = this.add.image(300, 250, 'space', 'nebula');
    }

    update (time, delta)
    {
        this.nebula.rotation += 0.00006 * delta;
    }

}

class SceneB extends Phaser.Scene {

    constructor ()
    {
        super('SceneB');

        this.sun;
    }

    create ()
    {
        this.cameras.main.setViewport(0, 136, 800, 464);

        this.sun = this.add.image(650, 80, 'space', 'sun');
    }

}

class SceneC extends Phaser.Scene {

    constructor ()
    {
        super('SceneC');

        this.asteroids = [];

        this.positions = [
            { x: 37, y: 176 },
            { x: 187, y: 66 },
            { x: 177, y: 406 },
            { x: 317, y: 256 },
            { x: 417, y: -10 },
            { x: 487, y: 336 },
            { x: 510, y: 116 },
            { x: 727, y: 186 },
            { x: 697, y: 10 },
            { x: 597, y: 216 },
            { x: 695, y: 366 },
            { x: 900, y: 76 },
            { x: 1008, y: 315 }
        ];
    }

    create ()
    {
        this.cameras.main.setViewport(0, 136, 800, 464);

        for (let i = 0; i < this.positions.length; i++)
        {
            let pos = this.positions[i];

            let therock = this.add.sprite(pos.x, pos.y, 'asteroid').play('asteroid');

            therock.setData('vx', 0.04);
            therock.setOrigin(0);
            therock.setScale(Phaser.Math.FloatBetween(0.3, 0.6));

            this.asteroids.push(therock);
        }
    }

    update (time, delta)
    {
        for (let i = 0; i < this.asteroids.length; i++)
        {
            let therock = this.asteroids[i];

            therock.x -= therock.getData('vx') * delta;

            if (therock.x <= -100)
            {
                therock.x = 1000;
            }
        }
    }

}

class SceneD extends Phaser.Scene {

    constructor ()
    {
        super('SceneD');

        this.planet;
    }

    create ()
    {
        this.cameras.main.setViewport(0, 136, 800, 464);

        this.planet = this.add.image(200, 380, 'space', 'planet');
    }

    update (time, delta)
    {
        this.planet.x += 0.01 * delta;

        if (this.planet.x >= 1000)
        {
            this.planet.x = -200;
        }
    }

}

class SceneE extends Phaser.Scene {

    constructor ()
    {
        super('SceneE');

        this.ship;
        this.particles;
        this.emitter;

        this.splineData = [
            50, 300,
            146, 187,
            35, 94,
            180, 40,
            446, 35,
            438, 100,
            337, 150,
            452, 185,
            560, 155,
            641, 90,
            723, 147,
            755, 262,
            651, 271,
            559, 318,
            620, 384,
            563, 469,
            433, 457,
            385, 395,
            448, 334,
            406, 265,
            316, 305,
            268, 403,
            140, 397,
            205, 309,
            204, 240,
            144, 297,
            50, 300
          ];

        this.curve;
    }

    create ()
    {
        this.cameras.main.setViewport(0, 136, 800, 464);

        this.curve = new Phaser.Curves.Spline(this.splineData);

        let ship = this.add.follower(this.curve, 50, 300, 'space', 'ship');

        ship.startFollow({
            duration: 12000,
            yoyo: true,
            ease: 'Sine.easeInOut',
            repeat: -1
        });

        this.particles = this.add.particles('space');

        this.emitter = this.particles.createEmitter({
            frame: 'blue',
            speed: 100,
            lifespan: 2000,
            alpha: 0.6,
            angle: 180,
            scale: { start: 0.7, end: 0 },
            blendMode: 'ADD'
        });

        ship.setDepth(1);

        this.ship = ship;

        this.emitter.startFollow(this.ship);
    }

}

class SceneF extends Phaser.Scene {

    constructor ()
    {
        super('SceneF');

        this.mines = [];
    }

    create ()
    {
        this.cameras.main.setViewport(0, 136, 800, 464);

        for (let i = 0; i < 4; i++)
        {
            let x = Phaser.Math.Between(400, 800);
            let y = Phaser.Math.Between(0, 460);

            let mine = this.add.sprite(x, y, 'mine').play('mine');

            mine.setData('vx', Phaser.Math.FloatBetween(0.08, 0.14));

            this.mines.push(mine);
        }
    }

    update (time, delta)
    {
        for (let i = 0; i < this.mines.length; i++)
        {
            let mine = this.mines[i];

            mine.x -= mine.getData('vx') * delta;

            if (mine.x <= -100)
            {
                mine.x = 1000;
                mine.y = Phaser.Math.Between(0, 460);
            }
        }
    }

}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Controller, SceneA, SceneB, SceneC, SceneD, SceneE, SceneF ]
};

let game = new Phaser.Game(config);
