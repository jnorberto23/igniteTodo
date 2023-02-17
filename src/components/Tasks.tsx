import styles from "./Tasks.module.css";
export function Tasks() {
  return (
    <article className={styles.container}>
      <div className={styles.tasksInfo}>
        <strong className={styles.tasksInfoCreated}>Tarefas criadas</strong>
        <strong className={styles.tasksInfoDone}>Concluídas</strong>
      </div>
    </article>
  );
}
