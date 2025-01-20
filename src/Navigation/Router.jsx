import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePages";
import Catalog from "../Pages/Catalog"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<Catalog />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;