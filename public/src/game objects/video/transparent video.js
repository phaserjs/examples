class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.analyser;
        this.dataArray;
        this.bufferLength;
    }

    preload ()
    {
        this.load.video('robot', 'assets/video/robot-dance.webm');
        this.load.audio('tune', 'assets/audio/aquakitty-kittyrock.m4a');
        this.load.glsl('bundle', 'assets/shaders/bundle4.glsl.js');
    }

    create ()
    {
        const text = this.add.text(10, 10, 'Click to start', { font: '16px Courier', fill: '#00ff00' });

        let analyser = this.sound.context.createAnalyser();

        this.sound.masterVolumeNode.connect(analyser);

        analyser.connect(this.sound.context.destination);

        analyser.smoothingTimeConstant = 1;

        this.bufferLength = analyser.frequencyBinCount;

        this.dataArray = new Uint8Array(this.bufferLength);

        this.analyser = analyser;

        this.input.once('pointerdown', () => {

            text.destroy();

            this.sound.play('tune', { loop: true });

            this.add.shader('GridBack', 512, 300, 1024, 600);

            this.graphics = this.add.graphics();

            this.add.video(512, 300, 'robot').play(true);

        });
    }

    update ()
    {
        if (!this.graphics)
        {
            return;
        }

        this.analyser.getByteTimeDomainData(this.dataArray);

        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);

        this.graphics.beginPath();

        var sliceWidth = 1024 / this.bufferLength;
        var x = 0;

        for (var i = 0; i < this.bufferLength; i++)
        {
            var v = this.dataArray[i] / 128;
            var y = v * 300;

            if (i === 0)
            {
                this.graphics.moveTo(x, y);
            }
            else
            {
                this.graphics.lineTo(x, y);
            }

            x += sliceWidth;
        }

        this.graphics.lineTo(1024, 300);

        this.graphics.stroke();
    }

}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
