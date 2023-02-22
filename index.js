import express from 'express';

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is Successfully running on PORT ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hey i am Sarvesh');
})
