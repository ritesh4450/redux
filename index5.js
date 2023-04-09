import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const inc="increment";
const increaseByValue="increaseByValue";
const init='initial';
const history =[]

const store = createStore(reducer,applyMiddleware(logger.default,thunk.default));

async function getData()
{
    const {data} = await axios.get('http://localhost:3000/accounts/1')
    console.log(data);
}

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

    if(action.type===init)
    {
        return {amount:action.payload};
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

async function initval(dispatch,getState)
{
    const {data} = await axios.get('http://localhost:3000/accounts/1')
    dispatch({type:init,payload:data.amount})
}
var a=0;
setTimeout(()=>{
    store.dispatch(increase());
    
    
},2000)

setTimeout(()=>{
    store.dispatch(initval);
    
    
},2000)