import { Link } from "react-router-dom";
import { EmployeeTable } from "../../components/EmployeeTable/EmployeeTable";
import { Header } from "../../components/Header/Header";
import s from "./style.module.css";

export function CurrentEmployee() {
   return (
      <>
         <Header />
         <div className={s.buttonContainer}>
            <Link className={s.button} to="/" aria-label="Back to Home">
               Home
            </Link>
         </div>
         <EmployeeTable />
      </>
   );
}
