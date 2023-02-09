import "../styles/navbar.scss";
import LogoJC from "../assets/logo-dark.png";
import LogoDR from "../assets/dr-dark.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left-container">
                <div>
                    <img
                        src={LogoJC}
                        alt="logo"
                        className="logo"
                        onMouseEnter={(e) => {
                            e.currentTarget.src = LogoDR;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = LogoJC;
                        }}
                    />
                </div>
                <div className="projects">PROJECTS</div>
            </div>
            <div className="right-container">
                <div className="about">ABOUT</div>
                <div className="contact">CONTACT</div>
            </div>
        </nav>
    );
}
