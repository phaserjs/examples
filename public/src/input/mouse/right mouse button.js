var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprites/phaser.png');
    this.load.image('asuna', 'assets/sprites/asuna_by_vali233.png');
    this.load.image('disk', 'assets/sprites/oz_pov_melting_disk.png');
    this.load.image('tree', 'assets/sprites/palm-tree-left.png');
}

function create ()
{
    this.input.mouse.disableContextMenu();

    this.input.on('pointerup', function (pointer) {

        console.log(pointer.upTime - pointer.downTime + 'ms');

        if (pointer.rightButtonDown())
        {
            if (pointer.upTime - pointer.downTime > 500)
            {
                this.add.image(pointer.x, pointer.y, 'disk');
            }
            else
            {
                this.add.image(pointer.x, pointer.y, 'asuna');
            }
        }
        else
        {
            if (pointer.upTime - pointer.downTime > 500)
            {
                this.add.image(pointer.x, pointer.y, 'tree');
            }
            else
            {
                this.add.image(pointer.x, pointer.y, 'logo');
            }
        }

    }, this);
}
