const express = require('express');

const app  = express();

const PORT = process.env.PORT || 3000

// Middleware to serve Static Files
app.use(express.static('public'));

// Set Views
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
const homeRouter = require('./src/routes/home');

app.use('/', homeRouter);

app.get('*', (req, res) => {
    res.send("Not Found");
});

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});