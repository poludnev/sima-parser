const https = require('https');

module.exports = (hostname0, path0) => {
  const options = {
    hostname: hostname0,
    port: 443,
    path: path0,
    method: 'GET',
    strictSSL: false,
    rejectUnauthorized: false,
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      // res.setEncoding('utf8');
      let x = '';
      res.on('data', (chunk) => {
        x += chunk;
      });
      res.on('error', (err) => {
        reject(err);
      });
      res.on('end', () => {
        resolve(x);
      });
    });
    req.write('test');
    req.end();
  });
};
