
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from './app-router/Router'
function App() {
  return (
    <>
    <Navbar/>
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
    
    </>
    
  );
}

export default App;
