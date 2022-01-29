__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/ardi', (req, res) => {
    res.sendFile(__path + '/views/ardi.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/game/pingpong', (req, res) => {
    res.sendFile(__path + '/views/pingpong.html')
})
router.get('/game/flappybird', (req, res) => {
    res.sendFile(__path + '/views/flappybird.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
