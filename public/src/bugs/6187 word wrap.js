class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        var messages = [ 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet', 'Test 1', 'Test 2', 'Test 3' ];

        var textStyle = {
            wordWrap: { width: 385, useAdvancedWrap: true }
        };

        var text = this.add.text(0, 0, '', textStyle);

        text.setText(messages.join('\n'));
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Example
};

const game = new Phaser.Game(config);
