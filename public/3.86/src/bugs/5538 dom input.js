class Example extends Phaser.Scene
{
    constructor ()
    {
        super('Example');
    }

    create ()
    {
        let textbutton = this.add.text(50, 50, "Text", { font: '64px Courier' });

        textbutton.setInteractive();

        let x = 0;

        textbutton.on('pointerup', () => {
            console.log('clicked text object');
            this.add.text(100, 100 + 50 * x, "inserted", { font: '64px Courier' });
            x++;
        });

        var div = document.createElement('div');
        div.setAttribute("style", "color: white; font: 48px Arial;");
        div.innerText = "DOM Element";

        let el = this.add.dom(500, 80, div);

        el.addListener('click');

        el.on('click', (event) => {

            console.log('clicked dom thingy');

            el.destroy();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example,
    dom: {
        createContainer: true
    }
};

const game = new Phaser.Game(config);
