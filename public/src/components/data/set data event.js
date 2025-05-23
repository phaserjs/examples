class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('gem', 'assets/sprites/gem.png');
    }

    create ()
    {
        const text = this.add.text(350, 250, '', { font: '16px Courier', fill: '#00ff00' });
        const text2 = this.add.text(30, 30, '', { font: '16px Courier', fill: '#00ff00' });

        const list = [ 'Gem Data:', '' ];
        const gem = this.add.image(300, 300, 'gem');

        //  Store some data about this Gem:
        gem.setDataEnabled();

        //  Whenever a data value is first set it will dispatch a setdata event
        gem.on('setdata', function (gameObject, key, value) {
            list.push(key);
            text2.setText(list);
        });

        gem.data.set('name', 'Red Gem Stone');
        gem.data.set('level', 2);
        gem.data.set('owner', 'Link');

        //  Whenever a data value is updated it will dispatch a changedata event
        gem.on('changedata', function (gameObject, key, value) {
            text.setText([
                'Name: ' + gem.data.get('name'),
                'Level: ' + gem.data.get('level'),
                'Value: ' + gem.data.get('gold') + ' gold',
                'Owner: ' + gem.data.get('owner')
            ]);

        });

        //  Change the 'value' property when the mouse is clicked
        this.input.on('pointerdown', function () {
            const gold = gem.data.get('gold');
            if (!gold)
            {
                //  Set the value, this will emit the `setdata` and `changedata` events
                gem.data.set('gold', 50);

                text.setText([
                    'Name: ' + gem.data.get('name'),
                    'Level: ' + gem.data.get('level'),
                    'Value: ' + gem.data.get('gold') + ' gold',
                    'Owner: ' + gem.data.get('owner')
                ]);
            }
            else
            {
                //  Set the value, this will call the 'after' callback
                gem.data.set('gold', gold + 50);
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
