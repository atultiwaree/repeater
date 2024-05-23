const { Builder, By  } = require("selenium-webdriver");



const startEngine = async () => {

        //Create driver instance
        const driver = await new Builder().forBrowser('chrome').build()

        //Open website
        await driver.get('https://instagram.com');

        //Find username input field
        const userNameField = await driver.findElement(By.name("username"))

        userNameField.sendKeys("artistic__vinci")
        

        //Find password input field
        const passwordField = await driver.findElement(By.name("password"))

        passwordField.sendKeys("Qwerty@1234")


        //Press Login button
        const loginButton = await driver.findElement(By.xpath("//form[@id='loginForm']/div/div[3]"));

        await loginButton.click()

        
        await driver.sleep(3000)

        //Press Saveinfo
        const saveInfoButton = await driver.findElement(By.xpath("//button[contains(.,'Save info')]")).click()

        await driver.sleep(3000)

        //Notification
        const notificationButton = await driver.findElement(By.xpath("//button[contains(.,'Not Now')]")).click()

        


        
}


startEngine().then(e => console.log("Task finished..."));