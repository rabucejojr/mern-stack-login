const express = require('express')
const router = express.Router()



// routes
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Login successful' })
})
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Post successful' })
})
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update successful ${req.params.id}` })
})
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete successful ${req.params.id}` })
})

module.exports = router