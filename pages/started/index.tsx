import Link from "next/link";
import styles from "./page.module.css";

export default function Started() {
  return (
    <main className={styles.main}>
      <div>
        Some page to get started Ja
      </div>
      <Link passHref href="/">
        <button>Home</button>
      </Link>
    </main>
  );
}