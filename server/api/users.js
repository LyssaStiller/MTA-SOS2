const router = require('express').Router()

const {User} = require('../db/models')

module.exports = router

router.put('/:userId', (req, res, next) => {
  const id = req.params.userId
})
