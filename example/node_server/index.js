'use strict';

const 
  express = require('express'),
  cors = require('cors'),
  fs = require('fs'),
  server = express();

  server.use(cors());

  server.get('/medicineService', function (req, res) {
  fs.readFile('medicine.json', function(err, data){
    if (err) {
      let resp = {};
      resp.status = 500;
      resp.message = 'An error occured';

      res.json(resp);
    }

    var dataJson = JSON.parse(data.toString());
    console.log('SENDING RESPONSE FOR REQUEST : GET /medicineService');
    res.json(dataJson);
  });
});

server.listen(3000, function(){
  console.log('listening on port' + 3000);
});
