import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'
import { styled } from '@mui/material/styles'
import CheckIcon from 'src/icons/CheckIcon'

export default function HomeEmergency() {
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
    }
  }

  return (
    <div id="landlord-emergency">
      <Container>
        <Grid container spacing={6} mx={style.wrapper}>
          <Grid item xs={12} md={6}>
            <Img alt='guarante' src='/images/landlordEmergency.png' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' color='#0070F3' fontWeight={700}>
              Landlords Home Emergency cover – Why is it important ?
            </Typography>
            <Box mx={style.firstPara}>
              A safe habitation property must have plumbing, heating, electricity, and a working roof. These are all
              essential necessities. What occurs then if one fails to function properly and your tenant is left without
              access to water or power? It occurs frequently, making landlord home emergency cover a well-liked safety
              net
            </Box>
          </Grid>
          <Grid item xs={12} sx={style.botttomSection}>
            <CheckIcon /> Breakdown insurance for landlords for boiler and heating system issues <br />
            <CheckIcon /> Up to a specific amount, home security, lost keys, vermin, and hotel fees are covered. <br />
            <CheckIcon /> Insurance for landlords' plumbing systems, including coverage for drainage issues
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
