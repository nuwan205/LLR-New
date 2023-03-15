import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// import AddressSection from '../../views/shared/AddressSection'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const LandlordProfile = () => {
  return (
    <Box>
      <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
        <Button component='button' size='large' color='success' variant='contained'>
          Save Changes
        </Button>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'start' }}>
            Landlord Details
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField fullWidth defaultValue='' label='First Name' placeholder='Ex: John' />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField fullWidth defaultValue='' label='Last Name' placeholder='Ex: Doe' />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField fullWidth defaultValue='' label='Contact Number' placeholder='Ex: +123321123' />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField fullWidth defaultValue='' label='Email' placeholder='Ex: someone@mail.co' />
        </Grid>
      </Grid>

      <Grid container spacing={6} sx={{ my: 6 }}>
        <Grid item xs={12}>
          <Typography variant='subtitle1' sx={{ fontWeight: 600, textAlign: 'start' }}>
            Ownership
          </Typography>
        </Grid>
        <Grid item container spacing={6} alignItems='start'>
          <Grid item xs={12}>
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'start' }}>
              Registered Address
            </Typography>
          </Grid>
          {/* <AddressSection /> */}
        </Grid>

        <Grid item xs={12} sx={{ mt: 4 }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 600, textAlign: 'start' }}>
            Trading Address
          </Typography>
        </Grid>
        <Grid item container spacing={6} alignItems='start'>
          <Grid item xs={12}>
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'start' }}>
              Trading Address
            </Typography>
          </Grid>
          {/* <AddressSection /> */}
        </Grid>
      </Grid>
    </Box>
  )
}
export default LandlordProfile
