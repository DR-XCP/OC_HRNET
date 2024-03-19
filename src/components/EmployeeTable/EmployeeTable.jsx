import { Form, Input, Select, Table } from "antd";
import { useSelector } from "react-redux";
import { employeeColumns } from "../EmployeeColumns/EmployeeColumns";
import s from "./style.module.css";

export function EmployeeTable() {
   // Utilise useSelector pour accéder à l'état des employés dans le store Redux
   const employees = useSelector((state) => state.employees.list);

   return (
      <>
         <div className={s.tableContainer}>
            <h2 className={s.title}>Current Employees</h2>
            <div className={s.show}>
               <Form.Item>
                  <span>Show </span>
                  <Select
                     defaultValue="10"
                     style={{ width: 60 }}
                     aria-label="Select entries"
                  >
                     <Select.Option value="10">10</Select.Option>
                     <Select.Option value="25">20</Select.Option>
                     <Select.Option value="50">50</Select.Option>
                     <Select.Option value="50">100</Select.Option>
                  </Select>
                  <span> entries</span>
               </Form.Item>
            </div>

            <div className={s.search}>
               <span>Search: </span>
               <Input placeholder="Search" allowClear style={{ width: 200 }} />
            </div>

            <div className={s.table}>
               <Table
                  className={s.tableContainer}
                  columns={employeeColumns}
                  dataSource={employees}
                  rowKey="id"
               />
               <span className={s.showing}>Showing 0 to 0 of 0 entries</span>
            </div>
         </div>
      </>
   );
}
