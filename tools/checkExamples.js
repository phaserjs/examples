// scripts/runExamplesCheck.js

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const EXAMPLES_FILE = 'examples.json';
const BASE_URL = 'http://localhost:8080/view.html?src=src\\'; // Adjust if needed
const OUTPUT_FILE = 'error_log.txt';

let errorLog = [];

function collectExamples(data, base = '') {
    let examples = [];

    if (Array.isArray(data.children)) {
        data.children.forEach(child => {
            if (child.children) {
                examples = examples.concat(collectExamples(child, path.join(base, child.name)));
            } else if (child.name.endsWith('.js') && !child.name.startsWith('_')) {
                examples.push(path.join(base, child.name).replace(/\\/g, '/'));
            }
        });
    }

    return examples;
}

(async () => {
    const jsonData = JSON.parse(fs.readFileSync(EXAMPLES_FILE, 'utf-8'));
    const examples = collectExamples(jsonData);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (const example of examples) {
        const url = BASE_URL + encodeURIComponent(example);
        console.log(`Checking: ${url}`);

        const exampleErrors = [];

        page.on('pageerror', error => {
            exampleErrors.push(`PageError: ${error.message}`);
        });

        page.on('console', msg => {
            if (msg.type() === 'error') {
                exampleErrors.push(`ConsoleError: ${msg.text()}`);
            }
        });

        try {
            await page.goto(url, { waitUntil: 'load', timeout: 15000 });
            await page.waitForTimeout(3000);
        } catch (err) {
            exampleErrors.push(`NavigationError: ${err.message}`);
        }

        if (exampleErrors.length > 0) {
            errorLog.push(`--- ${example} ---\n${exampleErrors.join('\n')}\n`);
        }

        page.removeAllListeners();
    }

    await browser.close();

    fs.writeFileSync(OUTPUT_FILE, errorLog.join('\n'), 'utf-8');
    console.log(`\nFinished. Errors logged to ${OUTPUT_FILE}`);
})();
