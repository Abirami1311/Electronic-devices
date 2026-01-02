const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const deviceRoutes = require('./routes/deviceRoutes');

app.use('/devices', deviceRoutes);

app.get('/', (req, res) => {
    res.send('Electronic Devices API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
