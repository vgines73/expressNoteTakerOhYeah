// dependencies
const router = require("express").Router();
// need to include path package
const path = require("path");

// routing to get to notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// routing to get to index/home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

// routing to access javascript file
router.get("/assets/js/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
})

// routing to access ccs file
router.get("/assets/css/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
})

module.exports = router;