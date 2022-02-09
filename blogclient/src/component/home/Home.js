import React from 'react'
import './Home.css'
import { Grid} from '@mui/material'

import Login from '../login/Login';
import Homeheader from '../homeheader/Homeheader';
const Home = () => {
    return (
        <div>
            <Homeheader/>
         
<Grid  className="ro"  container spacing={2}>
<Grid className="col1" item xs={6} >
<h3 className="myblogtitle">MY BLOG</h3>
<h4 className="myblogp">welcome to my blog</h4>
</Grid>
<Grid className="col2" item xs={6} >

 <Login/>
</Grid>
</Grid>

         
         
        </div>
    )
}

export default Home
