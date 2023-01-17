class Example extends Phaser.Scene
{
    files = [];

    init ()
    {
        this.files.push('atari400');
        this.files.push('atari800');
        this.files.push('atari800xl');
        this.files.push('128x128');
        this.files.push('128x128-v2');
        this.files.push('a');
        this.files.push('advanced_wars_land');
        this.files.push('advanced_wars_tank');
        this.files.push('amiga-cursor');
        this.files.push('aqua_ball');
        this.files.push('arrow');
        this.files.push('arrows');
        this.files.push('asteroids_ship');
        this.files.push('asteroids_ship_white');
        this.files.push('asuna_by_vali233');
        this.files.push('atari1200xl');
        this.files.push('b');
        this.files.push('baddie_cat_1');
        this.files.push('balls');
        this.files.push('beball1');
        this.files.push('bikkuriman');
        this.files.push('block');
        this.files.push('blue_ball');
        this.files.push('bluebar');
        this.files.push('bluemetal_32x32x4');
        this.files.push('bobs-by-cleathley');
        this.files.push('bsquadron1');
        this.files.push('bsquadron2');
        this.files.push('bsquadron3');
        this.files.push('budbrain_chick');
        this.files.push('bullet');
        this.files.push('bunny');
        this.files.push('cakewalk');
        this.files.push('car');
        this.files.push('carrot');
        this.files.push('centroid');
        this.files.push('chain');
        this.files.push('chick');
        this.files.push('chunk');
        this.files.push('clown');
        this.files.push('coin');
        this.files.push('cokecan');
        this.files.push('columns-blue');
        this.files.push('columns-orange');
        this.files.push('columns-red');
        this.files.push('copy-that-floppy');
        this.files.push('crate');
        this.files.push('crate32');
        this.files.push('cursor-rotate');
        this.files.push('darkwing_crazy');
        this.files.push('default');
        this.files.push('diamond');
        this.files.push('dragcircle');
        this.files.push('drawcursor');
        this.files.push('dude');
        this.files.push('eggplant');
        this.files.push('elephant');
        this.files.push('enemy-bullet');
        this.files.push('exocet_spaceman');
        this.files.push('explosion');
        this.files.push('eyes');
        this.files.push('firstaid');
        this.files.push('flectrum');
        this.files.push('flectrum2');
        this.files.push('fork');
        this.files.push('fuji');
        this.files.push('gameboy_seize_color_40x60');
        this.files.push('gem');
        this.files.push('gem-blue-16x16x4');
        this.files.push('gem-green-16x16x4');
        this.files.push('gem-red-16x16x4');
        this.files.push('ghost');
        this.files.push('green_ball');
        this.files.push('healthbar');
        this.files.push('helix');
        this.files.push('hello');
        this.files.push('hotdog');
        this.files.push('humstar');
        this.files.push('ilkke');
        this.files.push('interference_ball_48x48');
        this.files.push('interference_tunnel');
        this.files.push('jets');
        this.files.push('kirito_by_vali233');
        this.files.push('lemming');
        this.files.push('loop');
        this.files.push('maggot');
        this.files.push('master');
        this.files.push('melon');
        this.files.push('mine');
        this.files.push('mouse_jim_sachs');
        this.files.push('mushroom');
        this.files.push('mushroom2');
        this.files.push('onion');
        this.files.push('orange-cat1');
        this.files.push('orange-cat2');
        this.files.push('orb-blue');
        this.files.push('orb-green');
        this.files.push('orb-red');
        this.files.push('oz_pov_melting_disk');
        this.files.push('palm-tree-left');
        this.files.push('palm-tree-right');
        this.files.push('pangball');
        this.files.push('parsec');
        this.files.push('particle1');
        this.files.push('pepper');
        this.files.push('phaser');
        this.files.push('phaser-dude');
        this.files.push('phaser-ship');
        this.files.push('phaser_tiny');
        this.files.push('phaser1');
        this.files.push('phaser2');
        this.files.push('pineapple');
        this.files.push('plane');
        this.files.push('platform');
        this.files.push('player');
        this.files.push('purple_ball');
        this.files.push('ra_dont_crack_under_pressure');
        this.files.push('rain');
        this.files.push('red_ball');
        this.files.push('rgblaser');
        this.files.push('saw');
        this.files.push('shinyball');
        this.files.push('ship');
        this.files.push('shmup-baddie');
        this.files.push('shmup-baddie-bullet');
        this.files.push('shmup-baddie2');
        this.files.push('shmup-baddie3');
        this.files.push('shmup-boom');
        this.files.push('shmup-bullet');
        this.files.push('shmup-ship');
        this.files.push('shmup-ship2');
        this.files.push('skull');
        this.files.push('snowflake-pixel');
        this.files.push('sonic');
        this.files.push('sonic_havok_sanity');
        this.files.push('soundtracker');
        this.files.push('space-baddie');
        this.files.push('space-baddie-purple');
        this.files.push('spaceman');
        this.files.push('speakers');
        this.files.push('spikedball');
        this.files.push('spinObj_01');
        this.files.push('spinObj_02');
        this.files.push('spinObj_03');
        this.files.push('spinObj_04');
        this.files.push('spinObj_05');
        this.files.push('spinObj_06');
        this.files.push('spinObj_07');
        this.files.push('spinObj_08');
        this.files.push('splat');
        this.files.push('steelbox');
        this.files.push('strip1');
        this.files.push('strip2');
        this.files.push('tetrisblock1');
        this.files.push('tetrisblock2');
        this.files.push('tetrisblock3');
        this.files.push('thrust_ship');
        this.files.push('thrust_ship2');
        this.files.push('tinycar');
        this.files.push('tomato');
        this.files.push('treasure_trap');
        this.files.push('tree-european');
        this.files.push('ufo');
        this.files.push('vu');
        this.files.push('wabbit');
        this.files.push('wasp');
        this.files.push('wizball');
        this.files.push('x2kship');
        this.files.push('xenon2_bomb');
        this.files.push('xenon2_ship');
        this.files.push('yellow_ball');
        this.files.push('zelda-hearts');
        this.files.push('zelda-life');
    }

    preload ()
    {
        this.load.setPath('assets/sprites/');

        this.load.on('filecomplete', this.showFile, this);

        this.load.image('atari130xe');
    }

    create ()
    {
    }

    showFile (key, type, texture)
    {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(0, 600);

        this.add.image(x, y, key);

        const nextFile = this.files.pop();

        if (nextFile)
        {
            this.load.image(nextFile);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
