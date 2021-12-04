const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5011;

app.use(cors());

const travelNowVehicles = JSON.parse(fs.readFileSync('travel-now/vehicles.json', 'utf8'));
const goNowVehicles = JSON.parse(fs.readFileSync('go-now/vehicles.json', 'utf8'));

// TRAVEL NOW ROUTE
app.get('/travel-now/vehicles', (req, res) => {
    res.send(JSON.stringify(travelNowVehicles));
});

// GO NOW ROUTE
app.get('/go-now/vehicles', (req, res) => {
    res.send(JSON.stringify(goNowVehicles));
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});