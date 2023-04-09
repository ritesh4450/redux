import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

const store = createStore(reducer,applyMiddleware(logger.default));
const history = [];

function reducer(state={amount:1},action)
{
    if(action.type==='increment')
    {
        return {amount:state.amount+1};
    }
    return state;
}

//console.log(store.getState());
history.push(store.getState())
store.dispatch({type:'increment'});
history.push(store.getState());
console.log(history);
//console.log(store.getState());