const LoginPage = require("../srс/class/loginnPage");
const createWebDriver = require("../srс/utils/driver");
const { describe } = require("mocha");
const { By, until, wait } = require("selenium-webdriver");
const makeScreenshot = require('../srс/utils/makeScreenShot');


describe("loggin", async () => {

  beforeEach(async () => {
    const driver = await createWebDriver();
  });

  afterEach(async () => {
      await driver.quit();
  });

  it("loggin in to the home page", async () => {
    const logginPageTest = new LoginPage(driver, "963653768", "22222");
    await logginPageTest.LogginIntoPage();
    makeScreenshot(driver, 'homepage');
  });

  it('make a screenshot of my advertisement page', async()=>{
    const logginPageTest = new LoginPage(driver, "963653768", "22222");
    await logginPageTest.LogginIntoPage();
    
    await driver.wait(until.elementLocated(By.linkText("Мій Профіль")), 3000).click();
    await driver.findElement(By.linkText('Мої оголошення')).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.className('pet-info-container'))));
    
    makeScreenshot(driver, 'advertisement');
  });
});
   