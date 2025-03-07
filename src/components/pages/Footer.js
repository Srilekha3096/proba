import React from 'react'
import { Button, Grid2, Link, Typography } from '@mui/material'
function Footer() {
    return (
        <div>
            <Grid2 className='bg-black text-white text-center mt-10' 
            container spacing={4}
            sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid2 item size={3} >
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                    </div>
                </Grid2>
                <Grid2 item size={3}>
                    <Typography className='pb-5' variant='h6'> Solutions </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
                    </div>
                </Grid2>
                <Grid2 item size={3}>
                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>API Status</Button>
                    </div>
                   
                </Grid2>
                <Grid2 item size={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                    </div>
                   
                </Grid2>
<Grid2 className='pt-20' item size={12} >
    <Typography variant='body2' component="p" align='center'>&copy; 2023 My Company. All rights reserved.</Typography>
    <Typography variant='body2' component="p" align='center'> Made with love by me.</Typography>
    <Typography variant='body2' component="p" align='center'> Icons made by <Link href="https://www.freepik.com" color="inherit" underline="always">Freepik</Link> from <Link href="https://flaticon.com/" color="inherit" underline='always'>www.flaticon.com</Link></Typography>
</Grid2>

            </Grid2>

        </div>
    )
}

export default Footer