const defaultTrack = {
    emptyFrame: '',
    fullFrame: '',
    x: 0,
    y: 0,
    enableJump: true,
    jumpDuration: 500,
    jumpEase: 'power1'
};

const defaultSlider = {
    upFrame: '',
    downFrame: '',
    x: 0,
    y: 0,
    left: 0,
    right: 0,
    width: 32,
    height: 32
};

const defaultNotches = {
    frame: '',
    x: 0,
    y: 0
};

/**
 * The UI Horizontal Slider Component.
 * 
 * This class extends a Container, meaning you can position, scale and rotate the slider
 * as required to fit the style of your game.
 * 
 * Use the configuration object to set the default values.
 * 
 * Listen for the `update` event from ths component to know when the slider has been moved.
 *
 * @export
 * @class HorizontalSlider
 * @extends {Phaser.GameObjects.Container}
 */
export default class HorizontalSlider extends Phaser.GameObjects.Container
{
    constructor ({
        scene,
        texture = '',
        track = {},
        slider = {},
        notches = {},
        x = 0,
        y = 0,
        min = 0,
        max = 100,
        current = 0,
        snap = 0,
        originX = 0.5,
        originY = 0.5
    })
    {
        super(scene, x, y);

        if (typeof track === 'string')
        {
            track = { emptyFrame: track, fullFrame: track };
        }

        if (typeof slider === 'string')
        {
            slider = { upFrame: slider };
        }

        if (typeof notches === 'string')
        {
            notches = { frame: notches };
        }

        if (track.hasOwnProperty('frame'))
        {
            track.emptyFrame = track.frame;
            track.fullFrame = track.frame;
        }

        //  Build up the config objects
        track = Phaser.Utils.Objects.MergeRight(defaultTrack, track);
        slider = Phaser.Utils.Objects.MergeRight(defaultSlider, slider);
        notches = Phaser.Utils.Objects.MergeRight(defaultNotches, notches);

        this.config = {
            track,
            slider,
            notches
        };

        this.enabled = false;
        this.slideTween = null;

        let clampedCurrent = Phaser.Math.Clamp(current, min, max);

        this.values = {
            min: min,
            max: max,
            current: clampedCurrent,
            percent: Phaser.Math.Percent(clampedCurrent, min, max),
            target: 0,
            snap: snap
        };

        this.enableTrackJump = track.enableJump;
        this.jumpDuration = track.jumpDuration;
        this.jumpEase = track.jumpEase;

        if (notches.frame !== '')
        {
            this.notches = scene.add.image(notches.x, notches.y, texture, notches.frame).setOrigin(0);

            this.add(this.notches);
        }

        this.trackEmpty = scene.add.image(track.x, track.y, texture, track.emptyFrame).setOrigin(0);
        this.trackFull = scene.add.image(track.x, track.y, texture, track.fullFrame).setOrigin(0);

        if (slider.upFrame !== '')
        {
            this.slider = scene.add.image(slider.x, slider.y, texture, slider.upFrame).setOrigin(0);
        }
        else
        {
            slider.height = this.trackEmpty.height;

            slider.x = 0;
            slider.y = track.y + (this.trackEmpty.height / 2) - (slider.height / 2);
            slider.left = -(slider.width / 2);
            slider.right = this.trackEmpty.width - (slider.width / 2);

            this.slider = scene.add.rectangle(slider.x, slider.y, slider.width, slider.height, 0xff0000).setOrigin(0).setVisible(false);
        }

        this.sliderUpFrame = slider.upFrame;
        this.sliderDownFrame = (slider.downFrame !== '') ? slider.downFrame : slider.upFrame;

        this.add([ this.trackEmpty, this.trackFull, this.slider ]);

        scene.add.existing(this);

        this.cropRect = new Phaser.Geom.Rectangle(0, 0, 0, this.trackFull.height);

        this.trackFull.setCrop(this.cropRect);

        this.slider.setInteractive({ draggable: true });

        this.slider.input.alwaysEnabled = true;

        this.sliderLeft = slider.left;
        this.sliderRight = (slider.right > 0) ? slider.right : this.trackEmpty.width - this.slider.width;
        this.sliderRange = this.sliderRight - this.sliderLeft;

        this.sliderWidth = this.slider.width / 2;

        if (this.enableTrackJump)
        {
            const hitRect = new Phaser.Geom.Rectangle(0, 0, this.trackEmpty.width, this.trackEmpty.height);

            this.setInteractive(hitRect, Phaser.Geom.Rectangle.Contains);
        }

        this._originX = 0;
        this._originY = 0;

        this.setOrigin(originX, originY);

        this.setSliderByValue(current);

        this.start();
    }

