// require 
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
        // using nanoid to create an id for each posted note
        let noteId = nanoid(5);
        let newNotes = {
            id: noteId,
            title: req.body.title,
            text: req.body.text
        }
        // creates post note with id
        ohYeahNotes.push(newNotes)
        //console.log(ohYeahNotes);

        fs.writeFile("./db/db.json", JSON.stringify(ohYeahNotes), (err) => {
            if (err) return res.json({ err: "sorry breh didn't add."});
            return res.json({ msg: "oh yeah!"})
        });
    });
});

// delete a old note using id
router.delete("/notes/:id", (req, res) => {
    //console.log(req.params.id)
    //res.send("oh yeah")
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) return res.json({ msg: "error reading" })
        let ohYeahNotes = JSON.parse(data)
        const id = req.params.id
        // create a forloop to look at each object in array to identify which id is needed to splice that object.
        for (let i = 0; i < ohYeahNotes.length; i++) {
            if (ohYeahNotes[i].id === id) {
                ohYeahNotes.splice(i, 1)
                //deleteNote.remove();
                console.log(ohYeahNotes)
            };
        };
        // update lists of notes after deletion.
        fs.writeFile("./db/db.json", JSON.stringify(ohYeahNotes), (err) => {
            if (err) return res.json({ err: "sorry breh didn't delete."});
            return res.json({ msg: "message deleted" })
        });
    });
});
module.exports = router;