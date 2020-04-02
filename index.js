const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  res.send({ hi: 'bye' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
