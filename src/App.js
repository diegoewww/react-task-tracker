import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Futbol Class",
        day: "April 16th at 3:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Party Night",
        day: "Agosto 22th at 9:30pm",
        reminder: false,
    },
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
