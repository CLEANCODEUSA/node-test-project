// let http = require("http")

// let ourApp = http.CreateServer(function(req, res){
//     res.end("Hello, and welcome to our website.")
// })

// ourApp.listen(3000);


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   if(req.url == "/"){
//     res.write('Hello, and welcome to our website.');
//     res.end();
//   }
//   if(req.url == "/about"){
//     res.end("Thank you for visiting our about page.");
//   }
// }).listen(3000);

// let express = require("express")
// let app = express()
// app.get('/', function(req, res){
//     res.send(`
//         <form action="/answer" method="POST">
//             <p>What color is the sky on a clear and sunny day?</p>
//             <input name="skyColor" autocomplete="off">
//             <button>Submit Answer</button>
//         </form>
//     `)
// })

let express = require('express')
let app = express()

app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res){
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4 text-center py-1">To-Do App</h1>
      
      <div class="jumbotron p-3 shadow-sm">
        <form action="/create-item" method="POST">
          <div class="d-flex align-items-center">
            <input name="item" id="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
            <button class="btn btn-primary">Add New Item</button>
          </div>
        </form>
      </div>
      
      <ul class="list-group pb-5">
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Fake example item #1</span>
          <div>
            <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
            <button class="delete-me btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Fake example item #2</span>
          <div>
            <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
            <button class="delete-me btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Fake example item #3</span>
          <div>
            <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
            <button class="delete-me btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
      </ul>
      
    </div>
    
  </body>
  </html>`)
})

app.post('/create-item', function(req, res){
  console.log(req.body.item)
  res.send("Thanks for submitting the form.")
})

app.listen(3000)
