import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import DashboardLayout from "@/layouts/Dashboard";
import Navbar from "@/components/dashboard/Navbar";
import StudentPage from "../pages/StudentPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Navbar />
              <AdminPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/list/students"
          element={
            <DashboardLayout>
              <Navbar />
              <StudentPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
