import styles from "./Header.module.css";
import logo from "../assets/Logo.png";
export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <img src={logo} alt="ignite toDo logo" />
      </div>
    </header>
  );
}
