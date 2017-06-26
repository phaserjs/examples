var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('phaser', 'assets/sprites/phaser.png');
    this.load.image('atari', 'assets/sprites/atari400.png');
    this.load.image('bikku', 'assets/sprites/bikkuriman.png');
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('can', 'assets/sprites/cokecan.png');
}

function create ()
{
    var group = this.add.group();

    group.create(230, 200, 'atari');
    group.create(400, 200, 'phaser');
    group.create(480, 200, 'bikku');
    group.create(540, 200, 'block');
    group.create(600, 200, 'can');

    var sys = this.sys;

    document.addEventListener('mousedown', function () {

        console.log('--- shuffle ------------------------');

        Phaser.Utils.Array.Shuffle(group.children.entries);

        // group.create(Phaser.Math.Between(0, 800), 500, 'phaser');

        sys.sortChildrenFlag = true;

        // group.children.entries.forEach(function(s) {
            // console.log(s.texture.key);
        // });

    });

}
