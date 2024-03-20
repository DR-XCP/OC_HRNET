import { Button, DatePicker, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import Modal from "react-modal-fromdr/dist/Modal";
import { useModals } from "react-modal-fromdr/dist/contexts/ModalContext";
import "react-modal-fromdr/dist/global.css";
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

      const message = `${values.firstName} ${values.lastName} have been added`;
      setModalContent(message);

      openModal(modalId);
      form.resetFields();
   };

   return (
      <div role="form" className={s.formContainer}>
         <h2 className={s.formTitle}>Create Employee</h2>
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
               rules={[
                  { required: true, message: "Please add a First Name" },
                  {
                     pattern: /^[A-Za-z]+$/,
                     message: "First Name must be only letters",
                  },
               ]}
            >
               <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
               className={s.test}
               name="lastName"
               label="Last Name"
               aria-label="Last Name"
               rules={[
                  { required: true, message: "Please add a Last Name" },
                  {
                     pattern: /^[A-Za-z]+$/,
                     message: "Last Name must be only letters",
                  },
               ]}
            >
               <Input placeholder="Last Name" />
            </Form.Item>
            <div className={s.datePickers}>
               <Form.Item
                  name="dateOfBirth"
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
                  name="startDate"
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
               name="street"
               label="Street"
               aria-label="Street"
               rules={[
                  { required: true, message: "Please add a Street" },
                  {
                     pattern: /^[A-Za-z0-9\s]+$/,
                     message: "Street must be alphanumeric",
                  },
               ]}
            >
               <Input placeholder="Street" />
            </Form.Item>
            <Form.Item
               name="city"
               label="City"
               aria-label="City"
               rules={[
                  { required: true, message: "Please add a City" },
                  {
                     pattern: /^[A-Za-z]+$/,
                     message: "City must be only letters",
                  },
               ]}
            >
               <Input placeholder="City" />
            </Form.Item>
            <div className={s.stateAndZip}>
               <Form.Item
                  name="state"
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
                  name="zipCode"
                  label="Zip Code"
                  aria-label="Zip Code"
                  rules={[
                     { required: true, message: "Please add a Zip Code" },
                     { pattern: /^\d+$/, message: "Zip Code must be numeric" },
                  ]}
               >
                  <Input placeholder="Zip Code" />
               </Form.Item>
            </div>
            <Form.Item
               name="department"
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
            <div className={s.modal}>
               {modals[modalId] && (
                  <Modal
                     id={modalId}
                     contentSrc={modalContent}
                     isOpen={modals[modalId]}
                     onClose={() => closeModal(modalId)}
                  />
               )}
            </div>
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
