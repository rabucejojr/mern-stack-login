


const setApp = (req, res) => {
    res.status(200).json({ message: 'Create successful' })
}

const getApp = (req, res) => {
    res.status(200).json({ message: 'Read successful' })
}

const updateApp = (req, res) => {
    res.status(200).json({ message: 'Update successful' })
}

const deleteApp = (req, res) => {
    res.status(200).json({ message: 'Delete successful' })
}

module.exports = {
    getApp, setApp, deleteApp, updateApp,
}