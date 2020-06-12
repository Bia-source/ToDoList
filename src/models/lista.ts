import {Schema, model, Document} from 'mongoose';

interface Lista extends Document{
    descricao:string
}

const ListaSchema = new Schema({
    descricao: String
});

export default model<Lista>('Lista', ListaSchema);