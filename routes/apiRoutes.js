const router = require("express").Router();
const store = require("../db/store")

let db = require("../db/db.json");
router.get("/api/notes", function(req, res) {
    db = json.parse(fs.readfileSync("./db/db.json", "UTF-8"))
    console.log(db)
    res.json(db)
});

let db = require("../db/db.json");
const { Router } = require("express");
router.post("/api/notes", function(req, res) {
    db.push(req.body)
    fs.writefileSync("./db/db.json", db, function(){
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
    fs.writefileSync("./db/db.json", db, function(){
        console.log(db)
        res.json(db)
    })
});

module.exports = router