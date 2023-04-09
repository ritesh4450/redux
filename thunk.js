import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";
const init='initial-user';


const store = createStore(reducer,applyMiddleware(logger.default,thunk.default));

function reducer(state={amount:1},action)
{
    if(action.type===init)
    {
        return {amount:action.payload}
    }
    return state;
}

//store.dispatch({type:init,payload:5})

async function setState(dispatch,getState)
{
    const {data}=await axios.get('http://localhost:3000/accounts/1')
    dispatch({type:init,payload:data.amount})

}

console.log(store.getState())

setTimeout(()=>{
    store.dispatch(setState)
},5000)

console.log(store.getState());

