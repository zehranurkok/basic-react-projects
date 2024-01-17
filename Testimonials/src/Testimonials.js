import React, { useState } from 'react'
import "./style.css"

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrevClick() {
        setCurrentIndex(
            (currentIndex + testimonials.length - 1) % testimonials.length
        )
    }

    function handleNextClick() {
        setCurrentIndex(
            (currentIndex + 1) % testimonials.length
        )
    }

    const testimonials = [
        {
            quote: "aaaaaaaaaaaaaaaaaaaaa",
            author: "111111111111"
        },
        {
            quote: "bbbbbbbbbbbbbbbbbbbbb",
            author: "222222222222"
        },
        {
            quote: "ccccccccccccccccccccc",
            author: "333333333333"
        }
    ]
    return (
        <div className='testimonials'>
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>
            <div className="testimonials-author">
                {testimonials[currentIndex].author}
            </div>
            <testimonials className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </testimonials>
        </div>
    )
}

export default Testimonials;