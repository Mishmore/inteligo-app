const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json);

router.get('/', (req, res) => {
  res.json({ message: 'json'});
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.use('/', express.static('public'));
