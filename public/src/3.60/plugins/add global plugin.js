class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.text('3x5', 'assets/loader-tests/3x5.flf');
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        // https://github.com/Marak/asciimo/issues/3
        const font = this.cache.text.get('3x5').split('\n');

        //         flf2a$ 6 5 20 15 3 0 143 229    NOTE: The first five characters in
        //           |  | | | |  |  | |  |   |     the entire file must be "flf2a".
        //          /  /  | | |  |  | |  |   \
        // Signature  /  /  | |  |  | |   \   Codetag_Count
        //   Hardblank  /  /  |  |  |  \   Full_Layout*
        //        Height  /   |  |   \  Print_Direction
        //        Baseline   /    \   Comment_Lines
        //         Max_Length      Old_Layout*


        //  flf2a$ 6 4 6 -1 4
        const data = font[0].split(' ');
        const header = data[0];
        const height = parseInt(data[1]);
        const width = parseInt(data[2]);
        const comments = parseInt(data[5]) + 2;

        // The letters start at space (ASCII 32) and go in ASCII order up to 126

        const text = 'PHASER 3';

        let x = 32;

        for (let i = 0; i < text.length; i++)
        {
            const letter = text.charCodeAt(i);

            const offset = comments + ((letter - 32) * height);

            this.getCharacter(font, x, 32, offset, width, height);

            x += (width * 17);
        }
    }

    getCharacter (font, dx, dy, offset, width, height)
    {
        let sx = dx;
        let sy = dy;

        for (let y = offset; y < offset + height; y++)
        {
            sx = dx;

            for (let x = 0; x < width; x++)
            {
                sx += 17;

                if (font[y][x] === '#')
                {
                    this.add.image(sx, sy, 'balls');
                }
            }

            sy += 17;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
