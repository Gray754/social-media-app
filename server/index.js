require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const port = process.env.PORT;

const { register, login, logout, userSession } = require('./ctrl/authCtrls');
const { getUserInfo } = require('./ctrl/dbCtrls');

const app = express();
app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUnintialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db);
  console.log('Database Connected');
});

// User Auth
app.post('/register', register);
app.post('/login', login);
app.get('/session', userSession);
app.get('/logout', logout);

// Database Information
app.get('/user/info', getUserInfo);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
