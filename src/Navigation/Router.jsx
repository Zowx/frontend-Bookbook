import { Routes, Route, Navigate } from "react-router-dom";
import CreateBookPage from "../Pages/CreateBookPage";
import HomePage from "../Pages/HomePages";
import Catalog from "../Pages/Catalog"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<Catalog />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/createBook" element={<CreateBookPage />} />
        </Routes>
    )
}

export default Router;