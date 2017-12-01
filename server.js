const express = require('express');
const routes = require('./controllers/routes');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
const html = require('html');

// Parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())
  .use(express.static(__dirname + '/assets'))
  .use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
      .json({
        status: 'error',
        message: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message
    });
});
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
