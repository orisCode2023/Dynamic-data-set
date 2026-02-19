import express from 'express';
import tdRouter from './routes/terrorData.router.js';
import scoreRouter from './routes/score.router.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/terrorData', tdRouter)
app.use('/score', scoreRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});