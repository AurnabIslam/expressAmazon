const express = require("express");
const  exphbs  = require('express-handlebars');

const product= require("./models/product")

const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"))


app.get("/",(req,res)=>{

    res.render("index",{
       title : "Home Page" 
    })

});
 
app.get("/productListings",(req,res)=>{
    res.render("index",{
        title : "product listing page",
        data  : product.getAllProducts()
    })

});


const PORT = 3000;

app.listen(PORT, () => {
     
    console.log('up n running');
       
})