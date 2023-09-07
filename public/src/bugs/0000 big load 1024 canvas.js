class SetQuantity extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    create ()
    {
        this.add.text(10, 10, `Phaser v${Phaser.VERSION}\n1024 CANVAS TEST\nSelect quantity to load`, { font: '16px Courier', fill: '#00ff00' });

        const button1 = this.add.text(10, 100, '10', { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });
        const button2 = this.add.text(10, 200, '50', { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });
        const button3 = this.add.text(10, 300, '100', { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });
        const button4 = this.add.text(10, 400, '250', { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });

        button1.setPadding(16).setOrigin(0).setInteractive();
        button2.setPadding(16).setOrigin(0).setInteractive();
        button3.setPadding(16).setOrigin(0).setInteractive();
        button4.setPadding(16).setOrigin(0).setInteractive();

        button1.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 10 });
        });

        button2.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 50 });
        });

        button3.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 100 });
        });

        button4.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 250 });
        });

        if (Phaser.VERSION === '3.55.2')
        {
            const button5 = this.add.text(10, 500, 'Swap to 3.61', { fontFamily: 'Arial', fontSize: '24px', color: '#000000', align: 'center', fixedWidth: 260, backgroundColor: '#ffffff' });

            button5.setPadding(16).setOrigin(0).setInteractive();

            button5.once('pointerdown', () => {
                window.location.href = 'https://labs.phaser.io/view.html?src=src/bugs/0000%20big%20load%201024.js&v=live';
            });
        }
        else
        {
            const button5 = this.add.text(10, 500, 'Swap to 3.55', { fontFamily: 'Arial', fontSize: '24px', color: '#000000', align: 'center', fixedWidth: 260, backgroundColor: '#ffffff' });

            button5.setPadding(16).setOrigin(0).setInteractive();

            button5.once('pointerdown', () => {
                window.location.href = 'https://labs.phaser.io/view.html?src=src/bugs/0000%20big%20load%201024.js&v=3.55.2';
            });
        }
    }
}

class Demo extends Phaser.Scene
{
    constructor()
    {
        super('BigLoad');
    }

    init (data)
    {
        this.quantity = data.quantity;

        this.add.text(10, 10, `Loading ${this.quantity} 1024px files`, { font: '16px Courier', fill: '#00ff00' });

        console.log('Quantity:', this.quantity);
    }

    preload ()
    {
        const progress = this.add.graphics();

        this.load.on('progress', value =>
        {
            progress.clear();
            progress.fillStyle(0xffff00, 1);
            progress.fillRect(0, 100, 375 * value, 60);
        });


        for (let i = 0; i < this.quantity; i++)
        {
            this.load.image(`block${i}`, `https://labs.phaser.io/assets/pics/sao-sinon.png`);
        }
    }

    create ()
    {
        this.add.image(0, 200, 'block0').setOrigin(0).setScale(0.25);
        this.add.image(128, 328, `block${this.quantity - 1}`).setOrigin(0).setScale(0.25);
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 375,
    height: 667,
    backgroundColor: '#000000',
    scene: [ SetQuantity, Demo ]
};

const game = new Phaser.Game(config);
