class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        const debug = this.add.text(32, 96);

        debug.setText([
            'Pipeline: ' + debug.getPipelineName(),
            'Desktop?: ' + this.game.device.os.desktop,
            'iOS?: ' + this.game.device.os.iOS,
            'iOSVersion?: ' + this.game.device.os.iOSVersion,
            'iPad?: ' + this.game.device.os.iPad,
            'iPhone?: ' + this.game.device.os.iPhone,
            'macOS?: ' + this.game.device.os.macOS,
            'windows?: ' + this.game.device.os.windows,
        ]);
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#02023d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
