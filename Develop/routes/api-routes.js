const router = require("express").Router();
const fs = require("fs");

// get notes
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        //console.log(data);
        res.json(JSON.parse(data));
    });
});

// make new note
router.post("/notes", (req, res) => {
    console.log(req.body.tile);
    //res.send("oh yeah")
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        const ohYeahNotes = JSON.parse(data);

        ohYeahNotes.push({
            title: req.body.title,
            text: req.body.text
        })
        console.log(ohYeahNotes);

    //     fs.writeFile("./db/db.json", JSON.stringify(ohYeahNotes)), (err) => {
    //         if (err) return res.JSON({ err: "sorry breh didn't add."});
    //         return res.json({ msg: "oh yeah!"})
    //     }

    });
});

module.exports = router;