var argo = require('argo');
var express = require('express');
var app = express();
var proxy = argo()
    .target('https://api.usergrid.com')
    .build();

app.get('/api', function (req, res) {  
  res.send('API is running');  
}); 

app.get('/api/get', function(req, res) {
  res.send("GET Processed");
});

app.put('/api/put',function(req,res){
    res.send("PUT Processed");
});

app.post('/api/post',function(req,res){
    res.send("POST Processed");
});
  
app.delete('/api/delete', function(req, res) {
  res.send("DELETE Processed");
});

app.all('*', function(req,res) {
  	res.send("Sorry, Invalid Method.");
});


app.listen(3000);