const express = require('express');
require('./services/passport')
const app = express();





//production environment variable or use 3000 for dev 
const PORT = process.env.PORT || 3000;
app.listen(PORT);
