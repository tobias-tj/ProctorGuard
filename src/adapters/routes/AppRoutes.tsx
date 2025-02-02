import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import AdminPage from "../pages/AdminPage";
import DashboardLayout from "@/layouts/Dashboard";
import Navbar from "@/components/dashboard/Navbar";
import StudentListPage from "../pages/StudentListPage";
import ExamListPage from "../pages/ExamListPage";
import AnnouncementPage from "../pages/AnnouncementPage";
import HelpPage from "../pages/HelpPage";
import ClosePage from "../pages/ClosePage";
import ExamByStudentById from "../pages/ExamByStudentIdPage";
import StudentByExamId from "../pages/StudentByExamIdPage";
import LoginForm from "@/LoginForm";

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  /*const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };*/

  return (
    <Router>
      <Routes>
        {/* Ruta de inicio de sesión */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />

        {/* Rutas protegidas dentro del dashboard */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="Dashboard" />
                <AdminPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/list/students"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="Estudiantes" />
                <StudentListPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/list/exams"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="Exámenes" />
                <ExamListPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/announcement"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="Avisos" />
                <AnnouncementPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/help"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="Ayuda" />
                <HelpPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/close"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="" />
                <ClosePage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/list/exams/:studentId"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="" />
                <ExamByStudentById />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/list/students/:examId"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Navbar title="" />
                <StudentByExamId />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
