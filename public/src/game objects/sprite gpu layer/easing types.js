class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        const layer = this.add.spriteGPULayer('bunny', 7);

        const template = {
            x: {
                base: 100,
                amplitude: 600,
                duration: 1000
            },
            scaleX: 0.2,
            scaleY: 0.2
        };

        template.x.ease = 'Linear';
        template.y = 100;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Linear').setDepth(-1);

        template.x.ease = 'Quad.easeInOut';
        template.y = 150;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Quad.easeInOut').setDepth(-1);

        template.x.ease = 'Smoothstep.easeInOut';
        template.y = 200;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Smoothstep.easeInOut').setDepth(-1);

        template.x.ease = 'Quad.easeIn';
        template.y = 300;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Quad.easeIn').setDepth(-1);

        template.x.ease = 'Smoothstep.easeIn';
        template.y = 350;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Smoothstep.easeIn').setDepth(-1);

        template.x.ease = 'Quad.easeOut';
        template.y = 450;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Quad.easeOut').setDepth(-1);

        template.x.ease = 'Smoothstep.easeOut';
        template.y = 500;
        layer.addMember(template);
        this.add.text(template.x.base, template.y, 'Smoothstep.easeOut').setDepth(-1);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    backgroundColor: '#808080'
};

const game = new Phaser.Game(config);
