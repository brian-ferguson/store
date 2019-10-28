const mongoose = require("mongoose");
const secret = require("./config/secret");
const express = require("express");
const app = express();
const router = express.Router();


const Product = require("./models/product");

const API_PORT = 3001;

//connect to the mongoose database
mongoose.connect(secret("dbUri"), {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoose connection error: "));


//get route
router.get("/getData", (req, res) => {
  Product.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data});
  });
});

app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
