import { PlusCircle } from "phosphor-react";
import { Fragment, useState } from "react";
import styles from "./CreateTask.module.css";
import { Tasks } from "./Tasks";

export function CreateTask() {
  const [inputTask, setInputTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleCreateNewTask(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    setTasks([...tasks, inputTask]);
    setInputTask("");
  }

  function handleInputTaskChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputTask(e.target.value);
  }
  function deleteTask(taskToDelete: string): void {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }
  return (
    <Fragment>
      <div className={styles.container}>
        <form>
          <div className={styles.wrapper}>
            <input
              onChange={handleInputTaskChange}
              type="text"
              value={inputTask}
              placeholder="Adicione uma nova tarefa"
            />
            <button onClick={handleCreateNewTask} title="Criar">
              Criar <PlusCircle size={20} />
            </button>
          </div>
        </form>
      </div>
      <Tasks data={tasks} onDeleteTask={deleteTask} />
    </Fragment>
  );
}
