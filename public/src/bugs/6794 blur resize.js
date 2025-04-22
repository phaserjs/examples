class GameScene extends Phaser.Scene {

	preload() {
  }
  
  create() {
 		const poly = new Phaser.Geom.Polygon();
    poly.setTo([ new Phaser.Math.Vector2(200, 100), new Phaser.Math.Vector2(350, 100), new Phaser.Math.Vector2(375, 200), new Phaser.Math.Vector2(150, 200) ]);
    const graphics = this.add.graphics();
    graphics.postFX.addBlur();
		const blackOverlay = this.add.graphics();
    blackOverlay.fillStyle(0x000000, 1);
    blackOverlay.fillRect(0,0, 1000,1000);
      

    graphics.lineStyle(5, 0xFFFFFF);
    graphics.fillStyle(0xFFFFFF);
    graphics.fillPoints(poly.points, true);
       
    let mask = new Phaser.Display.Masks.BitmapMask(this, graphics);
    mask.invertAlpha = true;
    blackOverlay.setMask(mask);
  }
}

new Phaser.Game({
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  scene: [GameScene],
  parent: 'phaser-example',
  scale: {
    mode: Phaser.Scale.RESIZE,
  },
});