import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/Router";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  );
}

export default App;
