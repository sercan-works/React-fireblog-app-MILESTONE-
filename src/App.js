import MediaCard from "./components/Card";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from './app-router/Router'
function App() {
  return (
    <>
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
    <Navbar/>
    <MediaCard/>
    </>
    
  );
}

export default App;
