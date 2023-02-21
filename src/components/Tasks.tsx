import { ClipboardText, Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

type PropsType = {
  data: string[];
};

export function TasksList({ data }: PropsType) {
  if (data.length) {
    return (
      <fieldset className={styles.contentList}>
        {data.map((task: string) => (
          <label className={styles.contentItem}>
            <input type="checkbox" className={styles.checkboxRound} />
            {task}
            <button className={styles.removeIcon}>
              <Trash size={20} />
            </button>
          </label>
        ))}
      </fieldset>
    );
  } else {
    return (
      <div className={styles.contentEmpty}>
        <ClipboardText size={50} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    );
  }
}

export function Tasks({ data }: PropsType) {
  return (
    <article>
      <article className={styles.tasksInfo}>
        <strong className={styles.tasksInfoCreated}>
          Tarefas criadas
          <span>{data.length}</span>
        </strong>
        <strong className={styles.tasksInfoDone}>
          Concluídas
          <span>2</span>
        </strong>
      </article>

      <TasksList data={data} />
    </article>
  );
}
