const { By, until } = require("selenium-webdriver");


class RegisterPage {

  constructor(driver, dogsname, name, phone, password) {
    this.driver = driver;
    this.dogsname = dogsname;
    this.name = name;
    this.phone = phone;
    this.password = password;
  };


  async registrationExecution() {
    await driver.get("https://dogsnavigator.com.ua/login");
    const RegisterMenu = this.driver.findElement(
      By.xpath("//li[text()='Зареєструватися']")
    );
    await RegisterMenu.click();
   
    const phoneInput = await this.driver.findElement(By.id("tel"));
    const passwordInput = await this.driver.findElement(By.id("password-reg"));
    const dogsNameInput = await this.driver.findElement(By.id("pet-name"));
    const nameInput = await this.driver.findElement(By.id("owner-name"));
    const enterButton = await this.driver.findElement(
      By.css("button[type='submit']")
    );
    const checkAgreeInput = await this.driver.findElement(
      By.xpath("//input[@formcontrolname='consent']")
    );

    await dogsNameInput.sendKeys(this.dogsname);
    await phoneInput.sendKeys(this.phone);
    await passwordInput.sendKeys(this.password);
    await nameInput.sendKeys(this.name);
    await checkAgreeInput.click();
    await enterButton.click();
  };

}
module.exports = RegisterPage;
