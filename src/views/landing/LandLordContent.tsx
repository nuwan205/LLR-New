import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import CheckIcon from 'src/icons/CheckIcon'

const Img = styled('img')(({}) => ({
  maxWidth: '100%'
}))

const style = {
  firstPara: {
    color: '#333333',
    marginBottom: '1.5rem',
    marginTop: '0.5rem'
  },
  wrapper: {
    marginTop: '5rem',
    alignItems: 'center',
    marginBottom: '5rem'
  },
  botttomSection: {
    background: 'linear-gradient(90.06deg, #F3F3F3 0.05%, rgba(243, 243, 243, 0) 99.95%)',
    marginTop: '4rem',
    color: '#185395',
    padding: '1.5rem'
  },
  button: {
    padding: '0.4rem 1.5rem',
    fontWeight: 800,
    textTransform: 'capitalize',
    fontSize: '1.2rem',
    backgroundColor: '#0070F3',
    marginTop: '2rem'
  }
}

export default function LandlordContent() {
  return (
    <Box id='rent-guarantee' sx={{ py: theme => `${theme.spacing(20)} !important` }}>
      <Container>
        <Grid container spacing={6} mx={style.wrapper}>
          <Grid item xs={12} md={8}>
            <Typography variant='h5' color='#0070F3' fontWeight={700}>
              Landlords Contents Insurance
            </Typography>
            <Box mx={style.firstPara}>
              Many landlords opt to decorate their rental properties, adding everything from TVs to dining chairs. Since
              there is always a chance that something will be damaged or stolen, landlord contents insurance is very
              common among UK landlords. You can purchase it as a component of a comprehensive landlord insurance plan
              and, if necessary, add additional cover for the actual building.
            </Box>
            <Grid item xs={12} sx={style.botttomSection}>
              <CheckIcon /> a UK-based claims team and landlord contents insurance
              <br />
              <CheckIcon /> Quick turnaround (80% of settled claims paid in 24 hours) and no excess to pay
              <br />
              <CheckIcon /> Coverage for damage, missing items, fire, and water damage, whether intentional or
              unintentional.
            </Grid>
            <Button variant='contained' sx={style.button}>
              Get Quote
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img alt='landlordContent' src='/images/landlordContent.png' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
