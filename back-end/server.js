var express = require('express');
var app = express();
var oxfordHelper = require('./src/utils/oxford-helper');
var monogoHelper = require('./src/utils/mongo-helper');

app.get('/', async function (req, res) {
   monogoHelper.fetchAllWord().then(data => {
      res.send(data);
   });
})

app.get('/search', async function (req, res) {
   let word = req.query.word;
   if (!word || word == '') {
      res.send('Empty query')
   }
   let dictData = await oxfordHelper.fetchWord(word);
   monogoHelper.insertWord(dictData).then(result => res.send(result)).catch(err=>res.send(err));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})