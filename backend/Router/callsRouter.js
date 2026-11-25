import express from "express";
import CallController from "../Controller/CallControler.js";

const router = express.Router();

router.get("/chamados", CallController.ListarChamados);
router.post("/chamados", CallController.cadastrarChamado);
router.put("/chamados/:id", CallController.AtualizarChamados);
router.delete("/chamados/:id", CallController.ExcluirChamados);


export default router;
