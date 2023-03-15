import { Container, Grid, Toolbar, Box, Typography, Link } from '@mui/material'
import React, { ReactNode } from 'react'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import Footer from 'src/views/landing/Footer'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function ContactUs() {
  return (
    <div
      style={{
        background: '#f3f3f3',
        minHeight: '100vh',
        height: '100%',
        fontFamily:
          'Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
      }}
    >
      <Toolbar />
      <Typography variant='h4' sx={{ my: 8, fontWeight: 'bold', textAlign: 'center' }}>
        Contact Us
      </Typography>
      <Container>
        <Grid
          container
          direction={{ xs: 'column-reverse', sm: 'row-reverse' }}
          sx={{
            my: 4,
            mb: 20,
            background: 'white',
            borderRadius: '10px'
          }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              background: '#ededed',
              py: 8,
              px: 8,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: { xs: '0 0 10px 10px', sm: '0 10px 10px 0' }

              // borderRadius: '10px 0 0 10px',/
              // fontWeight: 600
            }}
          >
            Landlords Rescue is a trading style of Landlordsrescue.com Limited
            <br />
            Fullford House,
            <br />
            Newbold Terrace
            <br />
            Royal Leamington Spa
            <br />
            Warwickshire
            <br />
            CV32 4EA
            <br />
            <br />
            <Box>
              E: <Link href='mailto:info@landlordsrescue.com'>info@landlordsrescue.com </Link>
              <br />
              T: 01926 942170
            </Box>
            <Box sx={{ width: '100%', mt: 4 }}>
              <FacebookIcon
                sx={{ mr: 4, cursor: 'pointer' }}
                onClick={() => window.open('https://www.facebook.com/profile.php?id=100086905505189')}
              />
              <TwitterIcon
                sx={{ mr: 4, cursor: 'pointer' }}
                onClick={() => window.open('https://twitter.com/landlordrescueuk')}
              />
              <InstagramIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => window.open('https://www.instagram.com/landlordsrescue')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '300px',
                minHeight: '20rem',
                height: '100%',
                backgroundImage: 'url(/images/contactUs.svg)',
                backgroundSize: 'cover'
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ my: 15, width: '100%' }}>
          <div className='mapouter' style={{ width: '100%' }}>
            <div className='gmap_canvas' style={{ width: '100%' }}>
              <iframe
                width={'100%'}
                height={500}
                id='gmap_canvas'
                src='https://maps.google.com/maps?q=Fullford%20House,%20Newbold%20Terrace,%20Royal%20Leamington%20Spa%20,Warwickshire,CV32%204EA&t=&z=13&ie=UTF8&iwloc=&output=embed'
                frameBorder={0}
                scrolling='no'
                marginHeight={0}
                marginWidth={0}
              />
              <a href='https://putlocker-is.org'>putlocker</a>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html: '.mapouter{position:relative;text-align:right;height:500px;width:600px;}'
                }}
              />
              <a href='https://www.embedgooglemap.net'>google maps widget html</a>
              <style
                dangerouslySetInnerHTML={{
                  __html: '.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}'
                }}
              />
            </div>
          </div>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

ContactUs.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

ContactUs.guestGuard = true

export default ContactUs
