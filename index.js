const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/:name?', (req, res) => {
  const name = req.params.name || 'World';
  const version = process.version;
  res.send(`Hello ${name} from Node.js ${version}`);
});

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});
