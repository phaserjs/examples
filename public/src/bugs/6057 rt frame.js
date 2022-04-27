const USE_WEBGL = false; // Change to `true` to see bugs

new Phaser.Game({
  width: 2048,
  height: 524,
  type: USE_WEBGL ? Phaser.WEBGL : Phaser.CANVAS,
  backgroundColor: 0xFFFFFF,
  parent: 'phaser-example',
  scene: {
    preload: function () {
      this.load.image('mario', 'https://i.imgur.com/nKgMvuj.png');
    },
    create: function () {
      const origin = this.add.renderTexture(0, 0, 512, 512);
      // Add content
      origin.draw('mario', 0, 0);
      // Fill colors for quickly seeing what is out of order
      const sqSize = 512 / 4;

      // Use a 'cursor' instead of `fill` because of a canvas bug
      const cursor = this.add.rectangle(0,0,sqSize, sqSize, 0xFFFFFF, 0.33).setOrigin(0,0);
      cursor.setFillStyle(0xff0000, 0.33);
      origin.draw(cursor, 0,0);
      cursor.setFillStyle(0x00ff00, 0.33);
      origin.draw(cursor, sqSize,0);
      cursor.setFillStyle(0x0000ff, 0.33);
      origin.draw(cursor, 0,sqSize);
      cursor.setFillStyle(0xff00ff, 0.33);
      origin.draw(cursor, sqSize,sqSize);
      cursor.destroy();


      // Draw numbers so it's clear when frames are in the wrong spot
      const text = this.add.text(0,0,'1', {stroke: '#000', strokeThickness: 4, color: '#fff', fontSize: 24}).setOrigin(0,0);
      origin.draw(text, 0, 0);
      text.setText('2');
      origin.draw(text, sqSize, 0);
      text.setText('3');
      origin.draw(text, 0, sqSize);
      text.setText('4');
      origin.draw(text, sqSize, sqSize);
      text.destroy();

      // Save texture for key reference later
      origin.saveTexture('test-texture');

      // Set a 256x256 frame at 0,0 (the entire image)
      origin.texture.add('entire-image', 0, 0, 0, sqSize+sqSize, sqSize+sqSize);

      // Add a frame for each quadrant
      origin.texture.add('square-1', 0, 0, 0, sqSize, sqSize);
      origin.texture.add('square-2', 0, sqSize, 0, sqSize, sqSize);
      origin.texture.add('square-3', 0, 0, sqSize, sqSize, sqSize);
      origin.texture.add('square-4', 0, sqSize, sqSize, sqSize, sqSize);
      this.add.text(0, sqSize * 2, 'Original (RT)', {color: '#000', fontSize: 24}).setOrigin(0,0);

      // ----------- Test cases ------------------

      let offset = 256 + 10;
      // `Image`
      this.add.text(offset, sqSize * 2, 'Image', {color: '#000', fontSize: 24}).setOrigin(0,0);
      [
        ['square-1', 0, 0],
        ['square-2', sqSize, 0],
        ['square-3', 0, sqSize],
        ['square-4', sqSize, sqSize]
      ].forEach(([frame, x, y])=>{
        this.add.image(offset + x, y, 'test-texture', frame).setOrigin(0,0);
      });


      offset = (256 * 2) + (10 * 2);

      // `Blitter`
      this.add.text(offset, sqSize * 2, 'Blitter', {color: '#000', fontSize: 24}).setOrigin(0,0);
      const blitter = this.add.blitter(0, 0, 'test-texture');
      [
        ['square-1', 0, 0],
        ['square-2', sqSize, 0],
        ['square-3', 0, sqSize],
        ['square-4', sqSize, sqSize]
      ].forEach(([frame, x, y])=>{
        blitter.create(offset + x, y, frame);
      });

      offset = (256 * 3) + (10 * 3);

      // `Sprite`
      this.add.text(offset, sqSize * 2, 'Sprite', {color: '#000', fontSize: 24}).setOrigin(0,0);
      [
        ['square-1', 0, 0],
        ['square-2', sqSize, 0],
        ['square-3', 0, sqSize],
        ['square-4', sqSize, sqSize]
      ].forEach(([frame, x, y])=>{
        this.add.sprite(offset + x, y, 'test-texture', frame).setOrigin(0,0);
      });


      offset = (256 * 4) + (10 * 4);

      // `RenderTexture`
      this.add.text(offset, sqSize * 2, 'RT.drawFrame',  {color: '#000', fontSize: 24}).setOrigin(0,0);
      const target = this.add.renderTexture(offset, 0, 512, 512);
      [
        ['square-1', 0, 0],
        ['square-2', sqSize, 0],
        ['square-3', 0, sqSize],
        ['square-4', sqSize, sqSize]
      ].forEach(([frame, x, y])=>{
        target.drawFrame('test-texture', frame, x, y);
      });
    }
  }
});
