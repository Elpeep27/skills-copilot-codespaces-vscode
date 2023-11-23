// Create web server
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment,
        date: new Date()
    };
    comments.push(comment);
    res.json(comment);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
