import AppRoutes from "./adapters/routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./theme-provider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <>
        <AppRoutes />
        <Toaster position="top-center" />
      </>
    </ThemeProvider>
  );
};

export default App;
