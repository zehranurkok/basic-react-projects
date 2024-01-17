import { useState } from "react";

function ToggleButton() {
    const [background, setBackground] = useState("red");
    const [text, setText] = useState("#294B29");
    const [button, setButton] = useState("red");

    function hadleClick() {
        setBackground(background === "red" ? "#294B29" : "red");
        setText(text === "#294B29" ? "red" : "#294B29");
        setButton(button === "red" ? "#294B29" : "red");
    }

    return (
        <section style={{ background, color: text }}>
            <button
                onClick={hadleClick}
                style={{
                    color: text, button, border: `2px solid ${text}`
                }}>
                {background === "#294B29" ? "Black Theme" : "White Theme"}
            </button>
            <section className="content">
                <h1>Hi! I'm Zehra Nur Kök.</h1>
            </section>
        </section>
    );
}

export default ToggleButton;