import mongoose ,{Schema, model, Document} from 'mongoose';
import { mongoosePagination } from "ts-mongoose-pagination";

interface Lista extends Document{
    descricao:string
}

const ListaSchema = new Schema({
    descricao: String
});

export default model<Lista>('Lista', ListaSchema);