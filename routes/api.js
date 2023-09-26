const express = require('express');
const router = express.Router();
router.post('/resources', (req, res) => {
    const hello = "Hello";
    res.json({ success: hello });
  });
  router.get('/resources', (req, res) => {
   
    res.json({ success: "This is get method api endpoint" });
  });
  module.exports = router;