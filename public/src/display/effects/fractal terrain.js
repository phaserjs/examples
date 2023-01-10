class Example extends Phaser.Scene
{
    graphics;
    detail = 7;
    size = Math.pow(2, this.detail) + 1;
    max = this.size - 1;
    map = new Float32Array(this.size * this.size);
    roughness = 0.6;
    width = 0;
    height = 0;

    create ()
    {
        this.graphics = this.add.graphics({ x: 400, y: 100 });

        this.generate();
        this.draw();
    }

    update ()
    {
        // draw();
    }

    get (x, y)
    {
        if (x < 0 || x > this.max || y < 0 || y > this.max)
        {
            return -1;
        }

        return this.map[x + this.size * y];
    }

    set (x, y, val)
    {
        this.map[x + this.size * y] = val;
    }

    generate ()
    {
        this.set(0, 0, this.max);
        this.set(this.max, 0, this.max / 2);
        this.set(this.max, this.max, 0);
        this.set(0, this.max, this.max / 2);

        this.divide(this.max);
    }

    divide (size)
    {

        const half = size / 2;
        const scale = this.roughness * size;

        if (half < 1)
        {
            return;
        }

        for (let y = half; y < this.max; y += size)
        {
            for (let x = half; x < this.max; x += size)
            {
                this.square(x, y, half, Math.random() * scale * 2 - scale);
            }
        }

        for (let y = 0; y <= this.max; y += half)
        {
            for (let x = (y + half) % size; x <= this.max; x += size)
            {
                this.diamond(x, y, half, Math.random() * scale * 2 - scale);
            }
        }

        this.divide(size / 2);
    }

    average (values)
    {
        const valid = values.filter(function(val) { return val !== -1; });
        const total = valid.reduce(function(sum, val) { return sum + val; }, 0);

        return total / valid.length;
    }

    square (x, y, size, offset)
    {
        const avg = this.average([
            this.get(x - size, y - size),   // upper left
            this.get(x + size, y - size),   // upper right
            this.get(x + size, y + size),   // lower right
            this.get(x - size, y + size)    // lower left
        ]);

        this.set(x, y, avg + offset);
    }

    diamond (x, y, size, offset)
    {
        const avg = this.average([
            this.get(x, y - size),      // top
            this.get(x + size, y),      // right
            this.get(x, y + size),      // bottom
            this.get(x - size, y)       // left
        ]);

        this.set(x, y, avg + offset);
    }

    draw ()
    {
        this.graphics.clear();

        const waterVal = this.size * 0.3;

        for (let y = 0; y < this.size; y++)
        {
            for (let x = 0; x < this.size; x++)
            {
                const val = this.get(x, y);
                const top = this.project(x, y, val);
                const bottom = this.project(x + 1, y, 0);
                const style = this.brightness(x, y, this.get(x + 1, y) - val);

                this.rect(top, bottom, style);

                // var water = project(x, y, waterVal);
                // rect(water, bottom, 'rgba(50, 150, 200, 0.15)');
            }
        }
    }

    rect (a, b, style)
    {
        if (b.y < a.y)
        {
            return;
        }

        const rgb = Phaser.Display.Color.RGBStringToColor(style);

        this.graphics.fillStyle(rgb.color, rgb.alphaGL);
        // graphics.fillRect(a.x * 2, a.y * 2, (b.x - a.x) * 2, (b.y - a.y) * 2);
        // graphics.fillRect(a.x, a.y, (b.x - a.x) * 1, (b.y - a.y) * 1);
        this.graphics.fillRect(a.x, a.y, b.x - a.x, b.y - a.y);
    }

    brightness (x, y, slope)
    {
        if (y === this.max || x === this.max)
        {
            return '#000';
        }

        const b = ~~(slope * 50) + 128;

        return ['rgba(', b, ',', b, ',', b, ',1)'].join('');
    }

    iso (x, y)
    {
        // return {
        //     x: x,
        //     y: y
        // };
        return {
            x: 0.5 * (this.size + x - y),
            y: 0.5 * (x + y)
        };
    }

    project (flatX, flatY, flatZ)
    {
        const point = this.iso(flatX, flatY);
        const x0 = this.width * 0.5;
        const y0 = this.height * 0.2;

        //  Original
        // var z = size * 0.5 - flatZ + point.y * 0.75;
        // var x = (point.x - size * 0.5) * 6;
        // var y = (size - point.y) * 0.005 + 1;

        const z = this.size * 0.5 - flatZ + point.y * 0.75;
        const x = (point.x - this.size * 0.5) * 6;
        const y = (this.size - point.y) * 0.005 + 1;

        return {
            x: x0 + x / y,
            y: y0 + z / y
        };
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#3d3d89',
    scene: Example
};

const game = new Phaser.Game(config);
