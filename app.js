//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
//const path = require('path');

//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

//app.use(morgan('dev'));

const conn = mysql.createConnection({
    host: 'lab4.cpqom2m5tam2.us-east-1.rds.amazonaws.com',
    user: 'virt',
    password: 'virtualizacion26',
    database: 'PeliculaDB'
  });
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route for homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM Peli";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('product_view',{
      results: results
    });
  });
});
 
//route for insert data
app.post('/save',(req, res) => {
  let data = {Nombre: req.body.Nombre, Genero: req.body.Genero};
  let sql = "INSERT INTO Peli SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE Peli SET Nombre='"+req.body.Nombre+"', Genero='"+req.body.Genero+"' WHERE idPeli="+req.body.idPeli;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM Peli WHERE idPeli ="+req.body.idPeli+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//server listening
app.listen(3000, () => {
  console.log('Server is running at port 3000');
});