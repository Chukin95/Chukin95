var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

function SQL(sql) {
  con.connect(function(err) {
    if (err) throw err;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });  
}

SQL(`CREATE TABLE tateti.jugadores (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(150) NOT NULL,
  puntaje INT NOT NULL,
  PRIMARY KEY (id));
`)