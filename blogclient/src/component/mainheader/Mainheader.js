import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Grid} from '@mui/material'
import "./Mainheader.css"

const Mainheader = () => {
    return (
        <div>
           
            <AppBar>
              <Grid container >
                  
                  
                  <Toolbar >
                  
                  <Link to="/" className="hometitle">
                  <Typography>Home</Typography>
                  </Link>
                    
                    {/* <Link to="/mainhome" className="log">
                    <Typography>Home</Typography>
                    </Link> */}
                      
                   <Link to="/articlelist"  className="regab">
                   <Typography>Articlelist</Typography>
                   </Link>

                  <Link to="/" className="regar">
                   <Typography>Logout</Typography>
                   </Link> 
                     
                      
                      </Toolbar>
                      

                     
                  
              </Grid>

          </AppBar>
        </div>
    )
}

export default Mainheader
