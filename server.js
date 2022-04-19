const express = require('express');
const wish = require('./model/wish');

const app = express();

app.set(`view engine`, ` ejs`);
app.use(express.urlencoded({extended: true}));
app.use(express.static(`public`));

app.get(`/`, (req, res) => {
    wish.fetchAllWishes(wishesfromfile => {
        console.log(wishesfromfile);
        res.render(`index`, {mywishes: wishesfromfile});
    });



});

app.post (`/wish`, (reg, res)=>{
    let userData = reg.body.userwish;

    let newWish = new Wish(userData);
    newwish.savewish();
    res.redirect(`/`);


});


const port = 5000;


app.listen(port, () => {
    console.log(`server is running ${port}.` );
});