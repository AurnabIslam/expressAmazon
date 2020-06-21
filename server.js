const express = require("express");
var exphbs  = require('express-handlebars');

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
        title : "product listing page e"
    })

});


const PORT = 3000;

app.listen(PORT, () => {
     
    console.log('up n running');
       
})