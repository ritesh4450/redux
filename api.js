import axios from "axios";


async function getData()
{
    const {data} = await axios.get('http://localhost:3000/accounts/1')
    console.log(data);
}

getData();