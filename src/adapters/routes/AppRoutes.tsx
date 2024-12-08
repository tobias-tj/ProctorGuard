import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import DashboardLayout from "@/layouts/Dashboard";
import Navbar from "@/components/dashboard/Navbar";
import StudentListPage from "../pages/StudentListPage";
import ExamListPage from "../pages/ExamListPage";
import AnnouncementPage from "../pages/AnnouncementPage";
import EventPage from "../pages/EventPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Navbar title="Dashboard" />
              <AdminPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/list/students"
          element={
            <DashboardLayout>
              <Navbar title="Estudiantes" />
              <StudentListPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/list/exams"
          element={
            <DashboardLayout>
              <Navbar title="Examenes" />
              <ExamListPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/announcement"
          element={
            <DashboardLayout>
              <Navbar title="Anuncios" />
              <AnnouncementPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/events"
          element={
            <DashboardLayout>
              <Navbar title="Eventos" />
              <EventPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
