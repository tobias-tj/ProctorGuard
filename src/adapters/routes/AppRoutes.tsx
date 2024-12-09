import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import DashboardLayout from "@/layouts/Dashboard";
import Navbar from "@/components/dashboard/Navbar";
import StudentListPage from "../pages/StudentListPage";
import ExamListPage from "../pages/ExamListPage";

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
              <StudentListPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/list/exams"
          element={
            <DashboardLayout>
              <Navbar />
              <ExamListPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
