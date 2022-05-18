const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});