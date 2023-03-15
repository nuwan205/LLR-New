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
  }
}

export default function LandlordProperty() {
  return (
    <Box id='rent-guarantee' sx={{ py: theme => `${theme.spacing(20)} !important`, backgroundColor: '#F3F3F3' }}>
      <Container>
        <Grid container spacing={6} mx={style.wrapper}>
          <Grid item xs={12} md={8}>
            <Typography variant='h5' color='#0070F3' fontWeight={700}>
              Unoccupied Property Insurance
            </Typography>
            <Box mx={style.firstPara}>
              Tenant gaps, renovation projects, or holding off on selling your rental property? Unoccupied property
              insurance can protect you from risks associated with owners' liability, including damage to your
              unoccupied building and its contents as well as some legal costs and emergencies like a plumbing problem.
              An example of this would be if some old brickwork fell and injured someone.
            </Box>
            <Grid item xs={12} sx={style.botttomSection}>
              <CheckIcon /> Owners' liability & building damage are two risks associated with vacant property that
              landlord insurance covers.
              <br />
              <CheckIcon />
              The cost of fixing any damage or the cost of replacing it if it cannot be fixed
              <br />
              <CheckIcon /> 80 percent of settled claims were compensated within 24 hours.
            </Grid>
            <Button variant='contained' sx={style.button}>
              Get Quote
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img alt='property' src='/images/lanlordProperty.png' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
