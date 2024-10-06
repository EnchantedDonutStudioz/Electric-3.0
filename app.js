import { ChemicalServer } from "chemicaljs";
import express from "express";
import basicAuth from "express-basic-auth";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [app, listen] = new ChemicalServer();
const port = process.env.PORT || 8080;

app.use(basicAuth({
    users: { 'admin': 'thegreensk1b1d1toiletatemycatandd1ed' },
    challenge: true,
}));

app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/', (req, res) => {
    res.redirect('/success');
});

app.serveChemical();

listen(port, () => {
    console.log(`Electric listening on port ${port}`);
});