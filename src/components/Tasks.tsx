import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";
export function Tasks() {
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
      <fieldset className={styles.contentList}>
        <label className={styles.contentItem}>
          <input type="checkbox" className={styles.checkboxRound} /> checkbox 1
          <button className={styles.removeIcon}>
            <Trash size={20} />
          </button>
        </label>
        <label className={styles.contentItem}>
          <input type="checkbox" className={styles.checkboxRound} /> checkbox 2
        </label>
      </fieldset>
    </article>
  );
}
