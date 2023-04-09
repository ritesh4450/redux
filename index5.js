import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";

const inc="increment";
const increaseByValue="increaseByValue";
const history =[]

const store = createStore(reducer,applyMiddleware(logger.default));

function reducer(state={amount:1},action)
{
    if(action.type===inc)
    {
        return {amount:state.amount+1};
    }
    if(action.type===increaseByValue)
    {
        return {amount:state.amount+action.payload}
    }
    return state;
}

function increase()
{
    return {type:inc};
}

function increaseBySomething(value)
{
    return {type:increaseByValue,payload:value}
}

store.subscribe(()=>
{
    history.push(store.getState());
    console.log(history);
})

var a=0;
setInterval(()=>{
    store.dispatch(increaseBySomething(5));
    
    
},2000)