import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import PatientLogin from "./pages/patientLogin";
import PatientRegister from "./pages/patientRegister";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />}/>
      <Route path="/login" element={<PatientLogin />}/>
      <Route path="/register" element={<PatientRegister />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
