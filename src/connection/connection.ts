import mongoose from 'mongoose';

 async function connection(){

    try {
        mongoose.connect('mongodb+srv://dbToDo:admin@apitodo-stsbj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true            
        })
    } catch (error) {
        console.log('Não foi possivel conectar');
    }
}
export default connection;