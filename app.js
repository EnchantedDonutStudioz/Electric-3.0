import { ChemicalServer } from "chemicaljs";
import express from "express";
import basicAuth from "express-basic-auth";


const [app, listen] = new ChemicalServer();
const port = process.env.PORT || 8080;


app.use(basicAuth({
    users: { 'admin': 'password' },
    challenge: true,
    unauthorizedResponse: (req, res) => {
        if (res) {
            res.sendFile(path.join(__dirname, "auth.html"));
        } else {
            console.error("Response object is undefined");
        }
    },
}));
app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/', (req, res) => {
    res.redirect('/success');
});

app.serveChemical();

listen(port, () => {
    console.log(`Electric listening on port ${port}`);
});