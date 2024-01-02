const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const fetchDataFromDatabase = (date, category) => {

    const simulatedData = {
            users: Math.floor(Math.random()*1000)+500,
            revenue: Math.floor(Math.random()*5000) + 20000,
            orders: Math.floor(Math.random()*100)+50,
    };

    return simulatedData;
}

app.get('/api/data', (req, res) => {
    const {date, category } = req.query;
    const data = fetchDataFromDatabase(date, category);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

