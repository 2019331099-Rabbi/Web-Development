const express = require('express');
const loremIpsum = require('lorem-ipsum').loremIpsum;
const pug = require('pug');
const app = express();


app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const message1 = loremIpsum({ count: 50 });
    const message2 = 'This is the second message';
    res.render('index', { title: 'My Website', message1, message2});
});

app.listen(3000, () => {
    console.log("Server run success");
})