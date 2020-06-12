import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
 
class Application {
 
     public app: express.Application;

     constructor(){
         this.app = express();
         this.middlewares();
         
     }

     private middlewares(){
         this.app.use(express.json());
         this.app.use(express.urlencoded({ extended: true }));
         this.app.use(cors());
         this.app.use(morgan('tiny'));
     }

     listen(){
         this.app.listen(process.env.PORT || 3001, ()=>{
             this.app.get('/', (req,res)=>{
                 return res.json({ mensagem: ' Sucesso '});
             });
         });
     }
}
export default Application;