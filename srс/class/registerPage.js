const { By, until } = require("selenium-webdriver");

class RegisterPage {
  constructor(driver, dogsname, name, phone, password) {
    this.driver = driver;
    this.dogsname = dogsname;
    this.name = name;
    this.phone = phone;
    this.password = password;
  }
  async enterRegister() {
    // await this.driver.wait(until.elementLocated(By.css('form')),10000);
    const RegisterMenu = this.driver.findElement(
      By.xpath("//li[text()='Зареєструватися']")
    );
    console.log("her");
    await RegisterMenu.click();
    await this.driver.sleep(2000);
    const phoneInput = await this.driver.findElement(By.id("tel"));
    const passwordInput = await this.driver.findElement(By.id("password-reg"));
    const dogsNameInput = await this.driver.findElement(By.id("pet-name"));
    const nameInput = await this.driver.findElement(By.id("owner-name"));
    const enterButton = await this.driver.findElement(
      By.xpath(" //button[text()='Підтвердити']")
    );
    const checkInput = await this.driver.findElement(
      By.xpath("//input[@formcontrolname='consent']")
    );
    await dogsNameInput.sendKeys(this.dogsname);
    await phoneInput.sendKeys(this.phone);
    await this.driver.sleep(2000);
    await passwordInput.sendKeys(this.password);

    await nameInput.sendKeys(this.name);
    await checkInput.click();
    await this.driver.sleep(2000);
    await enterButton.click();
  }
}
module.exports = RegisterPage;
