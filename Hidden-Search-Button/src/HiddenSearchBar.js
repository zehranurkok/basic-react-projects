import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import "./style.css"

function HiddenSearchBar() {
    const [showInput, setShowInput] = useState(false);
    const [background, setBackground] = useState("white");

    function handleClick(event) {
        setBackground("black");
        if (event.target.className === "container") {
            setShowInput(false);
            setBackground("white");
        }
    }

    return (
        <>
            <section
                className='container'
                style={{ backgroundColor: background }}
                onClick={handleClick}
            >
                {showInput ? (
                    <input
                        type="text"
                        placeholder='Search'
                    />
                ) : (
                    <FaSearch onClick={() => setShowInput(true)} />
                )}
            </section>
        </>
    )
}

export default HiddenSearchBar