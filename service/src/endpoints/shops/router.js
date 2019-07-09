const express = require('express');
const { shops: shopsMiddleware, filters: filtersMiddleware } = require('./shops');

const router = express.Router();

router.get('/', shopsMiddleware);
router.get('/filters', filtersMiddleware);

module.exports = router;
