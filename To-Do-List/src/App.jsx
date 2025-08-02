import Footer from "./components/Footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import StudentForm from "./components/studentForm";
import TaskData from "./components/TaskData";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks,setTasks]=useState(TaskData);

   const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <StudentForm onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} />
      <Footer />
    </>
  );
}
export default App;
