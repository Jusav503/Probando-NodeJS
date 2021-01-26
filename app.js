// Imports
const express = require('express')
const app = express()
const port = 5000

// Listen on Port 5000
app.listen(port, () => console.info(`TODO PERFECTO PAPU EL PUERTO ES: ${port}`))

// Static Files
app.use(express.static('public'));

// Example for other folders
// app.use('/css', express.static(__dirname + 'public/css'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('pages/index')
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})

