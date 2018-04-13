const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

const { User } = require('./models/user'); 
const { Book } = require('./models/book');

app.use(bodyParser.json());
app.use(cookieParser());

// GET routes
app.get('/api/getBook', (req, res) => {
    let id =  req.query.id;
    
    Book.findById(id, (err, doc) => {
        if(err) return res.status(400).send(err);
        res.send(doc);
    });
});


// POST routes
app.post('/api/book', (req, res) => {
    const book = new Book(req.body);
    
    book.save((err, doc) => {
        if(err) return res.status(400).send(err);
        
        res.status(200).json({
            post: true,
            bookId: doc._id
        });
    });
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`);
});