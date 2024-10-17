//internal import
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import NoTaskFound from "./NoTaskFound.jsx"

import { useState } from "react";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn react such taht i can treat it like my slave and make it do whatever i want to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate,setTaskToUpdate]=useState(null)

  function handleAddEditTask(newtask,isAdd) {
    if(isAdd){
      setTasks([...tasks, newtask] );
    }else{

      setTasks(
        tasks.map(task=>{
          if(task.id===newtask.id)
          {
            return newtask;
          }
          else{
            return task;
          }
        })
      )
     
    }
   
    setShowAddModal(false);
  }
  function handleEditTask(task){
    setTaskToUpdate(task);
    setShowAddModal(true)

  }
  function handleCloseClick(){
    setShowAddModal(false);
    setTaskToUpdate(null);
  }
  function handleDelete(taskId){
    setTasks(tasks.filter(a=>{
      if(a.id!=taskId)
      {
        return tasks;
      }
    }))
  }
  function handleAllDelete(){
    tasks.length=0;
    setTasks([...tasks])

  }
  function handleFavorite(taskId){

    const taskIndex=tasks.findIndex(task=>task.id===taskId)
    const newTasks=[...tasks]
    newTasks[taskIndex].isFavorite=! newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
    

  }
  function handleSearch(searchTerm){
    //console.log(searchTerm)
    const filtered=tasks.filter(task=>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);


  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddEditTask} onCloseClick={handleCloseClick} taskToUpdate={taskToUpdate}/>}

      <div className="container">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch}/>
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowAddModal(true)} onDeleteAll={handleAllDelete}/>
          {
            tasks.length>0 ? (<TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDelete} onFav={handleFavorite}/>):(<NoTaskFound/>)
          }
          
        </div>
      </div>
    </section>
  );
}
