const { Builder, By, Key, util, until } = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function pinnacle() {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.pinnacle.com/');
}
module.exports = pinnacle;