const express = require('express')
const router = express.Router()
const { getApp, setApp, deleteApp, updateApp } = require('../controller/appController')


// routes
router.get('/', getApp)
router.post('/', setApp)
router.put('/:id', updateApp)
router.delete('/:id', deleteApp)

module.exports = router