    /**
     * Start all the event listeners running on this component.
     * 
     * By default the slider will listen for input events, but if you disable those, by calling
     * the `stop` method, then use this method to re-enable them again.
     *
     * @returns
     * @memberof HorizontalSlider
     */
    start ()
    {
        if (!this.enabled)
        {
            this.slider.on('dragstart', this.onDragStart, this);
            this.slider.on('drag', this.onDrag, this);
            this.slider.on('dragend', this.onDragEnd, this);
    
            if (this.enableTrackJump)
            {
                this.on('pointerdown', this.trackJump, this);
            }

            this.enabled = true;
        }

        return this;
    }

    /**
     * Stops all the event listeners running on this component.
     * 
     * You can re-enable them again by calling the `start` method.
     *
     * @returns
     * @memberof HorizontalSlider
     */
    stop ()
    {
        if (this.enabled)
        {
            this.slider.off('dragstart', this.onDragStart, this);
            this.slider.off('drag', this.onDrag, this);
            this.slider.off('dragend', this.onDragEnd, this);

            if (this.enableTrackJump)
            {
                this.off('pointerdown', this.trackJump, this);
            }
            
            this.enabled = false;
        }

        return this;
    }

    /**
     * Sets the origin of this Button.
     * 
     * The values are given in the range 0 to 1.
     *
     * @param {number} [x=0.5] - The horizontal origin value.
     * @param {*} [y=x] - The vertical origin value.
     * @returns
     * @memberof Button
     */
    setOrigin (x = 0.5, y = x)
    {
        if (x === this._originX && y === this._originY)
        {
            return this;
        }

        this._originX = x;
        this._originY = y;

        //  Origin displacement is based on the trackEmpty game object only
        const width = this.trackEmpty.displayWidth;
        const height = this.trackEmpty.displayHeight;

        const offsetX = -(width * x);
        const offsetY = -(height * y);

        const notches = this.config.notches;
        const track = this.config.track;
        const slider = this.config.slider;

        this.trackEmpty.setPosition(offsetX + track.x, offsetY + track.y);
        this.trackFull.setPosition(offsetX + track.x, offsetY + track.y);

        this.slider.setPosition(offsetX + slider.x, offsetY + slider.y);

        this.sliderLeft = offsetX + slider.left;
        this.sliderRight = (slider.right > 0) ? offsetX + slider.right : offsetX + (width - this.slider.displayWidth);
        this.sliderRange = this.sliderRight - this.sliderLeft;

        if (this.enableTrackJump)
        {
            this.input.hitArea.setPosition(offsetX + track.x, offsetY + track.y);
        }

        if (this.notches)
        {
            this.notches.setPosition(offsetX + notches.x, offsetY + notches.y);
        }

        return this;
    }

    /**
     * Internal input handler.
     *
     * @private
     * @memberof HorizontalSlider
     */
    onDragStart ()
    {
        if (this.sliderDownFrame !== '')
        {
            this.slider.setFrame(this.sliderDownFrame);
        }
    }

    /**
     * Internal input handler.
     * 
     * @private
     * @memberof HorizontalSlider
     */
    onDragEnd ()
    {
        if (this.sliderUpFrame !== '')
        {
            this.slider.setFrame(this.sliderUpFrame);
        }

        if (!this.slideTween || (this.slideTween && !this.slideTween.isPlaying()))
        {
            this.emit('complete', this, this.values.current, this.values.percent);
        }
    }

    /**
     * Internal input handler.
     * 
     * @private
     * @param {*} pointer
     * @param {*} x
     * @memberof HorizontalSlider
     */
    onDrag (pointer, x)
    {
        x = Phaser.Math.Clamp(x, this.sliderLeft, this.sliderRight);

        this.setSlider(Phaser.Math.Percent(x, this.sliderLeft, this.sliderRight));
    }

    /**
     * Internal input handler for when the user clicks on the slider track.
     * 
     * @private
     * @param {*} pointer
     * @param {*} x
     * @memberof HorizontalSlider
     */
    trackJump (pointer, x)
    {
        //  Center slider on the click
        x = Phaser.Math.Clamp(x - this.sliderWidth, this.sliderLeft, this.sliderRight);

        const p = Phaser.Math.Percent(x, this.sliderLeft, this.sliderRight);

        if (this.jumpDuration > 0)
        {
            //  Work out how long the tween should be based on distance to travel
            const diff = Math.abs(p - this.values.percent);
            const duration = this.jumpDuration * diff;

            this.setSlider(p, duration, this.jumpEase);
        }
        else
        {
            this.setSlider(p);
        }
    }

