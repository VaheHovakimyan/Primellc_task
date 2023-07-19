import { Routes, Route } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Welcome from "./Welcome/Welcome";
import Account from "./Account/Account";


export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <Welcome />
                } />
                <Route path="/register" element={
                    <Register />
                } />
                <Route path="/login" element={
                    <Login />
                } />
                <Route path="/account" element={
                    <Account />
                } />
                <Route path="*" element={
                    <NotFound />
                } />
            </Routes>
        </div>
    )
}