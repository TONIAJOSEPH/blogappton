import React ,{useEffect , useState}from 'react'
import Mainheader from '../mainheader/Mainheader';
import { Link } from 'react-router-dom';
import articleContent from "../articles/sampledb";
import "./articlelist.css"

const Articlelist = (props) => {

    const [articledata,setArticledata] = useState([])

    //fetch api from server calling articlelist
    async function fetchapi(){
        const response = await fetch("/api/article")
        const body = await response.json();
        // console.log(body);
        setArticledata(body);
  }

    useEffect(()=>{
        fetchapi();
      },[])

    return (
        <div>
            <Mainheader/>
            <h1 className="titlelist">Article List</h1>
            {articledata.map((i,key) => ( 
              <div className="mtitle">
                     <Link key={key} to={`/article/${i._id}`} className="it">
                    <h3 className="itm">{i.title}</h3>
                    </Link>  
             </div>
               
             ))
           
            }
          
        </div>
    )
}

export default Articlelist
