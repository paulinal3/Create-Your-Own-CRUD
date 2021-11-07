const express = require('express')
const app = express()

app.set(')view engine', 'ejs')
app.use('ejsLayouts')

app.listen(8000, () => {
    console.log('connected')
})