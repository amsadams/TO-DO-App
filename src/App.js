import React, { Fragment } from 'react';
import { useState } from 'react';

import './App.css';
let val=0
function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState()


  const deleteTask = (index)=> {

    var ask = window.confirm("Do you want to delete the task?");
    if (ask) {
      const test = [...todos];
        test.splice(index, 1);

        setTodos(test)
    }else {
      console.log("Don't delete");
    }

   
  }




  
  return (
     
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List </h1>
        <hr></hr> 
      </div>
      <div className="subHeading">
        <br />
        {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
      </div>
      <div className="input">
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:val++,text:todo,status:false}])} class="fa fa-plus" aria-hidden="true"></i>
      </div>
      <div className="todos">
{
  todos.map((obj)=> {

    return(
      <div className="todo">
      <div className="left">
        <input type="checkbox" onChange={ (e)=>{

  console.log(e.target.checked)

setTodos((todos.filter(obj2 =>
  {
if(obj2.id===obj.id)
{
  obj2.status=e.target.checked

}
return obj2
  }
)))
}} value={obj.status} />




{console.log(obj)}
{console.log(obj.text)}

<div>  <p> {obj.text} </p> </div>
      



        
      </div>
      <div className="right">
        <i 
       onClick= {()=>deleteTask(obj.id)}
       //{  

        // setTodos((todos.filter(obj2 =>
        //   {
        //       [...todos].forEach((item, index, arr) =>
               
        //           {
        //           arr.splice(index, 1);
        //           }
        //       )
        // return obj2
        //   }
        
        // )))
        // }
       
        
       
         className="fas fa-times"></i>
      </div>
    </div> )
   })
}
<Fragment>
<h2> Active Tasks </h2>

</Fragment>



       { todos.map((obj)=>
      {

        if(obj.status)
        {
          return(<h3>{obj.text}</h3>)
        }
        return null
      })}
      </div>
    </div>
  );
}

export default App;