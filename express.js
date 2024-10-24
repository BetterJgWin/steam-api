const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware за задаване на заглавия
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store'); // Или задайте подходящи настройки
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
});

app.get('/api/games', async (req, res) => {
    try {
        // Вашата логика за извличане на игри
        res.json(gamesData);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).send('Error fetching games');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
