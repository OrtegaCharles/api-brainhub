const router = require('express').Router();
const apiUserRouter = require('./api/userRoutes');

router.use('/user', apiUserRouter);

module.exports = router; 