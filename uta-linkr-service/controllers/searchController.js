const express = require('express');
var router = express.Router();
const { json } = require('body-parser');
const {google} = require('googleapis');
const customsearch = google.customsearch('v1');
const {search} = require('../models/searchmodel');
let query = new String('Financial Aid');


router.get('/:searchInput',(req,res) => {
  this.query = req.params.searchInput;
  //console.log(req.params.searchInput);
  let obj = runSample(this.query)
  .then(function(obj) {
    res.send(JSON.stringify(obj));
  });
    return obj;
})



async function runSample(queryIn) {
  console.log('reqparm'+queryIn);
  if(queryIn==null){
    queryIn = 'CSE'
  }
    const options = {
      q: queryIn,
      apiKey: 'AIzaSyCGshQ76NE1O9rpbWC_iDctxEYLxiKez58',
      cx: '8eaf33105eaf68d1f',
    };
    const res = await customsearch.cse.list({
      cx: options.cx,
      q: options.q,
      auth: options.apiKey,
    });
    //console.log(res.data);
    return res.data;
  }

  
module.exports = router;