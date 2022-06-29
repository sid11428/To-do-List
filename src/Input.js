import React ,{useState}from 'react'
import './App.css'
function App() {
const [data,setData]=useState([])
const [input,setInput]=useState("")

  function handleSubmit(e){
    e.preventDefault(); 

    const newItem= {
      id: data.length,
      text :input,
      status : false
    }
    setData([...data].concat(newItem))
    setInput("")
  }

  function del(id)
  {
    const updated = [...data].filter((item) => item.id !== id)
    setData(updated)
  }
  
  function lol()
  {
    const url ="https://drive.google.com/file/d/1wB9VKhUjY_KjI_b-G6_KfZnrkKDNmpMT/view?usp=sharing"
    window.open(url, '_blank');
  }

  function toggle(ind)
  {
    setData(
      data.map(item => {
        if(item.id === ind){
        return {
          ...item, status: !item.status
        };
      }
      return item;
    })
    );
  }
  
  return (
    <div className='list'>
       <form onSubmit={handleSubmit}>
          <input type="text" placeholder="type here" onChange={(e) => setInput(e.target.value)} value={input} />
          <button  className="btn" type="submit"> Add </button>
          <button className="btn" onClick={() => lol()}>Delete All</button> 
       </form>
      {
          data.map((todo)=>
         <div key={todo.id} className='inside' >
           
           <p onClick={ () => toggle(todo.id) } className={ todo.status ? 'crossed-line' : '' }>{todo.text} </p>
           <button className='sec_btn'  onClick={() => del(todo.id)}>Delete</button>  
             
        </div>)
      }
       
        
    </div>
  );
}

export default App;