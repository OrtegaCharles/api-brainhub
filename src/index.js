const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const apiRouter = require('./routes/api')
require('./database');

const app = express();

app.use(cors());

app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', apiRouter);

app.listen(app.get('port'), () => {
    console.log(`Server running at port:${app.get('port')}/`);
});