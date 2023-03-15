// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Styled component for the avatar image
const AvatarImg = styled('img')(({ theme }) => ({
  right: 21,
  bottom: -60,
  height: 162,
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    height: 154
  },
  [theme.breakpoints.down('sm')]: {
    height: 149
  }
}))

const CardUpgradeAccount = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Upgrade Account</Typography>
        <Typography sx={{ mb: 4 }} variant='body2'>
          Add 15 team members
        </Typography>
        <AvatarImg alt='Upgrade Account' src='/images/cards/illustration-upgrade-account.png' />
      </CardContent>
    </Card>
  )
}

export default CardUpgradeAccount
