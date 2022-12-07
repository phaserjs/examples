class Example extends Phaser.Scene
{
    graphics;
    text;
    curve;
    path;

    preload ()
    {
        this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
    }

    create ()
    {
        const sliderGraphics = this.add.graphics();

        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        this.curve = new Phaser.Curves.Ellipse(400, 300, 100, 150);

        this.createSlider(sliderGraphics, 100, 10, 'width', 500, 0, 400, 100, this.curve.setXRadius);
        this.createSlider(sliderGraphics, 100, 30, 'height', 500, 0, 300, 150, this.curve.setYRadius);
        this.createSlider(sliderGraphics, 100, 50, 'start', 500, 0, 360, 0, this.curve.setStartAngle);
        this.createSlider(sliderGraphics, 100, 70, 'end', 500, 0, 360, 360, this.curve.setEndAngle);
        this.createSlider(sliderGraphics, 100, 90, 'angle', 500, 0, 360, 0, this.curve.setRotation);

        const centerPoint = this.add.image(this.curve.p0.x, this.curve.p0.y, 'dragcircle', 0).setInteractive();
        centerPoint.setData('control', 'center').setData('vector', this.curve.p0);
        this.input.setDraggable(centerPoint);

        this.input.on('dragstart', (pointer, gameObject) =>
        {

            gameObject.setFrame(1);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            if (gameObject.data.get('control') === 'center')
            {
                gameObject.x = dragX;
                gameObject.y = dragY;

                gameObject.data.get('vector').set(dragX, dragY);
            }

        });

        this.input.on('dragend', (pointer, gameObject) =>
        {

            gameObject.setFrame(0);

        });

        this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Linear',
            duration: 4000,
            repeat: -1
        });

        //  Debug graphics
        this.graphics = this.add.graphics();
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(2, 0xffffff, 1);

        this.curve.draw(this.graphics, 64);

        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xffff00, 1);
        this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);
    }

    createSlider (graphics, x, y, label, width, min, max, value, callback)
    {
        //  Default value
        value = Phaser.Math.Clamp(value, min, max);

        graphics.lineStyle(1, 0xffffff, 1);
        graphics.lineBetween(x, y + 8, x + width, y + 8);

        const text = this.add.text(x - 10, y, `${label}:`, { font: '16px Courier', fill: '#00ff00' }).setOrigin(1, 0);
        const textValue = this.add.text(x + width + 10, y, value.toFixed(2), { font: '16px Courier', fill: '#00ff00' });

        const image = this.add.image(x, y + 8, 'dragcircle', 0).setInteractive();

        image.setData('labelValue', textValue);

        image.setData('left', x);
        image.setData('right', x + width);

        this.input.setDraggable(image);

        //  Drag limits

        image.setData('label', label);

        //  The range the control is allowed to be within (the actual values, not the percentage or pixels)
        image.setData('min', min);
        image.setData('max', max);
        image.setData('value', value);

        //  The scale is how many pixels = 1 unit of range
        const scale = max / width;

        image.setData('scale', scale);

        const p = Phaser.Math.Percent(value, min, max);

        // console.log('width', width);
        // console.log('min', min);
        // console.log('max', max);
        // console.log('value', value, 'p:', p, '%');
        // console.log('scale', scale);

        image.x += p * width;

        image.setData('callback', callback);

        image.on('drag', function (pointer, dragX, dragY)
        {

            const min = this.getData('min');
            const max = this.getData('max');
            const scale = this.getData('scale');
            const left = this.getData('left');
            const right = this.getData('right');

            dragX = Phaser.Math.Clamp(dragX, left, right);

            this.x = dragX;

            //  Calculate the value
            const value = (dragX - left) * scale;

            this.setData('value', value);

            this.getData('labelValue').setText(value.toFixed(2));

            const callback = this.getData('callback');

            callback.call(this.curve, value);

        });

        // this.input.setOnDragCallback(image, updateSlider, this);
    }

    updateSlider (handle, pointer, dragX, dragY)
    {
        const min = handle.getData('min');
        const max = handle.getData('max');
        const scale = handle.getData('scale');
        const left = handle.getData('left');
        const right = handle.getData('right');

        dragX = Phaser.Math.Clamp(dragX, left, right);

        handle.x = dragX;

        //  Calculate the value
        const value = (dragX - left) * scale;

        handle.setData('value', value);

        handle.getData('labelValue').setText(value.toFixed(2));

        const callback = handle.getData('callback');

        callback.call(this.curve, value);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
