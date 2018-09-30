const puppeteer = require('puppeteer');
const fs = require('fs-extra');

const getItems = async (page) => {
  return new Promise(async (resolve, reject) => {
    const items = await page.evaluate((sel) => {
      return [...document.querySelectorAll(sel)]
        .map(a => a.href)
        .filter(url => !url.includes('rbush')); // rbrush is super broken...
    }, '.card > a');
    resolve(items);
  });
}

const saveCanvas = async (page, url) => {
  return new Promise(async (resolve, reject) => {
    await page.goto(url);
    const path = 'public/screenshots' + url
      .replace(/\\\\/g, '/')
      .replace(/\\/g, '/')
      .replace(/%20/g, ' ')
      .match(/src=src([^\.]+)/)[1] + '.png';
    console.log('  screenshot to path:', path);
    const filename = path.match(/[^\/]+$/)[0];
    fs.mkdirp(path.slice(0, -(filename.length + 1)));

    try {
      await page.waitForSelector('canvas', {
        timeout: 5000,
      });
    } catch (e) {
      fs.copyFileSync('public/images/doc.png', path);
      resolve();
    }
    await page.evaluate(() => {
      const c = document.querySelector('canvas');
      c.style.width = 400 + 'px';
      c.style.height = 300 + 'px';
    });
    page.mouse.click(200, 150);
    await page.waitFor(1000);
    const canvas = await page.$('canvas');
    if (canvas) {
      await canvas.screenshot({
        path,
      });
    }
    else {
      fs.copyFileSync('public/images/doc.png', path);
    }
    resolve();
  });
};

const maxDepth = 10;
const digForCanvas = async (page, url, depth = 0) => {
  return new Promise(async (resolve, reject) => {
    await page.goto(url, {waitUntil: 'networkidle2'});
    
    let items = await getItems(page);
    if (depth > 0) {
      items = items.slice(1)
    }
    for (let url of items.reverse()) {
      if (url.match(/[^\.]+$/)[0].slice(0,2) === 'js') {
        console.log('saving', url);
        await saveCanvas(page, url);
      } else {
        console.log('digging', url);
        await digForCanvas(page, url, depth + 1);
      }
    }
    resolve();
  });
}

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const [page] = await browser.pages();
  page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');
  await digForCanvas(page, 'http://localhost:8080');

  browser.close();
}

run();
