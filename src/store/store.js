import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers/reducer";

const store = configureStore({
   reducer: {
      employees: employeeReducer,
   },
});

export default store;