    /**
     * Internal tween method.
     * Do not call this directly
     * 
     * @private
     * @param {number} [duration=0]
     * @param {string} [ease='linear']
     * @memberof HorizontalSlider
     */
    setTween (duration = 0, ease = 'linear')
    {
        const values = this.values;

        if (this.slideTween && this.slideTween.isPlaying())
        {
            this.slideTween.stop();
        }

        if (duration > 0)
        {
            this.slideTween = this.scene.tweens.add({
                targets: values,
                current: values.target,
                duration: duration,
                ease: ease,
                onUpdate: () => {
                    this.updateSlider();
                },
                onComplete: () => {
                    this.emit('complete', this, values.current, values.percent);
                }
            });
        }
        else
        {
            //  There's no tween, so we just set the current value immediately
            this.values.current = this.values.target;
        }
    }

    /**
     * Returns the current percentage of the slider.
     * A value between 0 and 1.
     *
     * @returns
     * @memberof HorizontalSlider
     */
    getValue ()
    {
        return this.values.percent;
    }

    /**
     * Returns the current value of the slider.
     *
     * @returns
     * @memberof HorizontalSlider
     */
    getCurrentValue ()
    {
        return this.values.current;
    }

    /**
     * Internal method that sets the value of the slider.
     * Do not call this directly.
     * 
     * @private
     * @param {number} value
     * @memberof HorizontalSlider
     */
    setValue (value)
    {
        const values = this.values;

        if (values.snap !== 0)
        {
            value = Phaser.Math.Snap.Floor(value, values.snap);

            //  Re-clamp in case snapped out of range
            value = Phaser.Math.Clamp(value, values.min, values.max);
        }

        values.target = value;
    }

    /**
     * Set the slider to the given percentage. The value should be between 0 and 1.
     * If you wish to set the slider based on a value between min/max instead, see the `setSliderByValue` method.
     * 
     * You can optionally tween the slider by specifying a duration and an ease.
     * This will cause the slider to 'slide' from its current position to its new position based on the value given.
     *
     * @param {number} percent - The percentage to set the slider to. Between 0 and 1.
     * @param {number} [duration=0] - The duration of the slider tween in ms. Leave as zero to set immediately with no tween.
     * @param {string} [ease='linear'] - The type of ease the tween will use, i.e. 'linear', 'sine.in', 'power3', etc.
     * @returns
     * @memberof HorizontalSlider
     */
    setSlider (percent, duration = 0, ease = 'linear')
    {
        this.setValue(Phaser.Math.FromPercent(percent, this.values.min, this.values.max));

        this.setTween(duration, ease);

        return this.updateSlider();
    }

    /**
     * Set the slider to the given value. The value should be between the sliders allowed min and max range.
     * If you wish to set the slider based on a percentage instead, see the `setSlider` method.
     * 
     * You can optionally tween the slider by specifying a duration and an ease.
     * This will cause the slider to 'slide' from its current position to its new position based on the value given.
     *
     * @param {number} value - The value to set the slider to, must be between min and max.
     * @param {number} [duration=0] - The duration of the slider tween in ms. Leave as zero to set immediately with no tween.
     * @param {string} [ease='linear'] - The type of ease the tween will use, i.e. 'linear', 'sine.in', 'power3', etc.
     * @returns
     * @memberof HorizontalSlider
     */
    setSliderByValue (value, duration = 0, ease = 'linear')
    {
        this.setValue(Phaser.Math.Clamp(value, this.values.min, this.values.max));

        this.setTween(duration, ease);

        return this.updateSlider();
    }

    /**
     * Internal method that updates the slider images and crop rects.
     * 
     * @private
     * @returns
     * @memberof HorizontalSlider
     */
    updateSlider ()
    {
        const values = this.values;

        values.percent = Phaser.Math.Percent(values.current, values.min, values.max);

        this.slider.x = this.sliderLeft + (values.percent * this.sliderRange);

        if (this.slider.visible)
        {
            this.cropRect.width = (this.sliderRange * values.percent) + (this.slider.width / 2);
        }
        else
        {
            this.cropRect.width = (this.sliderRange * values.percent);
        }

        this.trackFull.setCrop(this.cropRect);

        this.emit('update', this, values.current, values.percent);

        return this;
    }
}
