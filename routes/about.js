const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', {name: 'About Hipster Recipes'})
})

module.exports = router