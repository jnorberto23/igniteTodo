import styles from "./CreateTask.module.css";

export function CreateTask() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action="">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}
