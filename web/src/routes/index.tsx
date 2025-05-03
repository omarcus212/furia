import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLogin from "../pages/login";
import PageRegister from "../pages/register";
import PrivateRoute from "./PrivateRoute";
import PageGames from "../pages/games.tsx/index.tsx";
import PageMyProfile from "../pages/profile/index.tsx";
import PageHome from "../pages/feed.tsx/index.tsx";
import PageUserProfile from "../pages/userProfile";

const Routing: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route index path={'/login'} element={<PageLogin />} />
        <Route path={'/register'} element={<PageRegister />} />

        <Route path='/games' element={<PrivateRoute>
          <PageGames />
        </PrivateRoute>} />

        <Route path='/profile' element={<PrivateRoute>
          <PageMyProfile />
        </PrivateRoute>} />

        <Route path='/profile/:username' element={<PrivateRoute>
          <PageUserProfile />
        </PrivateRoute>} />

        <Route path='/home' element={<PrivateRoute>
          <PageHome />
        </PrivateRoute>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Routing