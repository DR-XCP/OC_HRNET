import logo from "../../assets/image/logo.webp";
import s from "./style.module.css";

export function Header() {
   return (
      <header className={s.container}>
         <img className={s.logo} src={logo} alt="Logo Wealth Health" />
         <h1 className={s.title}>HRnet</h1>
      </header>
   );
}
