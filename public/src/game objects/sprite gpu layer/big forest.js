class Example extends Phaser.Scene
{
    activePointer;
    scrollSpeed = 0;
    scrollSpeedMax = 8;
    scrollSpeedAccel = 0.25;
    scrollSpeedDecel = 0.5;
    gameWidth = 1280;
    gameHeight = 720;

    preload ()
    {
        this.load.atlas('big-forest', 'assets/atlas/big-forest.png', 'assets/atlas/big-forest.tp.json');
    }

    create ()
    {
        const rnd = new Phaser.Math.RandomDataGenerator('Big Forest');

        const gameWidth = this.gameWidth;
        const gameHeight = this.gameHeight;

        const worldWidth = gameWidth * 1000;

        const colorWhite = new Phaser.Display.Color(255, 255, 255);
        const colorSky = new Phaser.Display.Color(146, 211, 255);
        const colorDark = new Phaser.Display.Color(32, 0, 178);

        const GetColor = Phaser.Display.Color.GetColor;
        const Interpolate = Phaser.Display.Color.Interpolate.ColorWithColor;
        const Blend = (colorA, colorB, n) => {
            const color = Interpolate(colorA, colorB, 1, n);
            return GetColor(color.r, color.g, color.b);
        };

        // Create weather bands.
        const weather = [];
        const weatherCount = 256;
        for (let i = 0; i < weatherCount; i++)
        {
            // A Weather value is a measure of how overcast and rainy it is.
            weather.push(rnd.frac());
        }

        // Blur weather.
        for (let i = 0; i < weatherCount - 1; i++)
        {
            weather[i] = (weather[i] + weather[i + 1]) / 2;
        }
        // weather[0] = 1;
        // weather[1] = 0;
        // weather[2] = 1;
        // weather[3] = 0;

        // Helper function to get the weather at a given normalized position.
        const weatherAt = (n) => {
            // Interpolate between weather bands.
            n = Math.max(Math.min(n, 1), 0);
            const i = n * weatherCount;
            const i0 = Math.floor(i);
            const i1 = Math.ceil(i);
            const f = i - i0;
            return weather[i0] * (1 - f) + weather[i1] * f;
        };
        // const weatherAt = (n) => weather[Math.floor(n * weatherCount)];

        const layer = this.add.spriteGPULayer('big-forest', 1024 * 1024 * 1.5);

        // Create sky.
        layer.addMember({
            frame: 'Sky',
            x: gameWidth / 2,
            y: gameHeight / 2,
            scaleX: gameWidth / 200,
            scaleY: gameHeight / 150,
            scrollFactorX: 0,
            scrollFactorY: 0
        });

        // Create mountain row 1.
        {
            const depth = 100;
            const depthVariance = depth / 2;
            const size = 1;
            const sizeVariance = size * 0.2;
            const spacing = 200;
            const spacingVariance = spacing / 2;
            const width = worldWidth / depth;
            const frames = ['Mountain1', 'Mountain2'];

            let x = 0;

            while (x < width)
            {
                const depthActual = depth + rnd.between(-depthVariance, depthVariance);
                const sizeActual = size + rnd.realInRange(-sizeVariance, sizeVariance);
                const spacingActual = spacing + rnd.between(-spacingVariance, spacingVariance);
                const flip = rnd.sign();
                const tint = Blend(colorWhite, colorDark, weatherAt(x / width));

                layer.addMember({
                    frame: rnd.pick(frames),
                    x: x,
                    y: gameHeight * 2 / 3 + rnd.between(0, 40),
                    scaleX: sizeActual * flip,
                    scaleY: sizeActual,
                    originY: 1,
                    scrollFactorX: 1 / depthActual,
                    tintTopLeft: tint,
                    tintTopRight: tint,
                    tintBottomLeft: tint,
                    tintBottomRight: tint
                });

                x += spacingActual;
            }
        }

        // Create mountain row 2.
        {
            const depth = 50;
            const depthVariance = depth / 2;
            const size = 2;
            const sizeVariance = size * 0.2;
            const spacing = 400;
            const spacingVariance = spacing / 2;
            const width = worldWidth / depth;
            const frames = ['Mountain1', 'Mountain2'];

            let x = 0;

            while (x < width)
            {
                const depthActual = depth + rnd.between(-depthVariance, depthVariance);
                const sizeActual = size + rnd.realInRange(-sizeVariance, sizeVariance);
                const spacingActual = spacing + rnd.between(-spacingVariance, spacingVariance);
                const flip = rnd.sign();
                const tint = Blend(colorWhite, colorDark, weatherAt(x / width));

                layer.addMember({
                    frame: rnd.pick(frames),
                    x: x,
                    y: gameHeight * 2 / 3 + rnd.between(0, 40),
                    scaleX: sizeActual * flip,
                    scaleY: sizeActual,
                    originY: 1,
                    scrollFactorX: 1 / depthActual,
                    tintTopLeft: tint,
                    tintTopRight: tint,
                    tintBottomLeft: tint,
                    tintBottomRight: tint
                });

                x += spacingActual;
            }
        }

        // Add atmospheric perspective 1.
        {
            const width = worldWidth / weatherCount;

            const template = {
                frame: 'White2x2',
                scaleX: width / 2,
                scaleY: gameHeight / 6,
                originY: 1,
                scrollFactorX: 1 / 50
            };

            for (let i = 0; i < weatherCount; i++)
            {
                const weatherL = weatherAt(i / weatherCount);
                const weatherR = weatherAt(((i + 1) % weatherCount) / weatherCount);
                const colorL = Blend(colorSky, colorDark, weatherL);
                const colorR = Blend(colorSky, colorDark, weatherR);

                // Solid haze
                template.x = i * width;
                template.y = gameHeight;
                template.tintTopLeft = colorL;
                template.tintTopRight = colorR;
                template.tintBottomLeft = colorL;
                template.tintBottomRight = colorR;
                template.alphaTopLeft = 1;
                template.alphaTopRight = 1;

                layer.addMember(template);

                // Gradient haze
                template.y = gameHeight * 2 / 3;
                template.alphaTopLeft = 0;
                template.alphaTopRight = 0;

                layer.addMember(template);
            }
        }

        // Add clouds.
        const addClouds = (y, scale, depth, alphaMax) => {
            const frames = ['Cloud1', 'Cloud2', 'Cloud3'];
            const spacing = 10;
            const depthVariance = depth / 4;
            const width = worldWidth / depth;
            const duration = 40000;
            const durationVariance = duration / 4;
            const spinTime = 160000;
            const spinTimeVariance = spinTime / 2;

            const template = {
                x: {
                    ease: 'Linear',
                    amplitude: 200,
                    yoyo: false
                },
                rotation: {
                    base: 0,
                    ease: 'Linear',
                    yoyo: false
                },
                alpha: {
                    base: 0,
                    amplitude: 1,
                    ease: 'Quart'
                }
            };

            for (let i = 0; i < width; i += spacing)
            {
                const weatherHere = weatherAt(i / width);
                if (weatherHere <= rnd.realInRange(0.2, 0.8))
                {
                    continue;
                }

                const depthActual = depth + rnd.between(-depthVariance, depthVariance);
                const durationActual = duration + rnd.between(-durationVariance, durationVariance);
                const delay = rnd.between(0, durationActual);
                const scaleActual = scale + rnd.realInRange(-scale / 2, scale / 2);
                const tint = Blend(colorWhite, colorSky, weatherHere);

                template.frame = rnd.pick(frames);
                template.x.base = i - 200;
                template.x.duration = durationActual;
                template.x.delay = delay;
                template.y = y + rnd.between(-20, 20);
                template.scaleX = scaleActual * rnd.sign();
                template.scaleY = scaleActual;
                template.scrollFactorX = 1 / depthActual;
                template.rotation.amplitude = Math.PI * 2 * rnd.sign();
                template.rotation.duration = spinTime + rnd.between(-spinTimeVariance, spinTimeVariance);
                template.rotation.delay = rnd.between(0, template.rotation.duration);
                template.alpha.amplitude = weatherHere * alphaMax;
                template.alpha.duration = durationActual / 8;
                template.alpha.delay = delay;
                template.tintTopLeft = tint;
                template.tintTopRight = tint;
                template.tintBottomLeft = tint;
                template.tintBottomRight = tint;

                layer.addMember(template);
            }
        };

        addClouds(gameHeight / 2, 3, 40, 0.25);
        addClouds(gameHeight / 3, 4, 20, 0.75);
        addClouds(gameHeight / 4, 5, 10, 1);
        addClouds(0, 6, 5, 1);

        // Add atmospheric perspective 2.
        {
            const width = worldWidth / weatherCount;

            const template = {
                frame: 'White2x2',
                y: 0,
                scaleX: width / 2,
                scaleY: gameHeight / 3,
                scrollFactorX: 1 / 50,
                originY: 0,
                tintTopLeft: colorDark.color,
                tintTopRight: colorDark.color,
                tintBottomLeft: colorDark.color,
                tintBottomRight: colorDark.color,
                alphaBottomLeft: 0,
                alphaBottomRight: 0
            };

            for (let i = 0; i < weatherCount; i++)
            {
                // Gradient haze
                template.x = i * width;
                template.alphaTopLeft = weatherAt(i / weatherCount) * 0.5 + 0.5;
                template.alphaTopRight = weatherAt(((i + 1) % weatherCount) / weatherCount) * 0.5 + 0.5;

                layer.addMember(template);
            }
        }

        // Add lake sparkles.
        {
            const template = {
                frame: 'White2x2',
                scrollFactorX: 0,
                alpha: {
                    base: 0,
                    ease: 'Smoothstep.easeInOut',
                    duration: 2000
                }
            };

            const halfWidth = gameWidth / 2;

            for (let y = gameHeight * 2 / 3; y < gameHeight; y++)
            {
                const h = (y - gameHeight * 2 / 3) / (gameHeight / 3);

                template.alpha.amplitude = h;
                template.alpha.delay = y * 128;

                template.y = y;

                template.scaleX = rnd.between(64, 128);

                let deviation = Math.pow(rnd.frac(), 1 / 4) * rnd.sign();
                if (y % 2 === 0)
                {
                    template.alpha.amplitude *= 0.25;
                    template.tintTopLeft = colorDark.color;
                    template.tintTopRight = colorDark.color;
                    template.tintBottomLeft = colorDark.color;
                    template.tintBottomRight = colorDark.color;
                }
                else
                {
                    deviation = Math.pow(rnd.frac(), 4) * rnd.sign();

                    template.tintTopLeft = colorWhite.color;
                    template.tintTopRight = colorWhite.color;
                    template.tintBottomLeft = colorWhite.color;
                    template.tintBottomRight = colorWhite.color;
                }
                template.x = deviation * halfWidth + halfWidth;

                layer.addMember(template);
            }
        }

        const groundStrips = 8;

        const getGroundStripHeight = (x, strip) => {
            // x is the world coordinate.
            // strip is the strip of ground elements, dictating ground wave function.
            // Returns a height between 0 and 1.

            const phase = x + strip * 1000;

            return (Math.cos(phase / 64) * Math.sin(phase / 37)) * 0.5 + 0.5;
        };

        // Add trees.
        const addTree = (x, y, scale, depth, darkness, skipTrunk) => {
            // Trees are assembled from a stump, a number of trunk segments,
            // and a number of leaf layers.
            // X is in world coordinates, and will be modified by depth.

            if (skipTrunk === undefined)
            {
                skipTrunk = false;
            }

            const stumpFrames = ['Stump1', 'Stump2'];
            const trunkFrames = ['Trunk1', 'Trunk2', 'Trunk3', 'Trunk4'];
            const leafFrames = ['Leaves1', 'Leaves2'];
            const looseLeafFrames = ['LooseLeaves1', 'LooseLeaves2', 'LooseLeaves3'];

            const trunkCount = rnd.between(1, 4);
            const leafCount = rnd.between(2, 8);

            const stumpLength = 0;
            const trunkLength = 48 * scale;
            const leafLength = 12 * scale;
            const leafScatter = 32 * scale;

            let x1 = x;
            let y1 = y;
            let angle = 0;

            const tint = Blend(colorWhite, colorDark, darkness);
            let vec2 = new Phaser.Math.Vector2();

            if (!skipTrunk)
            {
                // Add stump.
                layer.addMember({
                    frame: rnd.pick(stumpFrames),
                    x: x1,
                    y: y1,
                    scaleX: scale * rnd.sign(),
                    scaleY: scale,
                    scrollFactorX: 1 / depth,
                    tintTopLeft: tint,
                    tintTopRight: tint,
                    tintBottomLeft: tint,
                    tintBottomRight: tint
                });

                vec2 = new Phaser.Math.Vector2(0, -stumpLength);
                vec2.rotate(angle);

                x1 += vec2.x;
                y1 += vec2.y;
                angle += rnd.realInRange(-0.2, 0.2);

                // Add trunk segments.
                for (let i = 0; i < trunkCount; i++)
                {
                    layer.addMember({
                        frame: rnd.pick(trunkFrames),
                        x: x1,
                        y: y1,
                        rotation: angle,
                        scaleX: scale * rnd.sign(),
                        scaleY: scale,
                        scrollFactorX: 1 / depth,
                        originY: 1,
                        tintTopLeft: tint,
                        tintTopRight: tint,
                        tintBottomLeft: tint,
                        tintBottomRight: tint
                    });

                    vec2.setTo(0, -trunkLength);
                    vec2.rotate(angle);

                    x1 += vec2.x;
                    y1 += vec2.y;
                    angle += rnd.realInRange(-0.2, 0.2);
                }
            }

            // Add leaf layers.
            const rotationTemplate = {
                ease: 'Smoothstep.easeInOut'
            };

            const xTemplate = {
                ease: 'Smoothstep.easeInOut'
            }

            let windSpeed = 1 + rnd.frac();

            for (let i = 0; i < leafCount; i++)
            {
                const duration = 5000 + rnd.between(-1500, 1500);
                const delay = rnd.between(0, duration);
                const offset = new Phaser.Math.Vector2(rnd.between(-leafLength, leafLength), 0);
                offset.rotate(angle);

                const leafScale = (0.5 + rnd.realInRange(0, 0.5)) * scale;

                xTemplate.base = x1 + offset.x;
                xTemplate.amplitude = windSpeed * 2;
                xTemplate.duration = duration;
                xTemplate.delay = delay;

                rotationTemplate.base = angle - rnd.realInRange(-0.2, 0.2);
                rotationTemplate.amplitude = windSpeed * 0.05;
                rotationTemplate.duration = duration;
                rotationTemplate.delay = xTemplate.delay - xTemplate.duration / 4;

                layer.addMember({
                    frame: rnd.pick(leafFrames),
                    x: xTemplate,
                    y: y1 + offset.y,
                    rotation: rotationTemplate,
                    scaleX: leafScale * rnd.sign(),
                    scaleY: leafScale,
                    scrollFactorX: 1 / depth,
                    originY: 1,
                    tintTopLeft: tint,
                    tintTopRight: tint,
                    tintBottomLeft: tint,
                    tintBottomRight: tint
                });

                // Advance to higher section.
                vec2.setTo(0, -leafLength);
                vec2.rotate(angle);

                x1 += vec2.x;
                y1 += vec2.y;
                angle += rnd.realInRange(-0.2, 0.2);

                windSpeed += rnd.frac();

                // Add loose leaves.
                const looseLeafCount = rnd.between(1, 3);

                for (let j = 0; j < looseLeafCount; j++)
                {
                    const offset2 = new Phaser.Math.Vector2(leafScatter, 0);
                    offset2.rotate(rnd.rotation());

                    const leafScale = (0.5 + rnd.realInRange(0, 0.5)) * scale;

                    xTemplate.base = x1 + offset.x + offset2.x;
                    xTemplate.amplitude = windSpeed * 2;
                    xTemplate.delay = delay + duration / 4;

                    rotationTemplate.base = angle - rnd.realInRange(-0.2, 0.2);
                    rotationTemplate.delay = xTemplate.delay;

                    layer.addMember({
                        frame: rnd.pick(looseLeafFrames),
                        x: xTemplate,
                        y: y1 + offset.y + offset2.y,
                        rotation: rotationTemplate,
                        scaleX: leafScale * rnd.sign(),
                        scaleY: leafScale,
                        scrollFactorX: 1 / depth,
                        tintTopLeft: tint,
                        tintTopRight: tint,
                        tintBottomLeft: tint,
                        tintBottomRight: tint
                    });
                }
            }
        };

        // Create background canopy.
        {
            const depth = 2;
            const spacing = 100;
            const spacingVariance = spacing / 2;
            const width = worldWidth / depth;

            for (let x = 0; x < width; x += spacing)
            {
                const xActual = x + rnd.between(-spacingVariance, spacingVariance);
                const darkness = 0.5 + 0.5 * weatherAt(xActual / width);

                const worldX = xActual / depth;
                let groundHeight = 0;
                for (let strip = 0; strip <= groundStrips; strip++)
                {
                    groundHeight += getGroundStripHeight(worldX, strip);
                }

                addTree(
                    xActual,
                    gameHeight - 12 * groundHeight,
                    1,
                    depth,
                    darkness,
                    true
                );
            }
        }

        // Create tree row 1.
        {
            const depth = 1.8;
            const spacing = 150;
            const spacingVariance = spacing / 2;
            const width = worldWidth / depth;

            for (let x = 0; x < width; x += spacing)
            {
                const xActual = x + rnd.between(-spacingVariance, spacingVariance);
                const darkness = 0.5 + 0.5 * weatherAt(xActual / width);

                const worldX = xActual / depth;
                let groundHeight = 0;
                for (let strip = 0; strip <= groundStrips; strip++)
                {
                    groundHeight += getGroundStripHeight(worldX, strip);
                }

                addTree(
                    xActual,
                    gameHeight - 24 * groundHeight,
                    1,
                    depth,
                    darkness
                );
            }
        }

        // Create tree row 2.
        {
            const depth = 1.6;
            const spacing = 250;
            const spacingVariance = spacing / 2;
            const width = worldWidth / depth;

            for (let x = 0; x < width; x += spacing)
            {
                const xActual = x + rnd.between(-spacingVariance, spacingVariance);
                const darkness = 0.25 + 0.75 * weatherAt(xActual / width);

                const worldX = xActual / depth;
                let groundHeight = 0;
                for (let strip = 0; strip <= groundStrips; strip++)
                {
                    groundHeight += getGroundStripHeight(worldX, strip);
                }

                addTree(
                    xActual,
                    gameHeight - 24 * groundHeight,
                    1.5 - rnd.realInRange(0, 0.5),
                    depth,
                    darkness
                );
            }
        }

        // Create tree row 3.
        {
            const depth = 1.4;
            const spacing = 400;
            const spacingVariance = spacing / 2;
            const width = worldWidth / depth;

            for (let x = 0; x < width; x += spacing)
            {
                const xActual = x + rnd.between(-spacingVariance, spacingVariance);
                const darkness = weatherAt(xActual / width);

                const worldX = xActual / depth;
                let groundHeight = 0;
                for (let strip = 0; strip <= groundStrips; strip++)
                {
                    groundHeight += getGroundStripHeight(worldX, strip);
                }

                addTree(
                    xActual,
                    gameHeight - 24 * groundHeight,
                    2 - rnd.realInRange(0, 0.5),
                    depth,
                    darkness
                );
            }
        }

        // Add ground.

        const addGround = (strip) => {
            const depth = strip * 0.04;
            const scaleFactor = 1 / (1 + depth);
            const groundSize = 24;
            const spacing = groundSize * scaleFactor;
            const frames = ['Ground1', 'Ground2', 'Ground3', 'Ground4'];

            const grassFrames = ['Grass1', 'Grass2', 'Grass3', 'Grass4', 'Grass5'];
            const detailFrames = ['Detail1', 'Detail2', 'Detail3', 'Detail4'];

            let lastHeight = 0;
            for (let s = 0; s <= strip; s++)
            {
                lastHeight += getGroundStripHeight(0, s);
            }

            const rotationTemplate = {
                ease: 'Smoothstep.easeInOut',
                amplitude: 0.2
            };

            const width = worldWidth * scaleFactor;

            for (let i = 0; i < width; i += spacing)
            {
                let height = 0;
                for (let s = 0; s <= strip; s++)
                {
                    height += getGroundStripHeight(i, s);
                }
                const heightDelta = lastHeight - height;
                const angle = Math.atan2(heightDelta, 1);
                const cosine = Math.cos(angle);
                const sine = Math.sin(angle);

                const weatherHere = weatherAt(i / width);
                const tint = Blend(colorWhite, colorDark, weatherHere);

                const y = gameHeight - groundSize * (height - 1);

                // Add grass.
                rotationTemplate.base = angle - rnd.realInRange(-0.1, 0.1);
                rotationTemplate.duration = 1000 + rnd.between(-500, 500);
                rotationTemplate.delay = rnd.between(0, rotationTemplate.duration);

                let rise = rnd.between(0, 8);
                let slide = rnd.between(-4, 4);

                layer.addMember({
                    frame: rnd.pick(grassFrames),
                    x: i + cosine * rise + sine * rise,
                    y: y + sine * slide - cosine * slide,
                    rotation: rotationTemplate,
                    scaleX: 2 * scaleFactor * rnd.sign(),
                    scaleY: 2 * scaleFactor,
                    originY: 1,
                    scrollFactorX: scaleFactor,
                    tintTopLeft: tint,
                    tintTopRight: tint,
                    tintBottomLeft: tint,
                    tintBottomRight: tint
                });

                // Add ground.
                layer.addMember({
                    frame: rnd.pick(frames),
                    x: i,
                    y: y,
                    rotation: angle,
                    scaleX: 2 * scaleFactor * rnd.sign(),
                    scaleY: 2 * scaleFactor,
                    scrollFactorX: scaleFactor,
                    tintTopLeft: tint,
                    tintTopRight: tint,
                    tintBottomLeft: tint,
                    tintBottomRight: tint
                });

                // Add detail.
                if (rnd.frac() < 0.1)
                {
                    rise = rnd.between(-4, 4);
                    slide = rnd.between(-4, 4);
    
                    layer.addMember({
                        frame: rnd.pick(detailFrames),
                        x: i + cosine * rise + sine * rise,
                        y: y + sine * slide - cosine * slide,
                        rotation: angle + rnd.realInRange(-0.3, 0.3),
                        scaleX: 2 * scaleFactor * rnd.sign(),
                        scaleY: 2 * scaleFactor,
                        scrollFactorX: scaleFactor,
                        tintTopLeft: tint,
                        tintTopRight: tint,
                        tintBottomLeft: tint,
                        tintBottomRight: tint
                    });
                }

                lastHeight = height;
            }
        };

        for (let strip = groundStrips; strip >= 0; strip--)
        {
            addGround(strip);
        }

        // Add rain and pollen.
        {
            const length = 256;
            const yRepeats = 4;

            const templateRain = {
                frame: 'White2x2',
                x: {
                    ease: 'Linear',
                    yoyo: false
                },
                y: {
                    ease: 'Linear',
                    yoyo: false
                },
                alphaTopLeft: 0,
                alphaBottomLeft: 0,
                alpha: 0.1
            };

            const templatePollen = {
                frame: 'White2x2',
                x: {
                    ease: 'Linear',
                    yoyo: false
                },
                y: {
                    ease: 'Linear',
                    yoyo: false
                },
                rotation: {
                    ease: 'Linear',
                    yoyo: false
                },
                tintTopLeft: 0xffffaa,
                tintTopRight: 0xffffaa,
                tintBottomLeft: 0xffffaa,
                tintBottomRight: 0xffffaa,
                alpha: {
                    base: 0,
                    ease: 'Smoothstep.easeInOut'
                }
            };

            for (let i = 0; i < worldWidth; i += 2)
            {
                const chanceOfRaindrop = weatherAt(i / worldWidth) - 0.5;
                const chanceOfPollen = (1 - weatherAt(i / worldWidth)) - 0.5;
                if (rnd.frac() < chanceOfRaindrop)
                {
                    const closeness = 0.5 + rnd.frac();
                    const duration = 1000 - 500 * closeness;
                    const delay = rnd.between(0, duration);
                    const angle = Math.PI * 11 / 24 + rnd.realInRange(-0.1, 0.1);

                    const y = gameHeight + 256;
                    const x = y / Math.sin(angle);

                    templateRain.x.base = i - 300;
                    templateRain.x.amplitude = x * Math.cos(angle) * yRepeats;
                    templateRain.x.duration = duration * yRepeats;
                    templateRain.x.delay = delay;

                    templateRain.y.base = -128;
                    templateRain.y.amplitude = y;
                    templateRain.y.duration = duration;
                    templateRain.y.delay = delay;

                    templateRain.rotation = angle;

                    templateRain.scaleX = length * closeness;
                    templateRain.scaleY = closeness;

                    layer.addMember(templateRain);
                }
                else if (rnd.frac() < chanceOfPollen)
                {
                    const duration = rnd.between(10000, 20000);
                    const delay = rnd.between(0, duration);

                    templatePollen.x.base = i - 300;
                    templatePollen.x.amplitude = rnd.between(200, 600);
                    templatePollen.x.duration = duration;
                    templatePollen.x.delay = delay;

                    templatePollen.y.base = gameHeight - Math.pow(rnd.frac(), 2) * 300;
                    templatePollen.y.amplitude = -rnd.between(50, 150);
                    templatePollen.y.duration = duration;
                    templatePollen.y.delay = delay;

                    templatePollen.originX = rnd.between(1, 8);

                    templatePollen.rotation.base = rnd.realInRange(0, Math.PI * 2);
                    templatePollen.rotation.amplitude = Math.PI * 2 * rnd.sign();
                    templatePollen.rotation.duration = rnd.between(4000, 10000);

                    templatePollen.scaleX = rnd.realInRange(1, 2);
                    templatePollen.scaleY = templatePollen.scaleX;

                    templatePollen.alpha.amplitude = rnd.realInRange(0.1, 0.5);
                    templatePollen.alpha.duration = duration / 2;
                    templatePollen.alpha.delay = delay;

                    layer.addMember(templatePollen);
                }
            }
        }

        //
        // Add input handling.
        //

        this.add.text(gameWidth / 2, 16, layer.memberCount + ' sprites in 1 object. Press left and right sides to scroll').setOrigin(0.5, 0);

        this.input.on('pointerdown', (pointer) => {
            this.activePointer = pointer;
        });

        this.input.on('pointerup', (pointer) => {
            if (this.activePointer === pointer)
            {
                this.activePointer = null;
            }
        });

        this.input.on('pointerupoutside', (pointer) => {
            if (this.activePointer === pointer)
            {
                this.activePointer = null;
            }
        });
    }

    update (time, delta)
    {
        const cam = this.cameras.main;
        // cam.setScroll(cam.scrollX + delta / 32, 0);

        let scrollInput = false;
        if (this.activePointer)
        {
            const pointer = this.activePointer;
            if (pointer.x < this.gameWidth / 3)
            {
                this.scrollSpeed = Math.max(this.scrollSpeed - this.scrollSpeedAccel, -this.scrollSpeedMax);
                scrollInput = true;
            }
            else if (pointer.x > this.gameWidth * 2 / 3)
            {
                this.scrollSpeed = Math.min(this.scrollSpeed + this.scrollSpeedAccel, this.scrollSpeedMax);
                scrollInput = true;
            }
        }
        
        if (!scrollInput)
        {
            // Slow down.
            this.scrollSpeed = Math.max(Math.abs(this.scrollSpeed) - this.scrollSpeedDecel, 0) * Math.sign(this.scrollSpeed);
        }

        cam.setScroll(cam.scrollX + this.scrollSpeed, 0);

        // Prevent camera from scrolling off the edge.
        if (cam.scrollX < 0)
        {
            cam.setScroll(0, 0);
            this.scrollSpeed = 0;
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example,
    backgroundColor: '#808080',
    // pixelArt: true
    smoothPixelArt: true
};

const game = new Phaser.Game(config);

console.log(game);
