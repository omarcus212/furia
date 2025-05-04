import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLogin from "../pages/login";
import PageRegister from "../pages/register";
import PageHome from "../pages/feed";
import PrivateRouter from "./PrivateRoute";
import PageGames from "../pages/games";
import PageMyProfile from "../pages/profile";
import PageUserProfile from "../pages/userProfile";


const Routing: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route index path={'/login'} element={<PageLogin />} />
        <Route index path={'/register'} element={<PageRegister />} />

        <Route path="/home" element={<PrivateRouter><PageHome /></PrivateRouter>} />
        <Route path="/games" element={<PrivateRouter><PageGames /></PrivateRouter>} />
        <Route path="/profile" element={<PrivateRouter><PageMyProfile /></PrivateRouter>} />
        <Route path="/profile/:username" element={<PrivateRouter><PageUserProfile /></PrivateRouter>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Routing