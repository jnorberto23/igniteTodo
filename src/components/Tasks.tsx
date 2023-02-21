import { ClipboardText, Trash } from "phosphor-react";
import { SetStateAction, useState } from "react";
import styles from "./Tasks.module.css";

type TasksPropsType = {
  data: string[];
};

type TaskListsPropsType = {
  data: string[];
  handleCheckInput: Function;
};

export function TasksList({ data, handleCheckInput }: TaskListsPropsType) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log("clicou");
    handleCheckInput(e);
  }
  if (data.length) {
    return (
      <fieldset className={styles.contentList}>
        {data.map((task: string) => (
          <label className={styles.contentItem}>
            <input
              onChange={handleInputChange}
              type="checkbox"
              className={styles.checkboxRound}
            />
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

export function Tasks({ data }: TasksPropsType) {
  const [checkedCount, setCheckedCount] = useState<number>(0);

  function handleCheckInput(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.checked) {
      setCheckedCount(checkedCount + 1);
    } else {
      setCheckedCount(checkedCount - 1);
    }
  }

  return (
    <article>
      <article className={styles.tasksInfo}>
        <strong className={styles.tasksInfoCreated}>
          Tarefas criadas
          <span>{data.length}</span>
        </strong>
        <strong className={styles.tasksInfoDone}>
          Concluídas
          <span>
            {!data.length ? checkedCount : `${checkedCount} de ${data.length}`}
          </span>
        </strong>
      </article>

      <TasksList data={data} handleCheckInput={handleCheckInput} />
    </article>
  );
}
