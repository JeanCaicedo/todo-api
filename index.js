const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://juliojeancarlos780:k5u97FTAJQSRZNXj@cluster0.dfdnuxq.mongodb.net/todo-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Usar rutas de tareas
app.use('/api', taskRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Tareas Pendientes');
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
