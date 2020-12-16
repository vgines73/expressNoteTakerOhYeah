// npm package needed to give server functionality
const express = require("express");
// tells node creating "express" server
const app = express();
// initial port
const PORT = process.env.PORT || 5000;

// router backend
const apiRoutes = require("./routes/api-routes");
// router frontend
const clientRoutes = require("./routes/client-routes");

// setup express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", clientRoutes);

// listener - starts the server
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));