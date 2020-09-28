const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

//app.get("/", function(req, res) {
//    res.sendFile(path.join(__dirname, "../public/index.html"))
//});

app.use(express.static("public"));
app.listen(PORT, ()=>{
    console.log("app listening on port", PORT)
});