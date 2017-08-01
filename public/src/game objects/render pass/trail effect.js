
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var objects = {};
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image', 'assets/sprites/mushroom2.png');
}

function create ()
{
    objects.color = 0;
    objects.storePass = this.make.renderPass({add: false, x: 0, y: 0, width: 800, height: 600, shaderName: 'storePass', fragmentShader: `
        precision mediump float;
        
        uniform float freq;
        uniform sampler2D sampler;
        varying vec2 v_tex_coord;

        void main(void) {
            vec4 color = texture2D(sampler, v_tex_coord);
            float r = sin(0.3 + freq + 0.0) * 127.0 + 128.0;
            float g = sin(0.3 + freq + 2.0) * 127.0 + 128.0;
            float b = sin(0.3 + freq + 4.0) * 127.0 + 128.0;
            vec4 tint = vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
            if (color.a > 0.0)
                gl_FragColor = tint;
        }
    `});

    objects.fadePass = this.make.renderPass({add: false, x: 0, y: 0, width: 800, height: 600, shaderName: 'fadePass', fragmentShader: `
        precision mediump float;

        uniform sampler2D storePass;

        void main(void) {
            const float dist = 1.0;
            vec2 uv = vec2(gl_FragCoord.x / 800.0, gl_FragCoord.y / 600.0);
            vec4 copyColor = texture2D(storePass, uv);
            vec4 mixedColor = mix(vec4(0.0, 0.0, 0.0, 0.2), copyColor, 0.5);
            gl_FragColor = mixedColor;
        }
    `});
    objects.blurPass = this.add.renderPass(0, 0, 800, 600, 'blurPass', `
        precision mediump float;
        
        /* source: https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/13.glsl */
        vec4 blur(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.411764705882353) * direction;
            vec2 off2 = vec2(3.2941176470588234) * direction;
            vec2 off3 = vec2(5.176470588235294) * direction;
            color += texture2D(image, uv) * 0.1964825501511404;
            color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
            color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
            return color;
        }

        uniform sampler2D fadePass;

        void main(void) {
            const float dist = 4.0;
            vec2 uv = vec2(gl_FragCoord.x / 800.0, gl_FragCoord.y / 600.0);
            vec4 copyColor0 = blur(fadePass, uv, vec2(800.0, 600.0), vec2(dist, dist));
            vec4 copyColor1 = blur(fadePass, uv, vec2(800.0, 600.0), vec2(dist, -dist));
            vec4 blurMix = mix(copyColor0, copyColor1, 0.5);
            gl_FragColor = blurMix;
        }
    `);
    objects.fadePass.setRenderTextureAt(objects.storePass.renderTexture, 'storePass', 1);
    objects.blurPass.setRenderTextureAt(objects.fadePass.renderTexture, 'fadePass', 1);
    objects.image0 = this.make.image({key: 'image', add: true});
    objects.image1 = this.make.image({key: 'image', add: true});
    objects.move = 0.0;
}

function update ()
{
    objects.storePass.clearColorBuffer(0, 0, 0, 0);
    objects.storePass.setFloat('freq', objects.color);
    objects.storePass.render(objects.image0, this.cameras.main);
    objects.storePass.render(objects.image1, this.cameras.main);

    objects.fadePass.renderRect(0, 0, 800, 600, this.cameras.main);
    objects.blurPass.renderRect(0, 0, 800, 600, this.cameras.main);

    objects.image0.x = 400 + Math.cos(objects.move) * 300;
    objects.image0.y = 300 + Math.sin(objects.move * 2) * 200;
    objects.image1.x = 400 + Math.sin(objects.move * 2) * 300;
    objects.image1.y = 300 + Math.cos(objects.move) * 200;

    objects.move += 0.02;
    objects.color += 0.1;
}
