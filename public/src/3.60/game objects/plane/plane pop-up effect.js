/**
 * Effect inspired by Gayane Gasparyan (https://codepen.io/gayane-gasparyan/pen/wvxewXO)
 */

class Card extends Phaser.GameObjects.Plane
{
    title;
    character;
    constructor (scene, x, y, texture, options)
    {
        super(scene, x, y, texture);

        this.scene.add.existing(this);

        // Character
        this.character = scene.add.image(x, y, options.characterTexture).setAlpha(0);
        // Title
        this.title = scene.add.image(x, y + 100, options.titleTexture);

    }

    moveCard ()
    {
        this.scene.add.tween({
            targets: this,
            duration: 300,
            rotateX: -35,
            onStart: () => {
                // Title movement
                this.scene.add.tween({
                    targets: this.title,
                    duration: 300,
                    y: this.y + 80
                });
                // Character movement
                this.scene.add.tween({
                    targets: this.character,
                    duration: 300,
                    y: this.y - 50,
                    alpha: 1

                });

                this.scene.tweens.addCounter({
                    from: 255,
                    to: 100,
                    duration: 300,
                    onUpdate: (tween) => {
                        const value = Math.floor(tween.getValue());
                        this.setTint(Phaser.Display.Color.GetColor(value, value, value));
                    }
                })
            }
        });
    }

    restoreMove ()
    {
        this.scene.add.tween({
            targets: this,
            duration: 300,
            rotateX: 0,
            onStart: () => {
                // Title movement
                this.scene.add.tween({
                    targets: this.title,
                    duration: 300,
                    y: this.y + 100
                });

                // Character movement
                this.scene.add.tween({
                    targets: this.character,
                    duration: 300,
                    y: this.y,
                    alpha: 0

                });

                this.scene.tweens.addCounter({
                    from: 100,
                    to: 255,
                    duration: 300,
                    onUpdate: (tween) => {
                        const value = Math.floor(tween.getValue());
                        this.setTint(Phaser.Display.Color.GetColor(value, value, value));
                    }
                })
            }
        });
    }
}


class Example extends Phaser.Scene
{

    preload ()
    {
        this.load.setPath("assets/sprites/plane-pop-up-effect/");

        this.load.image("dark_rider-character");
        this.load.image("dark_rider-cover", "dark_rider-cover.png");
        this.load.image("dark_rider-title", "dark_rider-title.png");

        this.load.image("force_mage-character", "force_mage-character.png");
        this.load.image("force_mage-cover", "force_mage-cover.png");
        this.load.image("force_mage-title", "force_mage-title.png");

    }

    create ()
    {
        let previouseCard = null;
        const planes = [
            new Card(this, 200, this.scale.height - 300, "dark_rider-cover", {
                titleTexture: "dark_rider-title",
                characterTexture: "dark_rider-character"
            }),
            new Card(this, 600, this.scale.height - 300, "force_mage-cover", {
                titleTexture: "force_mage-title",
                characterTexture: "force_mage-character"
            })
        ];

        this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer) => {
            const { x, y } = pointer;
            const card = planes.find(card => card.hasFaceAt(x, y));

            if (card) {
                if (!previouseCard && previouseCard !== card) {
                    card.moveCard();
                    previouseCard = card;

                }
            } else {
                if (previouseCard) {
                    const card = previouseCard;
                    card.restoreMove();
                    previouseCard = null;
                }
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
