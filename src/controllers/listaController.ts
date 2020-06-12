import { Request, Response } from 'express';
import lista from '../models/lista';



class listaController {

    public async buscarTodos(req: Request, res: Response) {
        try {
            const tarefas = await lista.find();
            return res.json(tarefas);
        } catch (error) {
            res.json({ mensagem: 'Erro ao buscar tarefas' });
        }

    }

    public async buscarPorId(req: Request, res: Response) {
        const parametro = req.params;
        try {
            const tarefa = await lista.findById(req.params);
            return res.json(tarefa);
        } catch (error) {
            res.json({ mensagem: `Erro ao buscar ${parametro}` });
        }

    }

    public async criarTarefa(req: Request, res: Response) {
        try {
            const tarefa = await lista.create(req.body);
            return res.json({ tarefa, mensagem: 'Tarefa cadastrada' });
        } catch (error) {
            return res.json({ mensagem: 'Não foi possível cadastrar sua tarefa' });
        }

    }

    public async editarTarefa(req: Request, res: Response) {
        try {
            const tarefa = await lista.findByIdAndUpdate({ id_: req.params }, req.body, { new: true });
            return res.json({ tarefa, mensagem: 'Tarefa editada' });
        } catch (error) {
            return res.json({ mensagem: 'Não foi possível editar esta tarefa' });
        }

    }

    public async deletarTarefa(req: Request, res: Response) {
        try {
            const tarefa = await lista.findOneAndDelete({ _id: req.params });
            return res.json({ tarefa, mensagem: 'Tarefa deletada' });
        } catch (error) {
           return res.json({mensagem: 'tarefa deletada com sucesso '});
        }

    }
}
export default new listaController;