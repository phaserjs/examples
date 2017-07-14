var sceneConfig = {
    create: create,
    files: [
        { type: 'image', key: 'contra', url: 'assets/pics/contra3.png' }
    ]
};

var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: sceneConfig
};

var game = new Phaser.Game(config);

function create() {

    var EnemyRobot = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function EnemyRobot (scene, x, y)
        {
            Phaser.GameObjects.Image.call(this, scene);

            this.setTexture('contra');
            this.setPosition(x, y);
            this.setScale(2);
        }

    });

    this.children.add(new EnemyRobot(this, 64, 64));
    this.children.add(new EnemyRobot(this, 264, 150));
    this.children.add(new EnemyRobot(this, 400, 364));

}
