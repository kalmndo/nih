const { Given, When, Then } = require("@cucumber/cucumber");
const { Capabilities, Builder } = require("selenium-webdriver");

require("chromedriver");

//driver setup
const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });
const driver = new Builder().withCapabilities(capabilities).build();

Given("I am on the pruhub login page", async () => {
  (await driver).get("http://www.google.com");
});
