const { By, until } = require("selenium-webdriver");
class LoginPage {
  constructor(driver, phone, password) {
    this.driver = driver;
    this.phone = phone;
    this.password = password;
  }

  async enterLoginDate() {
    await this.driver.wait(until.elementsLocated(By.css("form")), 10000);
    const phoneInput = await this.driver.findElement(By.id("phone"));
    const passwordInput = await this.driver.findElement(By.id("password-reg"));
    const enterButton = await this.driver.findElement(
      By.xpath(
        "/html/body/app-root/app-login/section/div[2]/app-login-form/form/button[2]"
      )
    );
    console.log('ok');
    await phoneInput.sendKeys(this.phone);
    await passwordInput.sendKeys(this.password);
    console.log('send');
    await enterButton.click();
   
  }
};

module.exports = LoginPage;
