const authPassport = require('passport');
module.exports = (app) => {
  app.get('/', function (req, res) {
      res.send({Hi: 'there.'})
  })
  
  app.get('/auth/google',
  authPassport.authenticate('google', { scope: ['profile', 'email'] }));
  
  app.get('/auth/google/callback', 
  authPassport.authenticate('google', { 
    failureRedirect: '/'
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
    //console.log(res)
  });
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send("You have been logged out. Goodbye.");
  })
  app.get('/api/user', (req, res) => {
    res.send(req.user);
  })
};
