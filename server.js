const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/save-file', (req, res) => {
  const { content } = req.body;

  fs.writeFile('your_file.txt', content, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving file');
    } else {
      res.send('File saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
