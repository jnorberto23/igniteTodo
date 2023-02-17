import styles from "./Tasks.module.css";
export function Tasks() {
  return (
    <article className={styles.container}>
      <div className={styles.tasksInfo}>
        <strong className={styles.tasksInfoCreated}>
          Tarefas criadas
          <span>2</span>
        </strong>
        <strong className={styles.tasksInfoDone}>
          Concluídas
          <span>2</span>
        </strong>
      </div>

      <div></div>
    </article>
  );
}
