import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import vendaMensal from './vendaMensal.js';

dotenv.config(); // chama a url presente em .env
process.env.MONGO_URI; 

const app = express();
const PORT = 3000;

app.use(express.json()); // para o express entender o formato json

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado ao MongoDB');

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

connectDB();

//create
app.post(`/vendas`, async (req, res) => {
    try{
        const novaVendaMensal = await vendaMensalcreate(req.body);
        res.json(novaVendaMensal);
    }catch (error) {
        res.json({ error: error });
    }
});

//Read
app.get(`/vendas`, async (req, res) => {
    try {
        const vendasMensais = await vendaMensal.find();
        res.json(vendasMensais);
    } catch (error) {
        res.json({ error: error });
    }
});

//Update
app.put(`/vendas/:id`, async (req, res) => {
    try {
        const novaVendaMensal = await vendaMensal.findByIdAndUpdate(parameters.id, req.body);
        req.params.id,
        req.body,
        {new: true}
        res.json(novaVendaMensal);
    } catch (error) {
        res.json({ error: error });
    }
});

//delete
app.delete(`/vendas/:id`, async (req, res) => {
    try {
        const vendaMensalExcluida = await vendaMensal.findByIdAndDelete(req.params.id);
        req.params.id
        res.json(vendaMensalExcluida);
    } catch (error) {
        res.json({ error: error });
    }
});


app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});