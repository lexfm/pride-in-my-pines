import Link from "next/link";
// import styles from "./page.module.css";

export default function Tickets() {
  return (
    <main className="tickets-section">
      <div>
        Tickets go here
      </div>
      <Link passHref href="/">
        <button>Home</button>
      </Link>
    </main>
  );
}