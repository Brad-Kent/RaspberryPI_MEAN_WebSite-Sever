var express = require('express');
var router = express.Router();


let ledState = 1;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

router.post('/', function(req, res, nest){
  console.log('A POST HAS BEEN RECIEVED ***********');
  //console.log(req.body)
  let data = req.body
  console.log(data.SwitchingState)

  if (ledState == 1) {
    console.log('Changing state from off -> on 1')
    ledState = 2
  }
  else{
    ledState = 1
    console.log('Changing state from on -> off 2')
  }
  // res.writeHead(200, {'Content-Type': 'text/html'})
  // res.end()
  res.render('index', { title: 'Express' });
});



router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

router.get('/topics', function(req, res, next) {
  res.render('topics', { title: 'Topics' });
});

router.get('/ref', function(req, res, next) {
  res.render('ref', { title: 'References' });
});



module.exports = router;
