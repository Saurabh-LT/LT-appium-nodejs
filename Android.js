const wd = require("wd");

/**
 * Username to be used for running the test.
 */
const username = process.env.LT_USERNAME || "username";

/**
 * The access key to be used for running test test.
 */
const accessKey = process.env.LT_ACCESS_KEY || "accessKey";

/**
 * Capabilities to be passed while running the test.
 */
const desiredCapabilities = {
  app: "lt://proverbial-android", // Enter the 'app_url' here.
  build: "NodeJS - Android",
  name: "Sample Test NodeJS",
  deviceName: "Galaxy S20",
  isRealMobile: true,
  platformName: "android",
  platformVersion: "11",
  video: true,
  visual: true,
  "smartUI.project": "Runnin-CI-Appium"
};

const driver = wd.promiseRemote(
  `https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`
);

const DEFAULT_TIMEOUT = 10000;

/**
 * Run an android test.
 */
 async function runAndroidTest() {
  try {
  driver
      .init(desiredCapabilities)
      .then(function () {
        return driver.executeScript(`smartui.takeScreenshot=CI-Node-js-Appium`);
      });
  } catch (e) {
    await driver.quit();
  }
}

runAndroidTest();
