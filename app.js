const express = require('express');
const app = express();
const session = require('express-session'); 

const router = require('./routes/routes')
const hashedSecret = require('./crypto/config')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
      secret: hashedSecret,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, 
    })
  );

const PORT = 3000;

app.use('/',router)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});