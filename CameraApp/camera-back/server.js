// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.post('/upload', (req, res) => {
  const { image } = req.body;
  const base64Data = image.replace(/^data:image\/png;base64,/, '');
  const imageName = `image_${Date.now()}.png`;
  const imagePath = path.join(__dirname, 'uploads', imageName);

  fs.writeFile(imagePath, base64Data, 'base64', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving image');
    }

    console.log('Image saved successfully');
    return res.status(200).send({ message: 'Image uploaded', imagePath });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
