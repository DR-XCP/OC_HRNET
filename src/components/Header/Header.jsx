import s from "./style.module.css";

export function Header() {
   return (
      <header className={s.container}>
         <h1 className={s.title}>HRnet</h1>
      </header>
   );
}
