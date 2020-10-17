import React from 'react'
import './ShowCard.css'
function ShowCard ({src, title, link}) {
    return (
        <div className='card'>
             <img src={src} alt="" />
            <div className="card_info">
                <h2>{title}</h2>
                <h2>{link}</h2>
            </div>
        </div>
    )
}

export default ShowCard
