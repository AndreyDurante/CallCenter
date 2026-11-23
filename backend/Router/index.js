import express from "express";
import chamados from "./callsRouter.js"

const routes = (app) => {
    app.use(express.json());
    app.use(chamados);

    app.route("/").get((req, res) => {
        res.status(200).send("Funcionando");
    });
    
};

export default routes;