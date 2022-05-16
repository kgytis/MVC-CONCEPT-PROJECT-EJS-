import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on PORT http://localhost:${port}`)
})