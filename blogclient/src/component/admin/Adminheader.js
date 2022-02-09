import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Grid} from '@mui/material'
import "./Admin.css"


const Adminheader = () => {
    return (
        <div>
             <AppBar>
              <Grid container >
                  
                  
                  <Toolbar >
                  
                  <Link to="/" className="mhome">
                  <Typography >Home</Typography>
                  </Link>
                    
                    <Link to="/adminhome" className="nmhome">
                    <Typography className="log">Articlelist</Typography>
                    </Link>

                  <Link to="/addblog" className="mmhome">
                    <Typography className="log">Add blog</Typography>
                    </Link>

                    <Link to="/" className="mmhome">
                    <Typography className="log">Logout</Typography>
                    </Link>
                      
                   {/* <Link to="/about" >
                   <Typography className="reg" >about</Typography>
                   </Link>

                  <Link to="/articlelist" >
                   <Typography className="reg" >articlelist</Typography>
                   </Link>  */}
                     
                      
                      </Toolbar>
                      

                     
                  
              </Grid>

          </AppBar>
        </div>
    )
}

export default Adminheader
