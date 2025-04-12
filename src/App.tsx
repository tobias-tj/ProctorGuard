import AppRoutes from "./adapters/routes/AppRoutes";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster"; 

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <>
        <AppRoutes />
        <Toaster position="top-center"/>
      </>
    </ThemeProvider>
  );
};

export default App;
