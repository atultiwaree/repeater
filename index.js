const { Builder, By, WebElement, Key  } = require("selenium-webdriver");



const startEngine = async () => {

       try {

         //Create driver instance
         const driver = await new Builder().forBrowser('chrome').build()

         //Make full screen
         await driver.manage().window().maximize()
 
 
 
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
 
         
         await driver.sleep(5000)
 
         //Press Saveinfo
         await driver.findElement(By.xpath("//button[contains(.,'Save info')]")).click()
 
         await driver.sleep(3000)
 
         //Notification
        await driver.findElement(By.xpath("//button[contains(.,'Not Now')]")).click()
 
         await driver.sleep(1000)
 
         //click on search
 
         const search = await driver.findElement(By.xpath("//div[2]/span/div/a/div/div[2]/div/div/span/span")).click()

         //Now paste user name

         await driver.switchTo().activeElement().sendKeys("rii_shabh_")

         await driver.sleep(2000)

         //Click on first result
         
         await driver.switchTo().activeElement().sendKeys(Key.DOWN)

         await driver.sleep(2000)
         
         await driver.switchTo().activeElement().sendKeys(Key.ENTER)
         
         await driver.sleep(3000)

         //Click on message button

         let message = await driver.findElement(By.xpath("//div[2]/div/div[2]/div")).click();

         await driver.sleep(3000)

         await driver.switchTo().activeElement().sendKeys("Yo yo", Key.ENTER)

        



         
         
 
 
 
        //        driver.executeScript("window.scroll(0, 500);").then((e) => console.log("Trx window scroll"));


        

        

       } catch(e) {
           console.log(e.message)
       }
        
}


startEngine().then(e => console.log("Task finished..."));