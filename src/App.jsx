import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "./styles/app.scss";

function App() {
    const firstName = [
        "JANMEJAY",
        "जनमेजय",
        "ジャンメジェイ",
        "জনমেজয়",
        "جنمے جے",
        "詹美杰",
    ];
    const secondName = [
        "CHATTERJEE",
        "चटर्जी",
        "チャタジー",
        "চ্যাটার্জি",
        "چٹرجی",
        "查特吉",
    ];
    const [name, setName] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setName((name) => (name + 1) % firstName.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container">
                <Navbar />
                <div className="btm-wrapper">
                    <div className="btm-wrapper__left">
                        <div className="btm-wrapper__left__top">
                            <div className="name">JC.</div>
                            <div className="fullName-container">
                                <div>{firstName[name]}</div>
                                <div>{secondName[name]}</div>
                            </div>
                        </div>
                        <div className="btm-wrapper__left__btm">
                            <div className="age">019</div>
                        </div>
                    </div>
                    <div className="btm-wrapper__right"></div>
                </div>
            </div>
        </>
    );
}

export default App;
