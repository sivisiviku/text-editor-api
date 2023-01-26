require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./router/index")(app);

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
