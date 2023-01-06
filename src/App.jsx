import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import "./App.css";

export default function App() {
    const [adminInfo, setAdminInfo] = useState(null);
    useEffect(() => {
        let token = localStorage.getItem("admin-token");
        fetch("http://localhost:8000/api/admins", {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAdminInfo(data);
            });
    }, []);
    const router = useRoutes(routes);
    return (
        <div className='app'>
            <Sidebar />
            <div className='main'>
                <Header adminInfo={adminInfo} />
                {router}
            </div>
        </div>
    );
}
