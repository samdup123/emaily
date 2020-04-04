const Express = require('express');
const app = Express();
require('./services/passportConfig');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
