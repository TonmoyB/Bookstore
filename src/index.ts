import express from 'express';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', authorRoutes, bookRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Bookstore!');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
export default app;
