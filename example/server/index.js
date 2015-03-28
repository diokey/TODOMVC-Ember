'use strict';

const 
  express = require('express'),
  fs = require('fs'),
  server = express();

  server.get('/medicineService', function (req, res) {
  fs.readFile('medicine.json', function(err, data){
    if (err) {
      let resp = {};
      resp.status = 500;
      resp.message = 'An error occured';

      res.json(resp);
    }

    var dataJson = JSON.parse(data.toString());
    console.log(dataJson);
    res.json(dataJson);
  });
});

server.listen(3000, function(){
  console.log('listening on port' + 3000);
});
