const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/api/random-quote', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    res.json(response.data[0]);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
