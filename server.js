/**
 * Created by dcay on 25.08.16.
 */
import express from 'express';
import {MongoClient} from 'mongodb';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql'

let app = express();

app.use(express.static('public'));



let db;

MongoClient.connect('mongodb://testuser:123qwe@ds017636.mlab.com:17636/linkdb',(err, database) => {
   if (err) throw err;

    db = database;

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));


    app.listen(3000, () => console.log('starts 3000'));

});
