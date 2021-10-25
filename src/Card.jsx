import React from 'react'

function Card(props) {
    return (
        <>
        <div className="props">
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.rollno}</p>
            
        </div>
        </>
    )
}

export default Card
