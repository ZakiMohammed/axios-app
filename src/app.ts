import express, {Application} from 'express';

const app: Application = express();

const PORT = process.env.PORT || 5000;

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./controllers/posts'));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));