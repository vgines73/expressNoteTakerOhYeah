const router = require("express").Router();
const fs = require("fs");
const { nanoid } = require("nanoid");



// get notes
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        //console.log(data);
        return res.json(JSON.parse(data));
    });
});

// make new note
router.post("/notes", (req, res) => {
    //console.log(req.body);
    //res.send("oh yeah")
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        const ohYeahNotes = JSON.parse(data);
        
     
        let noteId = nanoid(5);
        let newNotes = {
            id: noteId,
            title: req.body.title,
            text: req.body.text
        }

        ohYeahNotes.push(newNotes)
        //console.log(ohYeahNotes);

        fs.writeFile("./db/db.json", JSON.stringify(ohYeahNotes), (err) => {
            if (err) return res.json({ err: "sorry breh didn't add."});
            return res.json({ msg: "oh yeah!"})
        });
    });
});

// delete a old note
router.delete("/notes/:id", (req, res) => {
    //console.log(req.params.id)
    res.send("oh yeah")
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const ohYeahNotes = JSON.parse(data)
        const id = req.params.id

        if (ohYeahNotes[id]) {
            ohYeahNotes.splice(ohYeahNotes[id])
        }
        fs.writeFile("./db/db.json", JSON.stringify(ohYeahNotes), (err) => {
            if (err) return res.json({ err: "sorry breh didn't delete."});
            return res.json(ohYeahNotes)
        })
    })
});
module.exports = router;