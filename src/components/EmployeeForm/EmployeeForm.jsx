import { Button, DatePicker, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import Modal from "react-modal-fromdr/dist/Modal";
import { useModals } from "react-modal-fromdr/dist/contexts/ModalContext";
import "react-modal-fromdr/dist/global.css";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEmployee } from "../../store/reducers/reducer";
import { US_STATES } from "../CityItems/CityItems";
import { DepartmentItems } from "../DepartmentItems/DepartmentItems";
import s from "./style.module.css";

export function EmployeeForm() {
   const dispatch = useDispatch();
   const { openModal, closeModal, modals } = useModals();
   const modalId = "employeeSuccessModal";
   const [modalContent, setModalContent] = useState("");
   const [form] = useForm();

   const onFinish = (values) => {
      const formattedValues = {
         ...values,
         startDate: values.startDate
            ? values.startDate.format("YYYY-MM-DD")
            : null,
         dateOfBirth: values.dateOfBirth
            ? values.dateOfBirth.format("YYYY-MM-DD")
            : null,
         id: uuidv4(),
      };

      dispatch(addEmployee(formattedValues));

      const message = `${values.firstName} ${values.lastName} has been added!`;
      setModalContent(message);

      openModal(modalId);
      form.resetFields();
   };

   return (
      <section className={s.formContainer} aria-labelledby="formTitle">
         <h2 id="formTitle" className={s.formTitle}>
            Create Employee
         </h2>
         <Form
            form={form}
            className={s.form}
            onFinish={onFinish}
            name="advanced_form"
            layout="vertical"
         >
            <Form.Item
               name="firstName"
               label="First Name"
               aria-label="First Name"
               aria-required="true"
               rules={[
                  { required: true, message: "Please add a First Name" },
                  {
                     pattern: /^[A-Za-z]+$/,
                     message: "First Name must be only letters",
                  },
               ]}
            >
               <Input
                  id="firstName"
                  placeholder="First Name"
                  minLength={2}
                  maxLength={20}
               />
            </Form.Item>

            <Form.Item
               className={s.test}
               name="lastName"
               label="Last Name"
               aria-label="Last Name"
               aria-required="true"
               rules={[
                  { required: true, message: "Please add a Last Name" },
                  {
                     pattern: /^[A-Za-z]+$/,
                     message: "Last Name must be only letters",
                  },
               ]}
            >
               <Input
                  id="lastName"
                  placeholder="Last Name"
                  minLength={2}
                  maxLength={20}
               />
            </Form.Item>
            <div className={s.datePickers}>
               <Form.Item
                  name="dateOfBirth"
                  label={<span id="dobLabel">Date of Birth</span>}
                  aria-label="Date of Birth"
                  aria-required="true"
                  rules={[
                     {
                        required: true,
                        message: "Please select a Date of Birth",
                     },
                     {
                        validator: (_, value) => {
                           if (!value) {
                              return Promise.resolve();
                           }
                           const eighteenYears = new Date(
                              new Date().setFullYear(
                                 new Date().getFullYear() - 18
                              )
                           );
                           if (value.isAfter(eighteenYears)) {
                              return Promise.reject(
                                 new Error("The minimum age required is 18.")
                              );
                           }
                           return Promise.resolve();
                        },
                     },
                  ]}
               >
                  <DatePicker />
               </Form.Item>

               <Form.Item
                  name="startDate"
                  label={<span id="startLabel">Start Date</span>}
                  aria-label="Start Date"
                  aria-required="true"
                  rules={[
                     { required: true, message: "Please select a Start Date" },
                  ]}
               >
                  <DatePicker />
               </Form.Item>
            </div>

            <legend className={s.addressLegend}>Address</legend>
            <Form.Item
               name="street"
               label="Street"
               aria-label="Street"
               aria-required="true"
               rules={[
                  { required: true, message: "Please add a Street" },
                  {
                     pattern: /^[A-Za-z0-9\s]+$/,
                     message: "Street must be alphanumeric",
                  },
               ]}
            >
               <Input
                  id="street"
                  placeholder="Street"
                  minLength={2}
                  maxLength={30}
               />
            </Form.Item>

            <Form.Item
               name="city"
               label="City"
               aria-label="City"
               aria-required="true"
               rules={[
                  { required: true, message: "Please add a City" },
                  {
                     pattern: /^[A-Za-z]+$/,
                     message: "City must be only letters",
                  },
               ]}
            >
               <Input
                  id="city"
                  placeholder="City"
                  minLength={2}
                  maxLength={20}
               />
            </Form.Item>

            <div className={s.stateAndZip}>
               <Form.Item
                  name="state"
                  label="State"
                  aria-required="true"
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
                  name="zipCode"
                  label="Zip Code"
                  aria-label="Zip Code"
                  aria-required="true"
                  rules={[
                     { required: true, message: "Please add a Zip Code" },
                     {
                        pattern: /^\d+$/,
                        message: "Zip Code must be numeric",
                     },
                  ]}
               >
                  <Input
                     id="zipCode"
                     placeholder="Zip Code"
                     minLength={5}
                     maxLength={5}
                  />
               </Form.Item>
            </div>
            <Form.Item
               name="department"
               label="Select a Department"
               aria-label="Department"
               aria-required="true"
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
         {modals[modalId] && (
            <Modal
               id={modalId}
               contentSrc={modalContent}
               isOpen={modals[modalId]}
               onClose={() => closeModal(modalId)}
               styles={{
                  container: {
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                  },
                  modal: {
                     width: "290px",
                     borderRadius: "8px",
                  },
               }}
            />
         )}
      </section>
   );
}
