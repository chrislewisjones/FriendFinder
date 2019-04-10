// var mysql = require("mysql");
// var path = require("path");

// var connection;
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "RootRoot",
//     database: "friendfinder_DB"
//   });
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     //once successfully connected, you may want to query your database for the info you'll need later!
//   }
// });

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "RootRoot",
  database: "friendfinder_DB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    connection.query("SELECT * FROM profiles", function(err, result) {
      res.json(result);
    });
  });

  //   $.post("/api/friends", newUser, function(data) {
  //     connection.query(
  //       "INSERT INTO profiles (name, photo, scores) VALUES (?,?,?)"[
  //         (newUser.name, newUser.photo, newUser.scores)
  //       ],
  //       function(err, result) {
  //         res.json(result);
  //       }
  //     );
  //   });
};
