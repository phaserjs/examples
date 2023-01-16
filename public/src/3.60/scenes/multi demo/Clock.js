class Clock extends Phaser.Scene {

    constructor (handle, parent)
    {
        super(handle);

        this.parent = parent;

        this.graphics;
        this.clockSize = 120;
    }

    create ()
    {
        const bg = this.add.image(0, 0, 'clockWindow').setOrigin(0);

        this.cameras.main.setViewport(this.parent.x, this.parent.y, Clock.WIDTH, Clock.HEIGHT);
        this.cameras.main.setBackgroundColor(0x0055aa);

        this.graphics = this.add.graphics();
    }

    update ()
    {
        const graphics = this.graphics;
        const timer = this.timerEvent;
        const clockSize = this.clockSize;
        const x = Clock.WIDTH / 2;
        const y = 8 + Clock.HEIGHT / 2;

        graphics.clear();

        //  Progress is between 0 and 1, where 0 = the hand pointing up and then rotating clockwise a full 360

        //  The frame
        graphics.fillStyle(0xffffff, 1);
        graphics.lineStyle(3, 0x000000, 1);
        graphics.fillCircle(x, y, clockSize);
        graphics.strokeCircle(x, y, clockSize);

        let date = new Date;
        let seconds = date.getSeconds() / 60;
        let mins = date.getMinutes() / 60;
        let hours = date.getHours() / 24;

        //  The hours hand
        let size = clockSize * 0.9;

        let angle = (360 * hours) - 90;
        let dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

        graphics.fillStyle(0x000000, 1);

        graphics.beginPath();

        graphics.moveTo(x, y);

        let p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.7);

        graphics.lineTo(p1.x, p1.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.moveTo(x, y);

        let p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.7);

        graphics.lineTo(p2.x, p2.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.fillPath();
        graphics.closePath();

        //  The minutes hand
        size = clockSize * 0.9;

        angle = (360 * mins) - 90;
        dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

        graphics.fillStyle(0x000000, 1);

        graphics.beginPath();

        graphics.moveTo(x, y);

        p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.7);

        graphics.lineTo(p1.x, p1.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.moveTo(x, y);

        p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.7);

        graphics.lineTo(p2.x, p2.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.fillPath();
        graphics.closePath();

        //  The seconds hand
        size = clockSize * 0.9;

        angle = (360 * seconds) - 90;
        dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

        graphics.fillStyle(0xff0000, 1);

        graphics.beginPath();

        graphics.moveTo(x, y);

        p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.3);

        graphics.lineTo(p1.x, p1.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.moveTo(x, y);

        p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.3);

        graphics.lineTo(p2.x, p2.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.fillPath();
        graphics.closePath();

    }

    refresh ()
    {
        this.cameras.main.setPosition(this.parent.x, this.parent.y);

        this.scene.bringToTop();
    }

}

Clock.WIDTH = 275;
Clock.HEIGHT = 276;
