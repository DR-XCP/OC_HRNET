import { Button, DatePicker, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/reducers/reducer";
import { US_STATES } from "../CityItems/CityItems";
import { DepartmentItems } from "../DepartmentItems/DepartmentItems";
import s from "./style.module.css";

export function EmployeeForm() {
   const dispatch = useDispatch();

   const onFinish = (values) => {
      // Convertis les dates en une chaîne ISO  avant de les dispatcher
      const formattedValues = {
         ...values,
         "Date of Birth": values["Date of Birth"].format("YYYY-MM-DD"),
         "Start Date": values["Start Date"].format("YYYY-MM-DD"),
      };

      dispatch(addEmployee(formattedValues));
      console.log("Employee added:", formattedValues);
   };

   return (
      <div role="form" className={s.formContainer}>
         <h2 className={s.formTitle}>Create Employee</h2>
         <Form
            className={s.form}
            onFinish={onFinish}
            name="advanced_form"
            layout="vertical"
         >
            <Form.Item
               name="First Name"
               label="First Name"
               aria-label="First Name"
               rules={[{ required: true, message: "Please add a First Name" }]}
            >
               <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
               className={s.test}
               name="Last Name"
               label="Last Name"
               aria-label="Last Name"
               rules={[{ required: true, message: "Please add a Last Name" }]}
            >
               <Input placeholder="Last Name" />
            </Form.Item>

            <div className={s.datePickers}>
               <Form.Item
                  name="Date of Birth"
                  label="Date of Birth"
                  aria-label="Date of Birth"
                  rules={[
                     {
                        required: true,
                        message: "Please select a Date of Birth",
                     },
                  ]}
               >
                  <DatePicker />
               </Form.Item>

               <Form.Item
                  name="Start Date"
                  label="Start Date"
                  aria-label="Start Date"
                  rules={[
                     { required: true, message: "Please select a Start Date" },
                  ]}
               >
                  <DatePicker />
               </Form.Item>
            </div>

            <p className={s.address}>Address</p>

            <Form.Item
               name="Street"
               label="Street"
               aria-label="Street"
               rules={[{ required: true, message: "Please add a Street" }]}
            >
               <Input placeholder="Street" />
            </Form.Item>

            <Form.Item
               name="City"
               label="City"
               aria-label="City"
               rules={[{ required: true, message: "Please add a City" }]}
            >
               <Input placeholder="City" />
            </Form.Item>

            <div className={s.stateAndZip}>
               <Form.Item
                  name="State"
                  label="State"
                  aria-label="State"
                  rules={[{ required: true, message: "Please select a State" }]}
               >
                  <Select placeholder="Select a state">
                     {US_STATES.map((state) => (
                        <Select.Option key={state.value} value={state.value}>
                           {state.label}
                        </Select.Option>
                     ))}
                  </Select>
               </Form.Item>

               <Form.Item
                  name="Zip Code"
                  label="Zip Code"
                  aria-label="Zip Code"
                  rules={[{ required: true, message: "Please add a Zip Code" }]}
               >
                  <Input placeholder="City" />
               </Form.Item>
            </div>

            <Form.Item
               name="Department"
               label="Select a Department"
               aria-label="Department"
               rules={[
                  { required: true, message: "Please select a Department" },
               ]}
            >
               <Select placeholder="Select a Department">
                  {DepartmentItems.map((department) => (
                     <Select.Option
                        key={department.value}
                        value={department.value}
                     >
                        {department.label}
                     </Select.Option>
                  ))}
               </Select>
            </Form.Item>

            <Form.Item>
               <Button
                  className={s.submitButton}
                  type="primary"
                  htmlType="submit"
               >
                  Save
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}
