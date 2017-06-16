const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// Init passport
app.use(passport.initialize());
app.use(passport.session());

app.post