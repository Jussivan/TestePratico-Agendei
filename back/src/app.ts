import express from 'express';
import './config/db';
import taskRoutes from './routes/taskRoutes';

const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

app.use('/api', taskRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;