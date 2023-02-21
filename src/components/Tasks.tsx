import { ClipboardText, Trash } from "phosphor-react";
import { SetStateAction, useState } from "react";
import styles from "./Tasks.module.css";

type TasksPropsType = {
  data: string[];
  onDeleteTask: Function;
};

type TaskListsPropsType = {
  data: string[];
  onChangeCheckInput: Function;
  onDeleteTask: Function;
};

export function TasksList({
  data,
  onChangeCheckInput,
  onDeleteTask,
}: TaskListsPropsType) {
  const [taskvalue, setTaskValue] = useState("");
  function handleCheckInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    onChangeCheckInput(e);
  }

  function handleDeleteTask(task: string) {
    console.log("recebido", task);
    onDeleteTask(task);
  }

  if (data.length) {
    return (
      <fieldset className={styles.contentList}>
        {data.map((task: string) => (
          <label className={styles.contentItem}>
            <input
              onChange={handleCheckInputChange}
              type="checkbox"
              className={styles.checkboxRound}
            />
            {task}
            <button
              onClick={(task) => handleDeleteTask(String(task))}
              className={styles.removeIcon}
            >
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

export function Tasks({ data, onDeleteTask }: TasksPropsType) {
  const [checkedCount, setCheckedCount] = useState<number>(0);

  function changeCheckInput(e: React.ChangeEvent<HTMLInputElement>): void {
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

      <TasksList
        data={data}
        onChangeCheckInput={changeCheckInput}
        onDeleteTask={onDeleteTask}
      />
    </article>
  );
}
