const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const routes = require('./controllers')
const sequelize = require('./config/connection');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// app.engine('handlebars', hbs.engine);
// app.set ('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port http://localhost:${PORT}/`))
})