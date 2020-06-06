const http = require('http');

const wakeUpDyno = (url, interval = 25) => {
  const milliseconds = interval * 60000;
  setInterval(() => {
    http.get(url);
  }, milliseconds);
};

module.exports = wakeUpDyno;
