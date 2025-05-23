const puppeteer = require("puppeteer");
const httpServer = require("http-server");

const fs = require("fs-extra");
const p = require("path");

const { getExamples, getScreenshots } = require("./utils");

const server = httpServer.createServer();
server.listen(8080, "localhost", () => {});

let examples = [];
getExamples(examples, "./public/src");

examples = examples
    .filter((e) => !e.url.includes("rbush"))
    .filter((e) => e.url.match(/[^\.]+$/)[0].slice(0, 2) === "js")
    .map((e) => ({
        url:
            "http://localhost:8080/" +
            (e.url.includes("boot.json") ? "boot.html?src=" : "view.html?src=") +
            e.url.slice(9).replace(/\//g, "\\"),
        path:
            e.path
                .toLowerCase()
                .replace("public/src/", "public/screenshots/")
                .replace("public\\src\\", "public\\screenshots\\")
                .replace(/\.json/, "")
                .replace(/\.js/, "") + ".png",
    }));

let screenshots = [];

getScreenshots(screenshots, "./public/screenshots");

screenshots = screenshots.map((s) => s.toLowerCase());

const failedExamples = [];

const saveCanvas = async (page, example) => {
    const path = example.path;

    console.log("- " + example.url);
    console.log("  Screenshot to path:", path);

    fs.mkdirp(p.dirname(path));

    const errors = [];

    page.on("pageerror", (error) => {
        console.log(error.message, example.url);
        errors.push(error.message);
    });

    return await page
        .goto(example.url)
        .then(() => page.waitForSelector("canvas", { timeout: 5000 }))
        .then(() =>
            page.evaluate(() => {
                const c = document.querySelector("canvas");
                c.style.width = 800 + "px";
                c.style.height = 600 + "px";
            })
        )
        .then(() => page.mouse.click(200, 150))
        .then(() => new Promise((p) => setTimeout(p, 1000)))
        .then(() => {
            if (errors.length > 0) {
                throw new Error("Example error");
            }
        })
        .then(() => page.$("canvas"))
        .then((canvas) =>
            canvas.screenshot({
                path: p.resolve(path),
            })
        )
        .catch((err) => {
            console.warn("❌ Failed:", example.url);
            failedExamples.push(`${example.path} | ${example.url}`);
            fs.copyFileSync(p.resolve("public/images/doc.png"), p.resolve(path));
        })
        .finally(() => {
            page.removeAllListeners("pageerror"); // Important to avoid duplicate listeners
        });
};

async function run() {
    let missing = 0;

    const browser = await puppeteer.launch({
        headless: true,
    });

    const [page] = await browser.pages();

    await page.setUserAgent(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
    );

    for (let example of examples.filter((e) => !screenshots.includes(e.path))) {
        await saveCanvas(page, example);
        missing++;
    }

    await browser.close();
    server.close();

    console.log(`\n✅ Added ${missing} missing screenshots out of ${examples.length} examples`);

    if (failedExamples.length > 0) {
        fs.writeFileSync("screenshots-log.txt", failedExamples.join("\n"), "utf-8");
        console.log(`❗️ Logged ${failedExamples.length} failed examples to screenshots-log.txt`);
    } else {
        console.log("🎉 No errors encountered.");
    }
}

run();
