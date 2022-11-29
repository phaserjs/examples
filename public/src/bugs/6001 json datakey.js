const data = {
    test1: {
        files: [
            {
                type: 'image',
                key: 'beer',
                url: 'assets/sprites/beer.png'
            },
            {
                type: 'image',
                key: 'donut',
                url: 'assets/sprites/donut.png'
            },
        ]
    },
    test2: {
        files: [
            {
                type: 'image',
                key: 'ginger',
                url: 'assets/sprites/gingerbread.png'
            },
            {
                type: 'image',
                key: 'hotdog',
                url: 'assets/sprites/hotdog.png'
            },
        ]
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.pack('pack', data);
        this.load.pack('pack', data, 'test1');
        // this.load.json('bob', data, 'test2');
    }

    create ()
    {
        // console.log(this.cache.json.get('bob'));

        this.add.image(400, 300, 'beer');
        // this.add.image(400, 300, 'hotdog');
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
