const express = require('express')
var app = express();
//var json= require('json'); 
app.get('/',function(req,res){
    res.send("start server")
})
function fact(num) { 
    let ans = 1; 
    let n;
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
app.get('/fact/:num',function(req,res)
{var num1 = parseInt(req.params.num);
    res.json("fact is" +fact(num1))
})
function multi(num) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    return table;
}

app.get('/multi/:num', function(req,res)
{   var num1 = parseInt(req.params.num);
    res.json("multi table is" + multi(num1))
})
function fib(num){
    let fn1 = 0, fn2 = 1, nextFibonacci;
    for (let i = 1; i <= num; i++) {
        nextFibonacci = fn1 + fn2;
        fn1 = fn2;
        fn2 = nextFibonacci;
     }
     return fn2
}
app.get('/fib/:num',function(req,res){
    var num1 = parseInt(req.params.num);
    res.json("fib is" + fib(num1))
})
function sum(num) { 
    let ans = 1; 
    let n;
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans + i; 
    return ans; 
}
app.get('/sum/:num',function(req,res)
{var num1 = parseInt(req.params.num);
    res.json("fact is" +sum(num1))
})
function reverse(word){
   word=word.toLowerCase();
let reverseword = word.split('').reverse().join('');
return reverseword === word
 
}
app.get('/reverse/:word',function(req,res)
{let word1 =(req.params.word);
    var result=reverse(word1);
    res.json("reverse is : " +result)
})
var server= app.listen(7000, function()
{
    var host = server.address().address 
    var port = server.address().port 
})