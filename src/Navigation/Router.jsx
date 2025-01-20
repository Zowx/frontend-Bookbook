import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePages";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;