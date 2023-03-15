// ** React Imports

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCard, { CardProps } from '@mui/material/Card'

// ** Icons Imports

// Styled Card component
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  border: 0,
  boxShadow: 'none',
  backgroundSize: 'cover',
  backgroundImage:
    theme.palette.mode === 'light'
      ? 'url(/images/pages/pages-header-bg-light.png)'
      : 'url(/images/pages/pages-header-bg-dark.png)'
}))

const HomeBanner = () => {
  return (
    <Card>
      <CardContent sx={{ pt: 20, textAlign: 'end', pb: theme => `${theme.spacing(25)} !important` }}>
        <Typography
          variant='h5'
          sx={{ mb: 2.5, color: 'primary.main', fontWeight: 600, fontSize: '2.5rem !important' }}
        >
          Hello, how can we help
        </Typography>
        <Typography variant='body2' sx={{ mb: 6.5 }}>
          or choose a category to quickly find the help you need
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HomeBanner
