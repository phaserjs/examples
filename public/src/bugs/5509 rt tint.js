class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brain', 'assets/sprites/beer.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(200, 300, 256, 256);

        const sprite = this.add.image(400, 300, 'brain');

        sprite.setTint(0xff0000);

        rt.fill(0x00ff00);

        rt.draw('brain', 0, 0, 1, 0xff0000);
        rt.draw(sprite, 128, 128);
    }
}

new Phaser.Game({
  width: 800,
  height: 600,
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  scene: Example
});
