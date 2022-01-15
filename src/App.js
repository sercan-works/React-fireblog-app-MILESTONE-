import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/Router";

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
