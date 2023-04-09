import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(reducer,applyMiddleware(logger.default));

function reducer(state={amount:1,},action)
{
    if(action.type === 'increment')
    {
        return {amount:state.amount+1};
    }
    return state;
}

function increment()
{
    store.dispatch({type:'increment'});
}
console.log(store.getState());
store.dispatch();
console.log(store.getState());