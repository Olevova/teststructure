const RegisterPage = require("../srс/class/registerPage");
const createWebDriver = require("../srс/utils/driver");
const { describe, it, beforeEach, afterEach } = require("mocha");
const { By, until } = require("selenium-webdriver");
const path = require("path");

describe("register", async () => {
  beforeEach(async () => {
    driver = await createWebDriver();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("register", async () => {
    await driver.get("https://dogsnavigator.com.ua/login");
    await driver.wait(
      until.elementIsVisible(driver.findElement(By.css("form"))),
      10000
    );

    console.log("in test");
    const registerTest = new RegisterPage(
      driver,
      "Leo",
      "tolik",
      "682029406",
      "55555"
    );

    await driver.sleep(2000);
  });
});
