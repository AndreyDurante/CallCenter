import express from "express";
import call from "../models/CallSchema.js";

class CallController {
    static async ListarChamados (req, res) {
        try{
            const chamadosEncontrados = await call.find({});
            res.status(200).json(chamadosEncontrados);
        } catch (erro) {
            res.status(500).send("Chamados não encontrados");
        }
    } 
}

export default CallController;
