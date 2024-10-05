import { ChemicalServer } from "chemicaljs";
import { ChemicalBuild } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer();
const port = process.env.PORT || 8080;

app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

app.serveChemical();

app.use((req, res) => {
    res.status(404);
    res.send("404 Error");
});

const build = new ChemicalBuild({
    path: "dist",
    default: "uv",
    uv: true,
    scramjet: false,
    meteor: false,
    rammerhead: true,
});
build.write(true)

listen(port, () => {
    console.log(`Listening on port ${port}`);
});