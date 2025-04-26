import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing: React.FC = () => {



    return (
        <BrowserRouter>
                 <Routes>
                        <Route index path={'/'} />
                    </Routes>   
        </BrowserRouter>

    )
}

export default Routing