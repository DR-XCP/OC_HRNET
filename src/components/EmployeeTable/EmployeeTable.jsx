import { Form, Input, Select, Table } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { employeeColumns } from "../EmployeeColumns/EmployeeColumns";
import s from "./style.module.css";

export function EmployeeTable() {
   // Utilise useSelector pour accéder à l'état des employés dans le store Redux
   const employees = useSelector((state) => state.employees.list);
   const [searchTerm, setSearchTerm] = useState("");
   const [pageSize, setPageSize] = useState(10);
   const [currentPage, setCurrentPage] = useState(1);

   // Méthode recherche employé dans search bar
   const filteredEmployees = employees.filter((employee) => {
      const fullName =
         `${employee.firstName} ${employee.lastName}`.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();

      return fullName.includes(searchTermLower);
   });

   return (
      <>
         <section className={s.tableContainer} aria-labelledby="tableTitle">
            <h2 id="tableTitle" className={s.title}>
               Current Employees
            </h2>
            <div className={s.show}>
               <Form.Item label="Show entries" htmlFor="entriesSelect">
                  <Select
                     id="entriesSelect"
                     defaultValue="10"
                     style={{ width: 60 }}
                     onChange={(value) => setPageSize(Number(value))}
                     aria-label="Select number of entries to display"
                  >
                     <Select.Option value="10">10</Select.Option>
                     <Select.Option value="25">25</Select.Option>
                     <Select.Option value="50">50</Select.Option>
                     <Select.Option value="100">100</Select.Option>
                  </Select>
               </Form.Item>
            </div>

            <div className={s.search}>
               <label htmlFor="searchInput">Search:</label>
               <Input
                  id="searchInput"
                  placeholder="Search employees"
                  allowClear
                  style={{ width: 200 }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>

            <div className={s.table}>
               <Table
                  pagination={{
                     current: currentPage,
                     pageSize: pageSize,
                     onChange: (page) => {
                        setCurrentPage(page);
                     },
                  }}
                  className={s.tableContainer}
                  columns={employeeColumns}
                  dataSource={filteredEmployees}
                  rowKey="id"
               />
            </div>
         </section>
      </>
   );
}
