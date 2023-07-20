import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Welcome from "./Welcome/Welcome";
import Account from "./Account/Account";


export default function Main() {

    const [accountUsername, setAccountUsername] = useState("User");

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
                    <Login
                    setAccountUsername={setAccountUsername}
                    />
                } />
                <Route path="/account" element={
                    <Account
                        accountUsername={accountUsername}
                    />
                } />
                <Route path="*" element={
                    <NotFound />
                } />
            </Routes>
        </div>
    )
}