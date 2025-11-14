import React, { useState } from 'react'

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const deleteTaks=(index)=>{
    const newTasklist =[...taskList]
    newTasklist.splice(index,1);
    setTaskList(newTasklist);
  }

  return (
    <div className='w-screen h-screen bg-gray-600'>
      <div className="body pt-30 ">
        <h1 className='text-4xl font-bold font-serif text-pink-600 text-center'>TODO LIST</h1>
        <div className="inputForm mt-10 flex justify-center">
          <input value={task} onChange={(e) => {
            setTask(e.target.value);
          }} className='w-100 h-15 mt-10 border rounded-2xl border-pink-500 text-3xl text-white p-10 outline-none' type="text" placeholder='Enter your task' />
          <button onClick={() => {
            if (task.trim() === "") {
              alert("Please enter a task before adding!");
              return; 
            }
            setTask("");
            setTaskList([...taskList, task]);


          }} className='w-30 h-20 mt-10 ml-10 bg-pink-500 text-white text-2xl rounded-2xl active:scale-94'>Add Task</button>
        </div>
      </div>
      <div className="task">

        <h1 className='text-3xl font-bold font-serif text-white text-center mt-10'>Your Tasks</h1>
        <div className="taskItem bg-gray-600 flex flex-col items-center  justify-center mt-10">
          {taskList.map((item, index) => {
            return (
              <div key={index} className='bg-gray-800 w-1/2 h-20  mb-10 flex  items-center justify-between p-10 rounded-2xl'>
                <h1 className='text-2xl font-serif text-white'>{item}</h1>
                <button onClick={()=>{
                  deleteTaks(index)
                }} className='ml-10 bg-pink-500 text-white rounded-2xl p-2'>
                  Delete
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </div>



  )
}

export default App