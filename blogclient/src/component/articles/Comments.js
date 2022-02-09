import React from 'react'
import "./Articles.css"

const Comments = (props) => {
    const {comments}=props


    return (
        <div className="titlecom">
            <h3 className="titlecom1">comments</h3>
            <div className="allcomm">
            {comments.map((i,key)=>(
                <div key={key}>
                    <h4 className="comname">{i.username}</h4>
                    <p className="comtext">{i.text}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Comments
