const express = require('express');
const fs = require('fs');

const router = express.Router();

const endpointsPath = `${__dirname}`;
const endpoints = fs.readdirSync(endpointsPath).filter(filename => filename !== 'router.js');

endpoints.forEach((endpoint) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const endpointRouter = require(`${endpointsPath}/${endpoint}`);
  router.use(`/${endpoint}`, endpointRouter);
});

module.exports = router;
