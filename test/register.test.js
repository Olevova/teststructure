const RegisterPage = require("../srс/class/registerPage");
const createWebDriver = require("../srс/utils/driver");
const { describe, it, beforeEach, afterEach } = require("mocha");
const { By, until } = require("selenium-webdriver");
const should = require("chai").should();
const chrome = require("selenium-webdriver/chrome");
const makeScreenshot = require('../srс/utils/makeScreenShot');

describe("registretion of new User", async () => {

  const successRegistrationUrl = "https://dogsnavigator.com.ua/";

  beforeEach(async () => {
    driver = await createWebDriver();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("success registretion of new User", async () => {
       
    registerTest = new RegisterPage(
      driver,
      "Leo",
      "tolik",
      "682029406",
      "55555"
    );

    await registerTest.registrationExecution();
    await driver.wait(until.urlMatches(/.+/), 3000);
    const afterRegistrationUrl = await driver.getCurrentUrl();

    if(afterRegistrationUrl!==successRegistrationUrl){
      await driver.wait(until.elementLocated(By.className("error")),3000);
      makeScreenshot(driver, 'register_error');
    };

    afterRegistrationUrl.should.to.equal(successRegistrationUrl);
    
  });
});
