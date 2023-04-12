/**
 * Create a card game object
 */
export const createCard = ({
    scene,
    x,
    y,
    frontTexture,
    cardName
}) => {

    let isFlipping = false;
    const rotation = { y: 0 };

    const backTexture = "card-back";

    const card = scene.add.plane(x, y, backTexture)
        .setName(cardName)
        .setInteractive();

    // start with the card face down
    card.modelRotationY = 180;

    const flipCard = (callbackComplete) => {
        if (isFlipping) {
            return;
        }
        scene.add.tween({
            targets: [rotation],
            y: (rotation.y === 180) ? 0 : 180,
            ease: Phaser.Math.Easing.Expo.Out,
            duration: 500,
            onStart: () => {
                isFlipping = true;
                scene.sound.play("card-flip");
                scene.tweens.chain({
                    targets: card,
                    ease: Phaser.Math.Easing.Expo.InOut,
                    tweens: [
                        {
                            duration: 200,
                            scale: 1.1,
                        },
                        {
                            duration: 300,
                            scale: 1
                        },
                    ]
                })
            },
            onUpdate: () => {
                // card.modelRotation.y = Phaser.Math.DegToRad(180) + Phaser.Math.DegToRad(rotation.y);
                card.rotateY = 180 + rotation.y;
                const cardRotation = Math.floor(card.rotateY) % 360;
                if ((cardRotation >= 0 && cardRotation <= 90) || (cardRotation >= 270 && cardRotation <= 359)) {
                    card.setTexture(frontTexture);
                }
                else {
                    card.setTexture(backTexture);
                }
            },
            onComplete: () => {
                isFlipping = false;
                if (callbackComplete) {
                    callbackComplete();
                }
            }
        });
    }

    const destroy = () => {
        scene.add.tween({
            targets: [card],
            y: card.y - 1000,
            easing: Phaser.Math.Easing.Elastic.In,
            duration: 500,
            onComplete: () => {
                card.destroy();
            }
        })
    }

    return {
        gameObject: card,
        flip: flipCard,
        destroy,
        cardName
    }
}
