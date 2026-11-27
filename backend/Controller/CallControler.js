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
    
    static async AtualizarChamados (req, res) {
        const id = req.params.id;
        try{
            await call.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Chamado atualizado com sucesso"} )
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - Falha ao atualizar chamado`})
        }
    }

    static async ExcluirChamados (req, res) {
        const id = req.params.id;
        try{
            await call.findByIdAndDelete(id);
            res.status(200).json({ message: "Chamado excluído com sucesso"} )
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - Falha ao excluir chamado`})
        }
    }

    static async cadastrarChamado (req, res) {
        try {
            const chamadoNovo = await call.create(req.body);
            res.status(200).json({ message: "Chamado cadastrado com sucesso", call: chamadoNovo } )
        } catch (erro) {
            if (erro.name === "ValidationError") {
                return res.status(400).json({
                message: `${erro.message} - Verifique os dados do chamado`,
                });
            }

            return res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar chamado`,
            });
            }
    }

}

export default CallController;
