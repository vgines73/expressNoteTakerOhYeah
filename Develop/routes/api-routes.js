const router = require("express").Router();
const fs = require("fs");


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json(JSON.parse(data));
    });
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    res.send("oh yeah it's working!");
});

module.exports = router;