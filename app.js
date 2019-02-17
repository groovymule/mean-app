const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');


app.set('port', 3000);


//Express Middleware has to be in the correct running order!!!
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();

});
//Express Middleware to deliver static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);





const server = app.listen(app.get('port'), function() {
  // const port = server.address().port;
  const port = process.env.PORT || 3000
  console.log('Magic happens on port ' + port);
});
