const app = require('express')();

app.use('*', (req, res) => {
    console.log('запрос от браузера');
    res.send('<h1>html в подарок</h1>');
})

const listener = app.listen(4444, function() {
    console.log(`веб браузер запущен на порте ${listener.address().port}`);
});