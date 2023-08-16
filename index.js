// const express = require('express');
import express from 'express';

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
// const userRouter = require('./routes/user');
import userRouter from './routes/user.js';
app.use('/user', userRouter);
//오류처리
app.use('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
