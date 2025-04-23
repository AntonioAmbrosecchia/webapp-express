const express = require('express');
const app = express();
const filmRouter = require('./routes/filmRouter');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
app.use(express.static('public'));


app.use(express.json());
app.use('/api/films', filmRouter);
app.use(express.static('public'));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server avviato su http://localhost:${PORT}`));
