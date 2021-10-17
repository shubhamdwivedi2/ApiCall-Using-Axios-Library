import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './index.css'

const App = () => {
    const [num, setNum] = useState('');
    const [name, setNames] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    // const [address, setAdress] = useState({});

    useEffect(

        () => {
            async function getData() {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${num}`);
                console.log(res.data);
                setNames(res.data.name);
                setUsername(res.data.username);
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setWebsite(res.data.website);
                // setAdress(res.data.address);
            }
            getData();
        });

    return (
        <>

            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="0">Select Option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <h1>You selected: <span style={{ color: 'red' }}>{num}</span> Id</h1>
            <h1>Name is: <span style={{ color: 'red' }}>{name}</span></h1>
            <h1>Username is: <span style={{ color: 'red' }}>{username}</span></h1>
            <h1>Email is:  <span style={{ color: 'red' }}>{email}</span></h1>
            <h1>Phone Number is: <span style={{ color: 'red' }}>{phone}</span></h1>
            <h1>Website is:  <span style={{ color: 'red' }}>{website}</span></h1>
            {/* <h1>Address is:  <span style={{ color: 'red' }}>{address.street}</span></h1> */}
           
        </>
    )
};

export default App;