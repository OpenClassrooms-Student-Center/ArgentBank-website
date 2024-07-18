import React from 'react'
function Feature(props) {
    const { src, title, desc } = props
    return (
        <div className="feature-item">
            <img src={src} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Feature