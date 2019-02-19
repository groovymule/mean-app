const express = require('express');
const app = express();
const path = require('path');
const routes = require('./api/routes');


app.set('port', 3000);


//Express Middleware has to be in the correct running order!!!
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();

});
//Express Middleware to deliver static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);





// const server = app.listen(app.get('port'), function() {
//   const port = server.address().port;
//
//   console.log('Magic happens on port ' + port);
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
