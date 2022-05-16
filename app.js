import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.resolve('public')));

app.listen(port, () => {
    console.log(`Server is running on PORT http://localhost:${port}`)
})