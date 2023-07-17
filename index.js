const cors = require('cors');
const express = require('express');
const { connection, PORT } = require('./config/db');
const { boardRouter } = require('./routes/board.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', boardRouter);

app.listen(PORT, connection);
