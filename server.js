const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:room',(req,res,next)=>{
    res.render('room',{roomId:req.params.room});
});


app.get('/', (req, res, next) => {
    res.redirect(`/${uuidv4()}`);
});


app.listen(3000);

