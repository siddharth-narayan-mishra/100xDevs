const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

function countReq(req,res){
  requestCount++;
}

app.use(countReq);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;