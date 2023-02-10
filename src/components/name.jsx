import "../styles/name.scss";
import { useRef } from "react";

export default function Name() {
    const nameRef = useRef(null);
    return (
        <div className="btm-wrapper__left__top">
            <div
                className="name"
                onMouseEnter={(e) => {
                    e.target.innerText = "DR.";
                    nameRef.current.style.cssText =
                        "transform: translateX(-1rem);";
                    nameRef.current.childNodes[0].innerText = "DELSION";
                    nameRef.current.childNodes[1].innerText = "ROUGE";
                }}
                onMouseLeave={(e) => {
                    e.target.innerText = "JC.";
                    nameRef.current.style.cssText = "transform: translateX(0);";
                    nameRef.current.childNodes[0].innerText = "JANMEJAY";

                    nameRef.current.childNodes[1].innerText = "CHATTERJEE";
                }}
            >
                JC.
            </div>
            <div className="fullName-container" ref={nameRef}>
                <div>JANMEJAY</div>
                <div>CHATTERJEE</div>
            </div>
        </div>
    );
}
