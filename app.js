let express = require("express");
let app = express();
require("dotenv").config();
let BodyParser = require("body-parser");
let cors = require("cors");
let morgan = require("morgan");
let redis = require("redis");
let client = redis.createClient();
app.use(morgan("dev"));

let conn = require("./src/helper/mysql");

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use((request, response, next) => {
  request.redis = client;
  next();
});

let path = require("path");

app.use(express.static("./ser/upload/"));
app.use(express.static("./src/upload/"));
app.use("/src", express.static(path.join(__dirname + "/src")));
let router = require("./src/index");
const bodyParser = require("body-parser");
const { request } = require("http");
const { response } = require("./src/helper");

// use cors
app.use(cors());

app.use("/", cors(), router);

conn.connect(function (error) {
  if (error) throw error;
  console.log("database hash connected");
});

app.listen(3002, function () {
  console.log("server run on port 3000");
});

// app.use('/Book', BookController)
