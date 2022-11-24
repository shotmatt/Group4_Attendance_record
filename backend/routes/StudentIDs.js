var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var multer = require('multer'); 
var upload = multer(); 

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Attendence-database';
const client = new MongoClient(url);

//A local list of animals

// GET at the root just to demonstrate
router.get('/', function(req, res, next) {
   res.send('got a GET request at /');
});
 
// GET list of pets to show that we're up and running
router.get('/StudentIDs', function(req, res, next) {
    // The first example
    //res.send('Got a GET request at /pet');

    //Adding call to pug template
    //res.render('pets', 
    //  {title: 'Pet store',
    //  message: 'Hello World! from the <tt>pets</tt> router'}
    //);

    //Passing data to the template from the handler
    //res.render('pets',
    //  {title: 'Pet store',
    //   message: 'Hello World! from the <tt>pets</tt> router',
    //   animalsList: animalsList }
    //);

    //Getting list of animals from database
    client.connect(function(err) { 
        const db = client.db(dbName);
        const collection = db.collection('animals');
        collection.find({}).toArray(function(err, data) {
            res.render('StudentIDs', {title:'StudentIDs', privelege:data, name:data, coarse:data, password:data});
        });
    });
});

module.exports = router;
