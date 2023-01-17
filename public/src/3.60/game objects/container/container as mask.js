class Example extends Phaser.Scene
{
    containerTails = [];
    containers = [];

    preload ()
    {

        this.load.image('backdrop', 'assets/pics/platformer-backdrop.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');
        this.load.image('mask', 'assets/pics/mask.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        const backdrop = this.make.image({
            x: game.config.width / 2,
            y: game.config.height / 2,
            key: 'backdrop',
            add: true
        }).setScale(3);

        const maskImage = this.make.image({
            x: game.config.width / 2,
            y: game.config.height / 2,
            key: 'mask',
            add: false
        }).setScale(2);
        let lastContainer;
        const count = 40;

        const bunny = this.make.sprite({
            x: game.config.width / 2,
            y: game.config.height / 2,
            key: 'bunny',
            add: true
        });


        this.rootContainer = this.make.container({x: game.config.width / 2, y: game.config.height / 2, add: false });

        bunny.mask = new Phaser.Display.Masks.BitmapMask(this, this.rootContainer);


        for (let j = 0; j < 4; ++j)
        {
            for (let index = 0; index < count; ++index)
            {
                const image = this.make.image({x: 0, y: 0, key: 'arrow', add: false});
                if (index === 0)
                {
                    lastContainer = this.make.container({x: 0, y: 0, add: false});
                    this.containers.push(lastContainer);
                    lastContainer.rotation += (j * 90) * Math.PI / 180;
                    this.rootContainer.add(lastContainer);
                }
                else
                {
                    let newContainer = this.make.container({x: image.width, y: 0, add: false});
                    lastContainer.add(newContainer);
                    lastContainer = newContainer;
                    newContainer.setScale(1.0 - index / (count));
                    newContainer.rotation = index / count * 2;
                }
                image.setOrigin(0, 0.5);
                lastContainer.add(image);

                if (index === 5 || index === 4 || index === 10)
                {
                    let leafContainer = lastContainer;
                    const direction = index === 5 ? 1 : -1;
                    for (let k = 0; k < 10; ++k)
                    {
                        let image2 = this.make.image({x: 0, y: 0, key: 'arrow', add: false});
                        let newContainer = this.make.container({x: image2.width, y: 0, add: false});
                        leafContainer.add(newContainer);
                        leafContainer = newContainer;
                        leafContainer.setScale(1.0 - k / 10);
                        leafContainer.rotation = 0.1 * direction;
                        image2.setOrigin(0, 0.5);
                        leafContainer.add(image2);
                    }
                }

                if (index === count - 1) { this.containerTails.push(lastContainer); }
            }
        }

        let move = false;

        this.input.on('pointerdown', pointer =>
        {
            move = true;
        });
        this.input.on('pointerup', pointer =>
        {
            move = false;
        });

        this.input.on('pointermove', pointer =>
        {

            if (move)
            {
                bunny.x = pointer.x;
                bunny.y = pointer.y;
            }

        });

    }

    update ()
    {
        for (let index = 0; index < this.containerTails.length; ++index)
        {
            const container = this.containerTails[index];
            this.rotateContainer(container, 0.01);
        }
        this.rootContainer.rotation += 0.01;
    }

    rotateContainer (container, rotation)
    {
        if (container)
        {
            container.rotation += rotation;
            this.rotateContainer(container.parentContainer, rotation);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
