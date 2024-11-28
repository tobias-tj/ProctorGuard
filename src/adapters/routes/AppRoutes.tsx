import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../../layouts/Dashboard";
import AdminPage from "../pages/AdminPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <AdminPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
