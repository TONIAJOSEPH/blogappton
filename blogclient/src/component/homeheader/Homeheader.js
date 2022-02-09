import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Grid} from '@mui/material'
import "./Homeheader.css"

const Homeheader = () => {
    return (
        <div>
             <AppBar>
              <Grid container >
                  
                  
                  <Toolbar >
                  
                     <Typography >Home</Typography>

                    <Link to="/adminlogin" className="logad">
                    <Typography>admin login</Typography>
                    </Link>



                    <Link to="/" className="log">
                    <Typography>login</Typography>
                    </Link>
                      
                   <Link to="/register" className="reg" >
                   <Typography>register</Typography>
                   </Link>
                     
                      
                      </Toolbar>
                      

                     
                  
              </Grid>

          </AppBar>
        </div>
    )
}

export default Homeheader
