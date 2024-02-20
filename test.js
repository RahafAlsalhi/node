const express = require('express')
var app = express();
app.get('/',function(req,res){
    res.send("start server")
})
app.get('/user',function(req,res)
{
    res.send("rahaf")
})

app.get('/fact/:num', function(req,res)
{
    res.json("fib is" + req.params.num*2)
})

var server= app.listen(7000, function()
{
    var host = server.address().address 
    var port = server.address().port 
})