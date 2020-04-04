const Express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = Express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey1, keys.cookieKey2],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./services/passportConfig');
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
