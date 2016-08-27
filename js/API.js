import {post} from 'jquery';
import ServerActions from './actions/ServerActions'

let API = {
    fetchLinks(){
        post('/graphql', {
            query: `{
                      links {
                        title
                        url
                        _id
                      }
                    }`
        }).done(resp=>{
           ServerActions.receiveLinks(resp.data.links);
        });
    }
};

export default API;