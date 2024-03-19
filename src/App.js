import { Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./pages/CreateEmployee/CreateEmployee";
import { CurrentEmployee } from "./pages/CurrentEmployee/CurrentEmployee";

export function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/table" element={<CurrentEmployee />} />
         </Routes>
      </>
   );
}
