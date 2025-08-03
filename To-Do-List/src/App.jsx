import Footer from "./components/Footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import StudentForm from "./components/studentForm";
import TaskData from "./components/TaskData";
import TaskList from "./components/TaskList";
import { useState ,useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : TaskData;
  });
  
  const [filterType, setFilterType] = useState("");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value); // "pending" or "complete"
  };

  const handleStatusToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "Complete" } : task
    );
    setTasks(updatedTasks);
  };

   useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks =
    filterType === ""
      ? tasks
      : tasks.filter((task) => task.status === filterType);
  return (
    <>
      <Header />
      <StudentForm onAddTask={handleAddTask} />
      <TaskList tasks={filteredTasks} onFilterChange={handleFilterChange} onStatusToggle={handleStatusToggle} />
      <Footer />
    </>
  );
}
export default App;
