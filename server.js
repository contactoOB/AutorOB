const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde dist
app.use(express.static(path.join(__dirname, 'dist')));

// Endpoint de prueba como webservice
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola Pedro, tu webservice está funcionando en Render!' });
});

// Redirigir todas las rutas al index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Webservice corriendo en puerto ${PORT}`);
});
