class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
        this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
    }

    create ()
    {
        this.add.image(0, 0, 'grid').setOrigin(0).setAlpha(0.5);

        const bounds = new Phaser.Geom.Rectangle(0, 0, 1024, 768);

        const containers = [];

        let container = this.add.container(0, 0).setName('Container1');

        containers.push(container);

        window['Container1'] = container;

        let c = 1;

        for (let i = 0; i < 128; i++)
        {
            const x = Phaser.Math.Between(bounds.left, bounds.right);
            const y = Phaser.Math.Between(bounds.top, bounds.bottom);

            const s = this.add.sprite(x, y, 'eye').setName(`Sprite${i}`);
            window[`Sprite${i}`] = s;

            s.setInteractive();
            s.setAngle(Phaser.Math.Between(0, 359));
            s.setScale(0.1 + Math.random());

            if (i > 0 && i % 8 === 0)
            {
                container = this.add.container(0, 0).setName(`Container${c}`);

                if (c > 1)
                {
                    const p = Phaser.Utils.Array.GetRandom(containers).add(container);
                    console.log(container.name, 'child of', p.name);
                }

                containers.push(container);

                window[`Container${c}`] = container;

                c++;
            }

            Phaser.Utils.Array.GetRandom(containers).add(s);
        }

        this.input.on('gameobjectover', (pointer, gameObject) =>
        {

            gameObject.setTint(0xff0000);

            // console.log(gameObject.name);
            // console.table(gameObject.getIndexList());

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });

        /*
        this.tweens.add({
            targets: containers,
            angle: 360,
            duration: 20000,
            ease: 'Linear',
            repeat: -1
        });
        */
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
