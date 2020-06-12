import mongoose from 'mongoose';

export default async function connection(){

    try {
        mongoose.connect(process.env.APP_BD, {
            useNewUrlParser: true,
            useUnifiedTopology: true            
        })
    } catch (error) {
        console.log('Não foi possivel conectar');
    }
}