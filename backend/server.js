const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

const app = express()

//calls routes
app.use('/api/', require('./routes/appRoutes'))
app.use('/api/read', require('./routes/appRoutes'))
app.use('/api/update', require('./routes/appRoutes'))
app.use('/api/delete', require('./routes/appRoutes'))


//prints server ports
app.listen(port, () => console.log(`server started on port ${port}`))