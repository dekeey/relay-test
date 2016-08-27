/**
 * Created by dcay on 25.08.16.
 */
import express from 'express';
import {MongoClient} from 'mongodb';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();

app.use(express.static('public'));


(async() => {
    let db = await MongoClient.connect('mongodb://testuser:123qwe@ds017636.mlab.com:17636/linkdb')
    let schema = Schema(db);
    app.use('/graphql', GraphQLHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3000, () => console.log('starts 3000'));

})();
