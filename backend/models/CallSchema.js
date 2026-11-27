import mongoose from "mongoose"

const CallSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo : {type: String, required: true},
    descricao : {type: String, required: true, maxlength : 50, minlength: 4},
    status_concluido: {type: Boolean, default : false}
}, { versionKey: false });

const call = mongoose.model("calls", CallSchema);

export default call