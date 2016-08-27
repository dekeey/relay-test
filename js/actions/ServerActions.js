import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

let ServerActions = {
    receiveLinks(links){
        console.log('in serveractions');
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_LINKS,
            links
        });
    }
};

export default ServerActions;