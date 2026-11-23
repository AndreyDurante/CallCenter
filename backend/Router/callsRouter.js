import express from "express";
import CallController from "../Controller/CallControler.js";

const router = express.Router();

router.get("/chamados", CallController.ListarChamados);

export default router;
