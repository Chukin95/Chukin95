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
      let resultado = {result};
      console.log(sqlMessage);
    });
  });  
}

SQL(`CREATE TABLE tateti.tateti5 (id INT NOT NULL AUTO_INCREMENT,
  jugador VARCHAR(150) NOT NULL,
  ganadas INT NOT NULL,
  perdidas INT NOT NULL,
  PRIMARY KEY (id)) ENGINE = InnoDB;`)