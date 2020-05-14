var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    fps: {
        forceSetTimeOut: false
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    var loop = this.game.loop;
    var parentNode = this.game.canvas.parentNode;

    makeButton('start', () => loop.start(this.game.step.bind(this.game)), parentNode);
    makeButton('stop', () => loop.stop(), parentNode);
    makeButton('sleep', () => loop.sleep(), parentNode);
    makeButton('wake', () => loop.wake(), parentNode);
    makeButton('tick', () => loop.tick(), parentNode);

    var pre = document.createElement('pre');
    pre.setAttribute('style', 'position: absolute; left: 0; top: 0; width: 20em; height: 15em; overflow: hidden; margin: 0; color: white; background: #000c');
    parentNode.appendChild(pre);

    setInterval(function ()
    {
        pre.innerText = print(loop);
    });
}

function update (timestamp)
{
    sky.alpha = Math.abs(Math.sin(0.001 * timestamp));
}

function makeButton (name, fn, parent)
{
    var btn = document.createElement('button');

    btn.innerText = name;
    btn.addEventListener('click', fn);

    parent.appendChild(btn);

    return btn;
}

function print (loop)
{
    return `
game.loop
  started      ${loop.started}
  running      ${loop.running}
  frame        ${loop.frame}
  raf
    isRunning  ${loop.raf.isRunning}
    tick       ${loop.raf.tick}
    lastTime   ${loop.raf.lastTime}
    timeOutID  ${loop.raf.timeOutID}`;
}


