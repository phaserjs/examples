import Tomato from './Tomato.js';
import Bombs from './TomBombs.js';
import TomatoItem from './TomatoItem.js';

/**
 * In this fast-paced game, you play as a character on a mission to collect ripe tomatoes while avoiding bombs with spikes. With just one screen to play on, you must use quick reflexes and strategic thinking to dodge the bombs and collect as many tomatoes as you can. Each tomato you collect earns you points, but watch out! If you collide with a bomb with spikes, you'll lose a life. The goal is to collect as many tomatoes as possible while avoiding bombs and preserving your lives. Can you make it to the end of the game with all your lives intact and become the ultimate tomato-collecting champion? Play now and find out!
 * Game created by Francisco Pereira (Gammafp)
 * - PixelArt created by @VeryEvilTomato
 */

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
