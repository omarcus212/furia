import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import { AuthProvider } from "../AuthContext/AuthContext";
import PublicRoute from "./PublicRoute";


const Routing: React.FC = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PublicRoute />
        <PrivateRoutes />
      </AuthProvider>
    </BrowserRouter>

  )
}

export default Routing