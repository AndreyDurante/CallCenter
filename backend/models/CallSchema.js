import mongoose from "mongoose"

const CallSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo : {type: String, required: true},
    descricao : {type: String, required: true},
    status_concluido: {type: Boolean, default : false}
}, { versionKey: false });

const call = mongoose.model("calls", CallSchema);

export default call