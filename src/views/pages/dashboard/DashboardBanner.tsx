// ** React Imports

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCard, { CardProps } from '@mui/material/Card'
import { format } from 'date-fns'
import { useAuth } from 'src/hooks/useAuth'

// ** Icons Imports

// Styled Card component
const Card = styled(MuiCard)<CardProps>(({}) => ({
  // const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  border: 0,
  boxShadow: 'none'

  // backgroundSize: 'cover',
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? 'url(/images/pages/pages-header-bg-light.png)'
  //     : 'url(/images/pages/pages-header-bg-dark.png)'
}))

const DashboardBanner = () => {
  const auth = useAuth()

  return (
    <Card>
      <CardContent sx={{ pt: 15, textAlign: 'start', pb: theme => `${theme.spacing(15)} !important` }}>
        <Typography variant='h6' sx={{ mb: 6.5 }}>
          {format(new Date(), 'PPPP')}
        </Typography>
        <Typography
          variant='h5'
          sx={{ mb: 2.5, color: 'primary.main', fontWeight: 600, fontSize: '2.5rem !important' }}
        >
          {displayGreeting()} <span style={{ textTransform: 'capitalize' }}>{auth.user?.name}</span>
          {/*// TODO User name*/}
        </Typography>
      </CardContent>
    </Card>
  )
}

const displayGreeting = () => {
  const myDate = new Date()
  const hrs = myDate.getHours()
  let greet

  if (hrs < 12) greet = 'Good Morning,'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon,'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening,'

  return greet
}

export default DashboardBanner
