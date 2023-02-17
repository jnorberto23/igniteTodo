import { PlusCircle } from "phosphor-react";
import styles from "./CreateTask.module.css";

export function CreateTask() {
  return (
    <div className={styles.container}>
      <form action="">
        <div className={styles.wrapper}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit" title="Criar">
            Criar <PlusCircle size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
