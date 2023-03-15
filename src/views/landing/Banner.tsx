// ** MUI Components
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Toolkit from 'src/@core/components/toolkit/toolkit'

// ** Layout Import
import Typography from '@mui/material/Typography'

function Banner() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: 800,
          zIndex: -1,
          backgroundImage: 'url(/images/landing/banner-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: '100% 80%',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 95%, transparent 100%)'
        }}
      />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: { xs: 'center', sm: 'flex-start' },
          flexFlow: 'column nowrap'
        }}
      >
        <Box
          sx={{
            mt: { xs: 30, sm: 40 },
            mb: { xs: 30, sm: 30, md: 30 },
            p: 10,
            borderRadius: '10px',
            width: { xs: '90%', sm: '75%', md: '66%' },
            background: 'rgba( 255, 255, 255, 0.75 )',
            boxShadow: '0 4px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 3px )',
            border: '1px solid rgba( 255, 255, 255, 0.18 )'
          }}
        >
          <Typography variant='h2' sx={{ mb: 2.5, color: 'primary.main', fontWeight: 'bold' }}>
            Landlord's Toolkit.
          </Typography>
          <Typography variant='h4' sx={{ mb: 6.5, fontWeight: 'bold' }}>
            NOBODY GIVES YOU MORE!
          </Typography>

          <Typography variant='body1' sx={{ mb: 6.5 }}>
            All landlords and letting agents for their customers in the UK can get Landlords Protection coverage under
            one roof, saving them about £1500 annually. Your needs are met by Landlords Rescue!
          </Typography>
        </Box>

        <Toolkit />
      </Container>
    </Box>
  )
}

export default Banner
