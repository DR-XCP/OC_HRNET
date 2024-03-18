// reducers.js
import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
   name: "employees",
   initialState: {
      list: [],
   },
   reducers: {
      addEmployee: (state, action) => {
         state.list.push(action.payload);
      },
   },
});

// Les actions sont générées automatiquement dans le slice
export const { addEmployee } = employeeSlice.actions;

// Le reducer est aussi généré dans le slice
export default employeeSlice.reducer;
