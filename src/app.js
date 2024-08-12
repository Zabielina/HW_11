import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import routes from './routes/routes.js';

const app = express();
const PORT = 3000;


const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join('src', 'views', 'layouts'),
  partialsDir: path.join('src', 'views', 'partials'),
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join('src', 'views'));


app.use(express.static(path.join('src', 'public')));


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
  });
  