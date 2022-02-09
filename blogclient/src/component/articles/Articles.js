import React, { useEffect, useState } from 'react'
import Mainheader from '../mainheader/Mainheader';
import { useParams } from 'react-router';
import articleContent from './sampledb';
import "./Articles.css";
import Error from '../error/Error';

import Comments from './Comments';
import Upvotesection from './Upvotesection';
import Addcomments from './Addcomments';
// import SendIcon from '@mui/icons-material/Send';

const Articles = (props) => {
    
    const {_id}=useParams()

    // const {name}=useParams();
    const [content,setContent]=useState([])
    const [articledata,setArticledata] = useState({upvotes: 0 , comments: [] })

    // const article=articleContent.find(i=> i.name === name)

   useEffect(()=>{

       fetchnewapi()

   },[_id])

   //fetch one  article from database using id
  async function fetchnewapi(){
        const response = await fetch(`/api/article/${_id}`)
        const body = await response.json();
        console.log(body);
         setContent(body);
         setArticledata(body);
    }
   
    // if(!article)return <Error/>
    // console.log(article);
    return (
        <div>
             <Mainheader/>
            <h1 className="atitle">{content.title}</h1>
            <Upvotesection id={_id} setArticledata={setArticledata} upvotes={articledata.upvotes}/>
            <p className="ades">{content.des}</p>
            <Comments comments={articledata.comments}/>
            <Addcomments id={_id} setArticledata={setArticledata} />

        </div>
    )
}

export default Articles
