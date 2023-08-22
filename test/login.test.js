const LoginPage = require("../srс/class/loginnPage");
const createWebDriver = require("../srс/utils/driver");
const { describe } = require("mocha");
const { By, until, wait } = require("selenium-webdriver");
const should = require("chai").should();
const chrome = require("selenium-webdriver/chrome");
const path = require("path");
const fs = require("fs");

describe("loggin", async () => {
  beforeEach(async () => {
    const driver = await createWebDriver();
  }),
    afterEach(async () => {
      await driver.quit();
    });
  it("loggin in home page", async () => {
    await driver.get("https://dogsnavigator.com.ua/login");
    await driver.wait(
      until.elementIsVisible(driver.findElement(By.css("form"))),
      10000
    );
    const logginPageTest = new LoginPage(driver, "963653768", "22222");
    logginPageTest.enterLoginDate();
    await driver
      .wait(until.elementLocated(By.linkText("Мій Профіль")), 10000)
      .click();
    await driver.wait(
      until.elementsLocated(By.xpath("//img[@class='pet-photo']")),
      10000
    );
    const screenshotsDir = path.join(__dirname, "screenshots");
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }

    const screenshotFilename = "login_screen.png";
    const screenshotPath = path.join(screenshotsDir, screenshotFilename);

    const screenshotData = await driver.takeScreenshot();
    const buffer = Buffer.from(screenshotData, 'base64');
    await fs.writeFileSync(screenshotPath, buffer);
    
    await driver.sleep(2000);
  });
});
