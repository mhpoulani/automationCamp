const { defineConfig } = require('cypress');
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
const { verifyDownloadTasks } = require('cy-verify-downloads');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  retries:{
    runMode:1
  },
  e2e: {
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('task', {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      on('task', verifyDownloadTasks);
      on('task', { downloadFile });
      on('task', {
        deleteFileTask(filename) {
          return new Promise((resolve, reject) => {
            fs.rm(filename, { maxRetries: 10, recursive: true }, (error) => {
              if (error) {
                console.error(error);
                return reject(error);
              }
              resolve(null);
            });
          });
        },
      });
      on('task', {
        deleteFolderTask(filename) {
          return new Promise((resolve, reject) => {
            fs.rmdir(filename, { maxRetries: 10, recursive: true }, (error) => {
              if (error) {
                console.error(error);
                return reject(error);
              }
              resolve(null);
            });
          });
        },
      });
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      chromeWebSecurity: false,
    },
  },
});
