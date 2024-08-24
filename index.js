const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/get-ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({ ip: ip });
});

app.post('/receive-ip', (req, res) => {
    const { ip } = req.body;
    res.status(200).send('IP adresi alındı');
    if (isValidIp(ip)) {
        console.log('Geçerli IP:', ip);
    } else {
        console.log('Geçersiz IP:', ip);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});