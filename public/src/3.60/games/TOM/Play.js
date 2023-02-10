import Tomato from '../Player/Tomato.js';
import Bombs from '../Objects/Bombs.js';
import TomatoItem from '../Objects/TomatoItem.js';

class Play extends Phaser.Scene
{
    constructor ()
    {
        super({key: 'Play'});
    }

    init ()
    {
        this.scene.launch('UI');
    }

    create ()
    {
        this.add.image(0, 0, 'background')
            .setOrigin(0);

        this.wall_floor = this.physics.add.staticGroup();

        this.wall_floor.create(0, 0, 'wall')
            .setOrigin(0);
        this.wall_floor.create(this.scale.width, 0, 'wall')
            .setOrigin(1, 0)
            .setFlipX(true);

        this.wall_floor.create(0, this.scale.height, 'floor')
            .setOrigin(0, 1);

        this.wall_floor.refresh();

        this.wall_floor.getChildren()[2].setOffset(0, 15);

        // Bombs
        this.bombsGroup = new Bombs({
            physicsWorld: this.physics.world,
            scene: this
        });

        // Items
        this.itemsGroup = new TomatoItem({
            physicsWorld: this.physics.world,
            scene: this
        });

        // Personaje
        this.tomato = new Tomato({
            scene: this,
            x: 100,
            y: 100,
        });

        this.physics.add.collider([this.tomato, this.bombsGroup], this.wall_floor);
        this.physics.add.overlap(this.tomato, this.bombsGroup, () => {
            this.tomato.bombCollision();
        });

        this.physics.add.overlap(this.itemsGroup, this.tomato, () => {
            this.sound.play('pop');
            this.registry.events.emit('update_points');
            this.itemsGroup.destroyItem();
            this.bombsGroup.addBomb();
        });
    }

    update ()
    {
        this.tomato.update();
        this.bombsGroup.update();
    }
}

export default Play;
