class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/background-crt.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg').setScale(0.78);

        this.add.text(400, 28, 'Quadratic Ease').setColor('#00ff00').setFontSize(32).setShadow(2, 2).setOrigin(0.5, 0);

        const types = [ 'quad.in', 'quad.out', 'quad.inout' ];
        let type = 0;
        let tween;

        const label = this.add.text(400, 530).setColor('#00ff00').setFontSize(22).setShadow(1, 1).setOrigin(0.5, 0).setAlign('center');

        const graph = this.add.graphics();
        const rect = this.add.rectangle(100, 400, 2, 2, 0x00ff00);
        const rt = this.add.renderTexture(400, 300, 800, 600);

        const graphEase = () => {

            if (tween)
            {
                tween.stop();
            }

            rt.clear();

            graph.clear();
            graph.lineStyle(3, 0x00ff00);
            graph.beginPath();

            rect.setPosition(50, 450);

            label.setText([
                types[type],
                'Click to change type'
            ]);

            tween = this.tweens.add({
                targets: rect,
                x: { value: 750, ease: 'linear' },
                y: { value: 100, ease: types[type] },
                duration: 4000,
                onUpdate: (tween, target, key) => {
                    if (key === 'x')
                    {
                        rt.draw(rect);
                        graph.lineTo(rect.x, rect.y);
                    }
                },
                onComplete: () => {
                    graph.stroke();
                }
            });
        }

        this.input.on('pointerdown', () => {

            type++;

            if (type === types.length)
            {
                type = 0;
            }

            graphEase();

        });

        graphEase();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
