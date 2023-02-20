import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

type PropsType = {
  data: string[];
};

export function Tasks({ data }: PropsType) {
  return (
    <article>
      <article className={styles.tasksInfo}>
        <strong className={styles.tasksInfoCreated}>
          Tarefas criadas
          <span>2</span>
        </strong>
        <strong className={styles.tasksInfoDone}>
          Concluídas
          <span>2</span>
        </strong>
      </article>

      {data.map((task: string) => (
        <label className={styles.contentItem}>
          <input type="checkbox" className={styles.checkboxRound} />
          {task}
          <button className={styles.removeIcon}>
            <Trash size={20} />
          </button>
        </label>
      ))}
    </article>
  );
}
