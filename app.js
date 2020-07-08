const express=require('express');
const pug=require('pug');
const path=require('path')
const morgan=require('morgan');
const app=express();
const {connectToDB}=require('./model/db.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug');
app.use(express.static('public',))


connectToDB();

app.get('/',(req,res)=>{

});
app.get('/login',(req,res)=>{
 res.render('login.pug')
})

const PORT=3000 || process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})