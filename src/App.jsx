import Navbar from "./components/navbar";
import Name from "./components/name";
import Age from "./components/age";

import "./styles/app.scss";

function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="btm-wrapper">
                    <div className="btm-wrapper-left">
                        <Name />
                        <Age />
                    </div>
                    <div className="btm-wrapper-right"></div>
                </div>
            </div>
        </>
    );
}

export default App;
