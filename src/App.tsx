import AppRoutes from "./adapters/routes/AppRoutes";
import { ThemeProvider } from "./theme-provider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
