import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'

const FooterContainer = styled(Grid)(({}) => ({
  width: '100vw',
  background: '#0D0C1F'

  // borderTopRightRadius: '40%',
  // borderTopLeftRadius: '40%',
}))

const Img = styled('img')(({}) => ({
  maxWidth: '100%',
  maxHeight: '50px',
  mb: 4
}))

const style = {
  links: {
    color: 'white',
    padding: '0.4rem 0'
  }
}
export default function Footer() {
  const router = useRouter()

  return (
    <Box px={5} sx={{ background: '#0D0C1F' }}>
      <Grid container spacing={4} pt={10} width={'100%'} ml={0} justifyContent='space-around'>
        <Grid xs={12} sm={12} md={3} px={2} py={5}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Img alt='Logo' src='/images/logos/LLRlogowhite.svg' />
          </div>
        </Grid>
        <Grid
          container
          xs={12}
          sm={3}
          md={2}
          direction='column'
          justifyContent='flex-start'
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          px={2}
          py={5}
        >
          <Typography variant='h6' color='#0070F3' fontWeight={700}>
            Quick Links
          </Typography>
          <Box mx={style.links}>
            <span style={{ cursor: 'pointer' }}>Home</span>
          </Box>
          <Box mx={style.links}>
            <span style={{ cursor: 'pointer' }} onClick={() => router.push('/contact-us')}>
              Contact Us
            </span>
          </Box>
        </Grid>
        <Grid
          container
          xs={12}
          sm={3}
          md={2}
          direction='column'
          justifyContent='flex-start'
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          px={2}
          py={5}
        >
          <Typography variant='h6' color='#0070F3' fontWeight={700}>
            Legal Stuff
          </Typography>
          <Box mx={style.links}>
            <span style={{ cursor: 'pointer' }} onClick={() => router.push('/privacy-terms')}>
              Privacy and terms
            </span>
          </Box>
          <Box mx={style.links}>
            <span style={{ cursor: 'pointer' }} onClick={() => router.push('/modern-slavery-statement')}>
              Modern Slavery
            </span>
          </Box>
          <Box mx={style.links}>
            <span style={{ cursor: 'pointer' }} onClick={() => router.push('/complaints-procedure')}>
              Complaints
            </span>
          </Box>
        </Grid>
        <Grid
          container
          xs={12}
          sm={3}
          md={2}
          direction='column'
          justifyContent='flex-start'
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          px={2}
          py={5}
        >
          <Typography variant='h6' color='#0070F3' fontWeight={700}>
            Social Media
          </Typography>
          <Box mx={style.links} onClick={() => window.open('https://www.facebook.com/profile.php?id=100086905505189')}>
            <span style={{ cursor: 'pointer' }}>Facebook</span>
          </Box>
          <Box mx={style.links} onClick={() => window.open('https://twitter.com/landlordrescueuk')}>
            <span style={{ cursor: 'pointer' }}>Twitter</span>
          </Box>
          <Box mx={style.links} onClick={() => window.open('https://www.instagram.com/landlordsrescue')}>
            <span style={{ cursor: 'pointer' }}>Instagram</span>
          </Box>
        </Grid>
        <Grid item xs={12} mb={5} mt={10} px={5} sx={{ color: 'white', textAlign: 'center', fontSize: '0.9rem' }}>
          The Landlord’s Rescue brand is © 2022 of Landlord’s Rescue Ltd.
        </Grid>
      </Grid>
    </Box>
  )
}
