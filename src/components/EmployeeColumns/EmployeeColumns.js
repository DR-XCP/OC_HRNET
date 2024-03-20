export const employeeColumns = [
   {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
   },
   {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
   },
   {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
   },
   {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
   },
   {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
   },
   {
      title: "Street",
      dataIndex: "street",
      key: "street",
      sorter: (a, b) => a.street.localeCompare(b.steet),
   },
   {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
   },
   {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
   },
   {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      sorter: (a, b) => a.zipCode.localeCompare(b.zipCode),
   },
];
