module.exports = {
  src_folders: ["tests/scenarios"],
  output_folder: "tests/reports",
  globals_path: "tests/setup.js",
  custom_commands_path: [ "node_modules/apostrophe-nightwatch-tools/commands", "tests/commands" ],

  selenium: {
    start_process: false
  },

  test_settings: {
    local: {
      launch_url: 'http://localhost:8081',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      apos_address: 'localhost',
      apos_port: 3111,
      screenshots: {
        enabled: true,
        path: './screenshots',
        on_failure: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        "chromeOptions": {
          "args": [ "start-maximized", "headless" ]
        }
      }
    },
    remote: {
      launch_url: 'http://ondemand.saucelabs.com:80',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      username: process.env.SAUCE_USERNAME,
      apos_address: 'localhost',
      apos_port: 3111,
      access_key: process.env.SAUCE_ACCESS_KEY,
      silent: true,
      screenshots: {
        enabled: true,
        path: './screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
