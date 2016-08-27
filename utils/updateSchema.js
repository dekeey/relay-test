/**
 * Created by dcay on 25.08.16.
 */
import Schema from '../data/schema';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import fs from 'fs';


(async() => {
    let schema = Schema({});

    let json = await graphql(schema, introspectionQuery);

    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
        if (err) throw err;
        console.log('schema updated');
    })
})();
