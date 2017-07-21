const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.use('/', express.static('public'));

var api = require("./api");
if (api) { console.log('api existe');
}

app.get('/api/preguntas', function (req, res) {
    var questions = api.questions();
    questions.then( (result) => {
        console.log(result);
        res.status(200).json(result);
    });
});
