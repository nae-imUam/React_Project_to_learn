const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/data', (req, res) => {
    const data = [
        {id: 1, label: 'Category A', value: 30},
        {id: 2, label: 'Category B', value: 40},
        {id: 3, label: 'Category C', value: 20},
        {id: 4, label: 'Category B', value: 50},
        {id: 5, label: 'Category A', value: 30},
    ];

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

