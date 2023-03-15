import React from 'react'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import CheckIcon from 'src/icons/CheckIcon'
import { Container } from '@mui/system'

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
    background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
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
  },
  container: {
    marginLeft: 'calc((100% - 1200px) / 2)'
  },
  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContetn: 'right'
  }
}

export default function LandlordBuilding() {
  return (
    <Box id='rent-guarantee' sx={{ py: theme => `${theme.spacing(20)} !important`, backgroundColor: '#F3F3F3' }}>
      <Container>
        <Grid container spacing={6} mx={style.wrapper}>
          <Grid item xs={12} md={8}>
            <Typography variant='h5' color='#0070F3' fontWeight={700}>
              Landlords Building Insurance
            </Typography>
            <Box mx={style.firstPara}>
              A few weeks of repairs may not be enough to fix damage to your building caused by a Christmas Eve fire or
              an unexpected subsidence. Landlord buildings insurance can cover the cost, along with loss of rental
              revenue and property owners' liability cover starting at £2 million, if the property is severely damaged
              and a rebuild is anticipated.
            </Box>
            <Grid item xs={12} sx={style.botttomSection}>
              <CheckIcon /> Landlords' building insurance, including a UK customer service and claims team
              <br />
              <CheckIcon />
              Choosing between a £2 million or £5 million property owners' liability insurance policy
              <br />
              <CheckIcon /> Rebuild your home with professional insurance up to £1 million.
            </Grid>
            <Button variant='contained' sx={style.button}>
              Get Quote
            </Button>
          </Grid>
          <Grid item xs={12} md={4} mx={style.imageSection}>
            <Img alt='landlordBuilding' src='/images/landlordBuilding.png' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
