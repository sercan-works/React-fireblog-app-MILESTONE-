
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from './app-router/Router'
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <>
    
   
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
    
    </>
    
  );
}

export default App;
