class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.binary('mod', 'assets/audio/protracker/act_of_impulse.mod');
    }

    create ()
    {
        const buffer = new Uint8Array(this.cache.binary.get('mod'));

        //   getString scans the binary file between the two values given, 
        //   returning the characters it finds there as a string

        const signature = this.getString(buffer, 1080, 1084);

        const text = this.add.text(32, 32, `Signature: ${signature}`, { fill: '#ffffff' });
        text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

        const title = this.getString(buffer, 0, 20);
        const text2 = this.add.text(32, 64, `Title: ${title}`, { fill: '#ffffff' });
        text2.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

        //  Get the sample data
        const sampleText = [];

        for (let i = 0; i < 31; i++)
        {
            const st = 20 + i * 30;
            sampleText.push(this.getString(buffer, st, st + 22));
        }

        const text3 = this.add.text(400, 32, sampleText, { fill: '#ffffff' });
        text3.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);
    }

    getString (buffer, start, end)
    {
        let output = '';

        for (let i = start; i < end; i++)
        {
            output += String.fromCharCode(buffer[i]);
        }

        return output;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#0072bc',
    scene: Example
};

const game = new Phaser.Game(config);
