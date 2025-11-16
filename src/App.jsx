import React, { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState({});

  const deleteTaks = (index) => {
    const newTasklist = [...taskList]
    newTasklist.splice(index, 1);
    setTaskList(newTasklist);
  }

  const toggleComplete = (index) => {
    setCompleted({ ...completed, [index]: !completed[index] })
  }

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task before adding!");
      return;
    }
    setTask("");
    setTaskList([...taskList, task]);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative'>
      {/* Animated background blobs */}
      <div className='fixed top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
      <div className='fixed top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' style={{ animationDelay: '2s' }}></div>
      <div className='fixed bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' style={{ animationDelay: '4s' }}></div>

      {/* Main content */}
      <div className='relative z-10 min-h-screen flex flex-col items-center pt-20 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-6xl sm:text-7xl font-black bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 drop-shadow-lg'>
            TASK NEXUS
          </h1>
          <p className='text-cyan-300 text-lg font-light tracking-widest'>Organize • Execute • Dominate</p>
        </div>

        {/* Input Section */}
        <div className='w-full max-w-2xl mb-12'>
          <div className='glassmorphism-card p-8 border border-cyan-400/30 rounded-2xl shadow-2xl backdrop-blur-md'>
            <div className='flex gap-3 flex-col sm:flex-row'>
              <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Enter your next mission...'
                className='flex-1 bg-slate-900/50 border border-purple-400/50 rounded-lg px-6 py-4 text-white placeholder-purple-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
              />
              <button
                onClick={addTask}
                className='px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap'
              >
                DEPLOY
              </button>
            </div>
          </div>
        </div>

        {/* Tasks Container */}
        <div className='w-full max-w-2xl'>
          {taskList.length === 0 ? (
            <div className='text-center py-16'>
              <p className='text-purple-300 text-2xl font-light mb-4'>No missions yet.</p>
              <p className='text-purple-400/60 text-lg'>Add your first task to begin.</p>
            </div>
          ) : (
            <div className='space-y-4'>
              {taskList.map((item, index) => (
                <div
                  key={index}
                  className='glassmorphism-card group p-6 border border-purple-400/30 rounded-xl hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-4 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-md'
                >
                  {/* Checkbox */}
                  <input
                    type='checkbox'
                    checked={completed[index] || false}
                    onChange={() => toggleComplete(index)}
                    className='w-6 h-6 rounded-full border-2 border-cyan-400 cursor-pointer appearance-none bg-slate-900/50 checked:bg-linear-to-r checked:from-cyan-500 checked:to-purple-500 transition-all duration-300'
                  />

                  {/* Task text */}
                  <span
                    className={`flex-1 text-lg font-medium transition-all duration-300 ${completed[index]
                        ? 'line-through text-purple-400/50'
                        : 'text-white group-hover:text-cyan-300'
                      }`}
                  >
                    {item}
                  </span>

                  {/* Delete button */}
                  <button
                    onClick={() => deleteTaks(index)}
                    className='px-4 py-2 bg-red-500/20 border border-red-400/50 text-red-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500/40 hover:border-red-400 font-semibold'
                  >
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          {taskList.length > 0 && (
            <div className='mt-12 glassmorphism-card p-6 border border-purple-400/30 rounded-xl text-center backdrop-blur-md'>
              <p className='text-cyan-300 text-lg font-semibold'>
                {taskList.filter((_, i) => !completed[i]).length} / {taskList.length} Missions Active
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App