class Bombs extends Phaser.Physics.Arcade.Group {
    constructor(config) {
        super(config.physicsWorld, config.scene);
        this.addBomb();
    }

    addBomb() {
        this.create(
            Phaser.Math.Between(40, this.scene.scale.width - 40)
            , -10, 'bomb')
            .setDepth(2)
            .setBounce(1)
            .setCircle(18)
            .setVelocityX(
                (Phaser.Math.Between(0, 1)) ? 100 : -100
            )
            .setGravityY(-1800);
    }

    update() {
        this.children.iterate( bomb => {
            if(bomb.body.velocity.x < 0) {
                bomb.setAngularVelocity(-300);
            } else {
                bomb.setAngularVelocity(300);
            }
        });
    }
}

export default Bombs;