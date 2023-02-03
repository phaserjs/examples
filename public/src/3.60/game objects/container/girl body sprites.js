class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('girl', 'assets/atlas/girl.png', 'assets/atlas/girl.json');
    }

    create ()
    {
        const girl = this.add.container(400, 450);

        const body = this.add.image(-30, 18, 'girl', 'Body').setName('body');
        const hair = this.add.image(110, -310, 'girl', 'HairTop').setName('hair');
        const head = this.add.image(0, -200, 'girl', 'Head').setName('head');
        const eyes = this.add.image(-34, -182, 'girl', 'EyesOpen').setName('eyes');
        const mouth = this.add.image(-58, -114, 'girl', 'MouthOpen').setName('mouth');
        const braidLeft = this.add.image(14, -74, 'girl', 'BraidLeft').setName('braidLeft');
        const braidRight = this.add.image(98, -72, 'girl', 'BraidRight').setName('braidRight');
        const armLeft = this.add.image(-48, -62, 'girl', 'ArmLeft').setName('armLeft').setOrigin(1, 0.5);
        const armRight = this.add.image(26, 28, 'girl', 'ArmRight').setName('armRight');
        const hand = this.add.image(18, 96, 'girl', 'HandRight').setName('hand');

        //  armLeft angle = -10 to 10

        girl.add([
            armLeft,
            body,
            braidLeft,
            braidRight,
            hair,
            head,
            eyes,
            mouth,
            armRight,
            hand
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
