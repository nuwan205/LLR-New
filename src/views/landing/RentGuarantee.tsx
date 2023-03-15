import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

// Styled Grid component

// Styled component for the image
const Img = styled('img')(({}) => ({
  maxWidth: '100%'
}))

const style = {
  firstPara: {
    color: '#333333',
    marginBottom: '1.5rem',
    marginTop: '0.5rem'
  },
  paragraph: {
    fontSize: '0.8rem'
  }
}

const RentGuarantee = () => {
  return (
    <Box id='rent-guarantee' sx={{ py: theme => `${theme.spacing(20)} !important`, backgroundColor: '#F3F3F3' }}>
      <Container>
        <Grid container spacing={6} mx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Img alt='guarante' src='/images/guarantee.png' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' color='#0070F3' fontWeight={700}>
              Rent Guarantee
            </Typography>
            <Box mx={style.firstPara}>
              When tenants fail to make payments, rent guarantee insurance protects your monthly rental income.
            </Box>
            <Box>
              It differs from loss of rent insurance, which only pays out if a covered event (like a fire) leaves you
              unable to rent out your property. Once your tenants are one month overdue on their rent, you can often
              submit a claim under your policy. Your insurance will then continue to pay benefits for a predetermined
              time, typically between 6 and 12 months.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default RentGuarantee
