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
const { auth} = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'));

// GET routes
app.get('/api/auth', auth, (req, res) => {
    res.json({
        isAuth: true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname
    });
});

app.get('/api/logut', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if(err){
            return res.status(400).send(err);
        }   
        
        res.sendStatus(200);
    });
});

app.get('/api/getBook', (req, res) => {
    let id =  req.query.id;
    
    Book.findById(id, (err, doc) => {
        if(err) return res.status(400).send(err);
        res.send(doc);
    });
});

app.get('/api/books', (req, res) => {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;
    
    // Order = Asc || Desc
    Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err, doc) => {
        if(err){
            return res.status(400).send(err);
        }
        
        res.send(doc);
    });
});

app.get('/api/getReviewer', (req, res) => {
    let id = req.query.id;
    
    User.findById(id, (err, doc) => {
        if(err){
            return res.status(400).send(err);
        }
        
        res.json({
            name: doc.name,
            lastname: doc.lastname
        });
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

// UPDATE routes


// DELETE routes

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`);
});