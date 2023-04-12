class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        const container1 = this.add.container(400, 300);

        //  Because the rect is drawn at 0x0 it will start from the top-left of Container1
        //  If you want bg1 to be _centered_ on Container1 then its xy should be
        //  negative half width by negative half height (i.e. -150, -150 in this case)
        const bg1 = this.add.graphics().fillStyle(0xff0000).fillRect(0, 0, 300, 300);

        container1.add(bg1);

        //  This Container is positioned _relative_ to Container1 (at 400x300)
        //  Which is why we use 0x0 here - if you put a different value, see how they adjust
        const container2 = this.add.container(0, 0);

        //  Because the rect is drawn at 0x0 it will start from the top-left of Container2
        const bg2 = this.add.graphics().fillStyle(0x00ff00).fillRect(0, 0, 200, 200);

        container2.add(bg2);

        container1.add(container2);

        const container3 = this.add.container(0, 0);

        //  Because the rect is drawn at 0x0 it will start from the top-left of Container3
        const bg3 = this.add.graphics().fillStyle(0x0000ff).fillRect(0, 0, 100, 100);

        container3.add(bg3);

        container1.add(container3);
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

let game = new Phaser.Game(config);
