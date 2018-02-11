var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    this.input.setDraggable(sprite);

    window.scene = this;

    
    this.input.on('dragstart', function () {

        console.log('Drag Start Event');

    });

    this.input.on('drag', function (pointer, gameObject,dragX,dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragend', function () {

        console.log('Drag End Event');

    });
    

    this.input.on('pointerover', function (pointer,gameObject) {

        console.log('Pointer Over Event');

        Phaser.Actions.SetTint(gameObject,0xff0000);

    });

    this.input.on('pointerout', function (pointer,gameObject) {

        console.log('Pointer Out Event');

        if (!gameObject.isDragged){
            Phaser.Actions.SetTint(gameObject,0xffffff);
        }

    });
}
