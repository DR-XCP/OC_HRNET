import { Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./pages/CreateEmployee/CreateEmployee";

export function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<CreateEmployee />} />
         </Routes>
      </>
   );
}
