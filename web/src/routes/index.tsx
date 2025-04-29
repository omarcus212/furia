import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLogin from "../pages/login";
import PageRegister from "../pages/register";
import PrivateRoute from "./PrivateRoute";
import PageGames from "../pages/GamesTime";

const Routing: React.FC = () => {

    return (
        <BrowserRouter>
                 <Routes>
                     <Route path="/" element={<Navigate to="/login" replace />} />
                     <Route index path={'/login'}element={<PageLogin />}/>
                     <Route path={'/register'}element={<PageRegister />}/>
                     <Route path='/games' element={<PrivateRoute>
                        <PageGames />
                     </PrivateRoute>} />
                    </Routes>   
        </BrowserRouter>

    )
}

export default Routing