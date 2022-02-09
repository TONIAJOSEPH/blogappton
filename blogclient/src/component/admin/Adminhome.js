import React , {useState, useEffect} from 'react'
import Adminheader from './Adminheader';
import { Link } from 'react-router-dom';

import "./Admin.css"

const Adminhome = (props) => {

    const [articledata,setArticledata] = useState([])

    async function fetchapi(){
        const response = await fetch("/api/article")
        const body = await response.json();
        // console.log(body);
        setArticledata(body);

  }
    

//   fetchapi();

  useEffect(()=>{
    fetchapi();
  },[])

    return (
        <div>
            <Adminheader/>
            {/* <h1 className="adhometitle">adminhome</h1> */}
            <h2 className="titlelist">articlelist</h2>
            {articledata.map((i,key) => (
            <div className="ititle">
                
                    <Link key={key} to={`/admin/article/${i._id}`} className="link">
                    <h3>{i.title}</h3>
                    </Link> 
                
            </div>
               
             ))
                
                 
            }
           
        </div>
    )
}

export default Adminhome
