import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const Routing: React.FC = () => {

  return (
    <BrowserRouter>
      <PublicRoute />
      <PrivateRoutes />
    </BrowserRouter>

  )
}

export default Routing