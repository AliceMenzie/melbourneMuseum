import React from 'react'
import explore from '../assets/explore.jpg'

export default function Main() {
    return (
        <div className="main-container">
            <div className="main-img-container">
            {/* <img className="img-explore" src={explore} alt="explore" /> */}
            </div>
            
            <div className="main-card">
                <h2>Welcome back!</h2>
                <p>Open daily 10am-5pm</p>
                <p>We're delighted that Melbourne Museum has reopened. Don't miss out pre-book your tickets today!</p>
                <p>What's on</p>
                <p>Get tickets</p>
                <p>Visiting Information</p>
            </div>
        </div>
    )
}
