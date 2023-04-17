import { createStore,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";

const increment='increment';
const decrement='decrement';
const variable='variable';
const history=[]


const totRed = combineReducers(
    {
        red1:reducer,
        red2:bonus
    }
)
const store = createStore(totRed,applyMiddleware(logger.default));


function reducer(state={amount:1},action)
{
    switch(action.type)
    {
        case increment:{
            return {amount:state.amount+1}
        }
        case decrement:{
            return {amount:state.amount-1}
        }
        case variable:{
            return {amount:state.amount+action.payload}
        }
        default:
            return state
    }
    return state;
}

function bonus(state={points:0},action)
{
    switch(action.type)
    {
        
        case variable:{
            return {points:state.points+action.payload*0.1}
        }
        default:
            return state
    }
}


console.log(store.getState());
history.push(store.getState());

store.dispatch({type:increment});
history.push(store.getState());

store.dispatch({type:increment});
history.push(store.getState());

store.dispatch({type:variable,payload:50});
history.push(store.getState());

console.log(history);