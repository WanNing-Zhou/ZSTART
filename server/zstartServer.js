const express = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const app = express()

app.use('', express.static('../z'))

app.listen(80, () => {
    console.log('服务器已开启于：http://127.0.0.1')
})