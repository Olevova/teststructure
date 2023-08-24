const { By, until } = require("selenium-webdriver");
class LoginPage {
  constructor(driver, phone, password) {
    this.driver = driver;
    this.phone = phone;
    this.password = password;
  };

  async LogginIntoPage() {
    await driver.get("https://dogsnavigator.com.ua/login");
    await this.driver.wait(until.elementsLocated(By.css("form")), 10000);
    
    const phoneInput = await this.driver.findElement(By.id("phone"));
    const passwordInput = await this.driver.findElement(By.id("password-reg"));
    const enterButton = await this.driver.findElement(
      By.xpath("//button[text()='Увійти']")
    );

    await phoneInput.sendKeys(this.phone);
    await passwordInput.sendKeys(this.password);
    await enterButton.click();
    await this.driver.wait(until.urlIs('https://dogsnavigator.com.ua/'),2000)
  };
};

module.exports = LoginPage;
