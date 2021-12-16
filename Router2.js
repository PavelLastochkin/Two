const express = require('express');
const router = express.Router();

router.get('/chat', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Ваш чат')
  })

  module.exports=router;
