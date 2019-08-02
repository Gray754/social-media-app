require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const port = process.env.PORT;

// const {insertCtrlFilesHere} = require('./ctrl/userCtrls')
const { getUserInfo } = require('./ctrl/dbCtrls');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db);
  console.log('Database Connected');
});

app.get('/user/info', getUserInfo);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
