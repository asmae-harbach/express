const express = require('express'); 

const app = express(); 

const port = 5000; 

app.set('view engine', 'jade') ;
app.set('views','./views') ;
app.use('/public', express.static('./public'));


const myLogger = function (req, res, next) {
  const date = new Date();
  const heure = date.getHours();
  const jour = date.getDay();
  if(heure >= 9 && heure < 17 && jour >= 1 && jour <= 5){
    res.send('Connexion Impossible')
  }else{
    next()
  }
}
app.use(myLogger)


app.get('/', function (req, res) {
    res.render('home') ;

})
app.get('/contact', function (req, res) {
  res.render('contact') ;
})
app.get('/services', function (req, res) {
  res.render('services') ;
})
 
 
 

app.listen(port, function() {
    console.log('Le serveur est en cours d\'exécution, ' +
        'veuillez ouvrir votre navigateur à http://localhost:%s', 
        port);
});