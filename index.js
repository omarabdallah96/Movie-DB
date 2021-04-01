const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('ok')
});

app.listen(port, () => console.log(`Success! Your application is running on \"http://localhost:${port}\"`)); 