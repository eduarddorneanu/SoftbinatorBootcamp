import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import App from './App';
import Secret from './Secret';
import Layout from './components/Layout';

const UserSecret = () => {
    const {id} = useParams();

    return <div>
        <p>Secret is: {id}</p>
    </div>
}

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/secret">
                    <Route path="" element={<Secret />} />
                    <Route path="super-secret" element={<div>This is super secret</div>} />
                    <Route path=":id" element={<UserSecret />} />
                </Route>
                <Route path="/login" element={
                <div>
                    <form>
                        <label>Email</label>
                        <input />
                        <label>Password</label>
                        <input />
                    </form>
                </div>
            } />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;