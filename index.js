const express = require('express');
const cors = require('cors');
const { sequelize } = require("./models");
const authenticate = require("./routes/authentication.js")
const artisteTracks = require("./routes/artisteTracks.js")

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use('/authenticate/', authenticate)

app.use('/artiste/', artisteTracks)


app.listen({ port: 5000 }, async () => {
    await sequelize.authenticate();
    console.log('Server connected')
})
