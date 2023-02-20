import { Fragment } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <Fragment>
      <main className={styles.container}>
        <Header />
        <CreateTask />
      </main>
    </Fragment>
  );
}
