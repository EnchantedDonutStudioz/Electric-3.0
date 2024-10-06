import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer();
const port = process.env.PORT || 8080;

app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

app.serveChemical();

listen(port, () => {
    console.log(`Electric listening on port ${port}`);
});