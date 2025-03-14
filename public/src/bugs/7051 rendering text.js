class MainScene extends Phaser.Scene
{

    constructor()
    {
        super({ key: "MainScene" });
    }

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        // render out the player health bar
        const playerMonsterName = this.add.text(30, 20, 'IGUANIGNITE', {
            color: '#7E3D3F',
            fontSize: '32px',
        });
        this.add.container(556, 318, [
            this.add.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0),
            playerMonsterName,
            this.add.text(30, 55, 'HP', { // this line
                color: '#FF6505',
                fontSize: '24px',
                fontStyle: 'italic',
            }),
            this.add.text(playerMonsterName.width + 35, 23, 'L5', {
                color: '#ED474B',
                fontSize: '28px',
            }),
            this.add
                .text(443, 80, '25/25', {
                    color: '#7E3D3F',
                    fontSize: '16px',
                })
                .setOrigin(1, 0),
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ MainScene ]
};

const game = new Phaser.Game(config);