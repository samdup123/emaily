const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
