import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <CreateTask />
      <Tasks />
    </div>
  );
}
