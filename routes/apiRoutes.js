const express = require("express");
const router = express.Router();

let db = require("../db/db.json");
router.get("/api/notes", function(req, res) {
    db = json.parse(fs.readFileSync("./db/db.json", "UTF-8"))
    console.log(db)
    res.json(db)
});

router.post("/api/notes", function(req, res) {
    db.push(req.body)
    fs.writeFileSync("./db/db.json", db, function(){
        console.log(db)
        res.json(db)
    })
});

router.delete("/api/notes/:id", function(req, res) {
    var deleteNoteID = req.params.id
    let data = []
    for (let i = 0; i < data.length; i++) {
        if (db[i].id !== deleteNoteID) {
            data.push(db[i])
        }
    }
    db = data
    fs.writeFileSync("./db/db.json", db, function(){
        console.log(db)
        res.json(db)
    })
});

module.exports = router