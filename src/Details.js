import React,{useState} from 'react'
function Details() {
    const[items,setItems]=useState([]);

    const add =() => {
        setItems([...items,{
            id:items.length,
            value:'i want to die :-)'
        }])

    }
    return (
        <>
        <h1>here i can only add the value i have stored not from user</h1>
        <input type="text"/>
            <button onClick={add}>Add</button>
            <ul>
               {items.map(item =>(
                   <li key={item.id}>{item.value}</li>
               ))}
            </ul>
        </>
    )
     }
export default Details

