// CREATE AN ENTRY 
const createApp = (req, res) => {
    res.status(200).json({ message: 'Create successful' })
}

// READ AN ENTRY
const readApp = (req, res) => {
    res.status(200).json({ message: 'Read successful' })
}

// UPDATE AN ENTRY
const updateApp = (req, res) => {
    res.status(200).json({ message: `Update successful ${req.params.id}` })
}

// DELETE AN ENTRY
const deleteApp = (req, res) => {
    res.status(200).json({ message: `Delete successful ${req.params.id}` })
}

// EXPORTING OF FUNCTIONS
module.exports = {
    createApp, readApp, deleteApp, updateApp,
}