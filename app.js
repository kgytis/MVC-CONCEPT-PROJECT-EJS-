import 'dotenv/config';
import express from 'express';


import router from './routes/bars.js'

const app = express();
const port = process.env.PORT;


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/bars', router);
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on PORT http://localhost:${port}`)
})
