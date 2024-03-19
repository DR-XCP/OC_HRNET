import { Table } from "antd";
import { useSelector } from "react-redux";
import { employeeColumns } from "../EmployeeColumns/EmployeeColumns";
import s from "./style.module.css";

export function EmployeeTable() {
   // Utilise useSelector pour accéder à l'état des employés dans le store Redux
   const employees = useSelector((state) => state.employees.list);

   return (
      <>
         <h2 className={s.title}>Current Employees</h2>
         <Table
            className={s.tableContainer}
            columns={employeeColumns}
            dataSource={employees}
            rowKey="id"
         />
      </>
   );
}
