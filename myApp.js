let express = require('express');
let app = express();
let bodyParser = require('body-parser');

/** 5) Implement a Root-Level Request Logger Middleware */
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
})

/** 9) Use body-parser to Parse POST Requests */
app.use(bodyParser.urlencoded({extended: false}))

/** 1) Meet the node console. */
console.log("Hello World");

/** 2) Serve an HTML file */
app.get("/", function(req, res) {
  res.sendFile( __dirname + '/views/index.html' );
})

/** 3) Serve static assets  */
app.use("/public", express.static(__dirname + '/public'))


/** 4) serve JSON on a specific route */
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": "Hello json".toUpperCase()})
  }
  else {
    res.json({"message": "Hello json"})
  }
})

/** 5) Implement a Root-Level Request Logger Middleware */
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
})

/** 6) Chain Middleware to Create a Time Server */
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.json({time: req.time});
});

/** 7) Get Route Parameter Input from the Client */
app.get('/:word/echo', function(req, res) {
  res.json({echo: req.params.word})
})

/** 8) Get Query Parameter Input from the Client  and /** 10) Get Data from POST Requests */ 
app.route('/name').get(function(req, res) { res.json({ name: req.query.first + " " + req.query.last })}).post(function(req, res) { res.json({ name: req.body.first + " " + req.body.last })})




  


























 module.exports = app;
