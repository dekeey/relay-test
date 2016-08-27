/**
 * Created by dcay on 25.08.16.
 */
import express from 'express';
import {MongoClient} from 'mongodb';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql'

let app = express();

app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
    schema: schema,
    graphiql: true
}));


let db;

MongoClient.connect('mongodb://testuser:123qwe@ds017636.mlab.com:17636/linkdb',(err, database) => {
   if (err) throw err;

    db = database;

    app.listen(3000, () => console.log('starts 3000'));

});

app.get('/data/links', (req, res) => {

     db.collection("links").find({}).toArray((err, links) => {
        if (err) throw err;

        res.json(links);

     })

});