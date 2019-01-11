const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(process.env.PORT || 3000,()=> console.log('server started'));
app.get('/',(req,res)=>res.render('home'));