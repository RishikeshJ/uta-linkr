const {google} = require('googleapis');
const customsearch = google.customsearch('v1');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var searchController = require('./controllers/searchController');
var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.listen(4000, ()=>console.log('server started at port : 3000'));

app.use('/searchlinkr', searchController);





