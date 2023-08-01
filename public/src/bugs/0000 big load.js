class SetQuantity extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    create ()
    {
        this.add.text(10, 10, 'Select quantity\nof files to load', { font: '32px Courier', fill: '#00ff00' });

        const button1 = this.add.text(10, 100, '2500', { fontFamily: 'Arial', fontSize: '32px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });
        const button2 = this.add.text(10, 200, '5000', { fontFamily: 'Arial', fontSize: '32px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });
        const button3 = this.add.text(10, 300, '10000', { fontFamily: 'Arial', fontSize: '32px', color: '#ffffff', align: 'center', fixedWidth: 260, backgroundColor: '#0000cc' });

        button1.setPadding(16).setOrigin(0).setInteractive();
        button2.setPadding(16).setOrigin(0).setInteractive();
        button3.setPadding(16).setOrigin(0).setInteractive();

        button1.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 2500 });
        });

        button2.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 5000 });
        });

        button3.once('pointerdown', () => {
            this.scene.start('BigLoad', { quantity: 10000 });
        });
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

        this.add.text(10, 10, `Loading ${this.quantity} files`, { font: '32px Courier', fill: '#00ff00' });

        console.log('Quantity:', this.quantity);
    }

    preload ()
    {
        const progress = this.add.graphics();

        this.load.on('progress', value =>
        {
            progress.clear();
            progress.fillStyle(0xffff00, 1);
            progress.fillRect(0, 100, 800 * value, 60);
        });


        for (let i = 0; i < this.quantity; i++)
        {
            this.load.image(`block${i}`, 'https://labs.phaser.io/assets/sprites/128x128-v2.png');
        }
    }

    create ()
    {
        const half = Math.floor(this.quantity / 2);
        const last = this.quantity - 1;

        this.add.sprite(200, 300, 'block0');
        this.add.sprite(400, 300, `block${half}`);
        this.add.sprite(600, 300, `block${last}`);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: [ SetQuantity, Demo ]
};

const game = new Phaser.Game(config);
