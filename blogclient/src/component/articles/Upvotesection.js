import React from 'react'
import { Button } from '@mui/material';
import "./Articles.css"

const Upvotesection = (props) => {
const {id,setArticledata,upvotes} = props;




async function fetchupvotes(){
const response = await fetch(`/api/article/${id}/upvotes`,{ method: "post" })
const body = await response.json();
setArticledata(body);
    }



    return (
        <div>
            <div className="upbutton">
            <Button variant="outlined" onClick={fetchupvotes}>like</Button>
            </div>
            <p className="uppara">it {upvotes} upvotes</p>
        </div>
    )
}

export default Upvotesection
