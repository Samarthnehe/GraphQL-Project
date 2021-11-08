const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://samcuber:samcuber@cluster0.ankl2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection.once('open',()=>{
    console.log("Connected to Database");
})

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));



app.listen(4000,()=>{
    console.log("listening on port 4000");
})