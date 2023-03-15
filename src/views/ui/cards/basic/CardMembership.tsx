// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMembership = () => {
  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Property in London
            </Typography>
            <Typography sx={{ py: 1 }} variant='body2'>
              42, Park Road, London.
            </Typography>
            <Typography variant='body2'>SW26 0RJ</Typography>
            <Divider sx={{ my: 7 }} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <StyledBox>
                  <Box sx={{ py: 1.25, mb: 4, display: 'flex', alignItems: 'center' }}>
                    <AccountOutline sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                    <Typography variant='body2'>3 Tenants</Typography>
                  </Box>
                </StyledBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ py: 1.25, mb: 4, display: 'flex', alignItems: 'center' }}>
                  <StarOutline sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                  <Typography variant='body2'>Features</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover'
            }}
          >
            <Box>
              <Typography variant='caption'>Active Package</Typography>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <Typography variant='h3' sx={{ lineHeight: 0.9334, fontSize: '3.75rem !important' }}>
                  K2
                </Typography>
              </Box>
              <Typography variant='body1' sx={{ mb: 7, display: 'flex', flexDirection: 'column' }}>
                <span>Kilimanjaro</span>
              </Typography>
              <Button variant='contained'>Upgrade</Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
