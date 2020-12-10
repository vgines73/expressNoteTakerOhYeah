const router = require("express").Router();
const fs = require("fs");


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json(JSON.parse(data));
    });
});


module.exports = router;