import { Routes, Route, Navigate } from "react-router-dom";
import CreateBookPage from "../Pages/CreateBookPage";
import HomePage from "../Pages/HomePages";
import Catalog from "../Pages/Catalog"
import Login from "../Pages/Login";
import Register from "../Pages/Register"
import BookCardDetail from "../Pages/BookCardDetail"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<Catalog />} />
            <Route path="/createBook" element={<CreateBookPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<BookCardDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;