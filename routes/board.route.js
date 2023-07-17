const { Router } = require('express');
const { BoardModel } = require('../models/board.model');

const boardRouter = Router();

boardRouter.get('/', async (req, res) => {
  try {
    const boards = await BoardModel.find();
    res.status(200).send({ boards });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = { boardRouter };
