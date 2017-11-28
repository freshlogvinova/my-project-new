const express = require('express');
const routes = require('./controller/routes');
const bodyParser = require('body-parser');
const app = express();

// Parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())
  .use(express.static(__dirname + '/assets'))
  .use(express.static(path.join(__dirname, 'dist')));
  .use(favicon(path.join(__dirname, '/assets/images/favicon.ico')));


app.use('/', routes);

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
