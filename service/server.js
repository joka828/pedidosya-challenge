const express = require('express');
const endpointsRouter = require('./src/endpoints/router');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.use('/api', endpointsRouter);

const server = app.listen(3001, () => {
  const host = server.address().address;
  const { port } = server.address();

  // eslint-disable-next-line no-console
  console.log('Service listening at http://%s:%s', host, port);
});
