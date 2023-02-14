import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { HomePage } from './pages/HomePage';
import { ProfilePage } from "./pages/ProfilePage";
import { Navigation } from "./components/Navigation";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";


const App = () => {
  const{isAuth} = useAuthStore((state)=>state)
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePage/>}/>
          {/**Se pueden añadir mas rutas protegidas  Route path="/dashboard" element={<DashboardPage/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
