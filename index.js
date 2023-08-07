require('dotenv').config();
const express = require('express');
const sequilize = require('./db');
const models = require('./models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('../backend/middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

//Обработка ошибок, замыкающий Middleware
app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'WORKING' });
// });

const start = async () => {
  try {
    await sequilize.authenticate(); //подключение к БД
    await sequilize.sync(); //сверяет состояние БД со схемой данных
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
