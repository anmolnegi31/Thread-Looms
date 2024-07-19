// const express = require('express');
// const router = express.Router();
// const Manufacturer = require('../models/manufacturer');

// router.get('/', (req, res) => {
//   res.send('Manufacturer API');
// });

// module.exports = router;

import express from 'express';
import { Router } from 'express';
import Manufacturer from '../models/manufacturer.js';

const manufacturerRoute = Router();

manufacturerRoute.get('/', (req, res) => {
  res.send('Manufacturer API');
});
export default manufacturerRoute;