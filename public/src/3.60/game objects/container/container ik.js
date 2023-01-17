class Example extends Phaser.Scene
{
    containerTails = [];
    containers = [];

    preload ()
    {

        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        let lastContainer;
        const count = 40;

        for (let j = 0; j < 4; ++j)
        {
            for (let index = 0; index < count; ++index)
            {
                const image = this.make.image({x: 0, y: 0, key: 'arrow', add: false});
                if (index === 0)
                {
                    lastContainer = this.add.container(game.config.width / 2, game.config.height / 2);
                    this.containers.push(lastContainer);
                    lastContainer.rotation += (j * 90) * Math.PI / 180;
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
                        const image2 = this.make.image({x: 0, y: 0, key: 'arrow', add: false});
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

    }

    update ()
    {
        for (let index = 0; index < this.containerTails.length; ++index)
        {
            const container = this.containerTails[index];
            this.rotateContainer(container, 0.02);
        }
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
