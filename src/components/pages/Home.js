import { Button } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <>
    <div>
         <h2> List of our Projects and Products</h2>
         <h3>Library Management System</h3>
         <p><b>Description : </b> This is Project is used to manage the books in the library.</p>
         <p><b>Languages : </b> Java, Springboot, ReactJs, MySQL</p>
         <p><b>Benefit : </b> Library</p>
         <p><b>Softwares : </b> VSCode</p>
    </div>
    <div>
        <Button>Watch Demo</Button>
        <Button>Buy</Button>
        <Button>Add Review</Button>
    </div>
    </>
  )
}

export default Home