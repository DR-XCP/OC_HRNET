import { Link } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { Header } from "../../components/Header/Header";
import s from "./style.module.css";

export function CreateEmployee() {
   return (
      <>
         <Header />
         <div className={s.buttonContainer}>
            <Link
               className={s.button}
               to="/table"
               aria-label="go to Current Employee View"
            >
               View Current Employees
            </Link>
         </div>
         <EmployeeForm />
      </>
   );
}
