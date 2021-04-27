const { Builder, By, Key, util, until } = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.bet365.ru/#/HO/');
}
module.exports = loadSelenium;