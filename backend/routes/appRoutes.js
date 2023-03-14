const express = require('express')
const router = express.Router()

//IMPORTS FROM APPCONTROLLER
const { createApp, readApp, deleteApp, updateApp } = require('../controller/appController')


// REROUTES TO SPECIFIC API DESTINATION
// CHECKED VIA POSTMAN FOR HTTP RESPONSES
router.route('/').get(readApp).post(createApp)
router.route('/:id').delete(deleteApp).put(updateApp)

module.exports = router