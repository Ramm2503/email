const express = require('express');
const app = express();
const port = 3000;
const path=require('path')

// Set up the view engine
app.set('view engine', 'pug');
app.set('views','./views' );

// Define a simple route
app.get('/', (req, res) => {
    res.render('index', {
        title:"My template engine", 
        message:"Hello",
        user:{name:'divya'},
    } )
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
