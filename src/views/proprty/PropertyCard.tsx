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
// import StarOutline from 'mdi-material-ui/StarOutline'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { useRouter } from 'next/router'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

type PropertyCardProps = {
  data: any
}

const PropertyCard = ({ data }: PropertyCardProps) => {
  const router = useRouter()

  return (
    <Card sx={{ height: '100%' }}>
      <Grid container spacing={6} alignItems='stretch' sx={{ height: '100%', mt: 0 }}>
        {data && (
          <>
            <Grid item xs={12} sm={7}>
              <CardContent
                sx={{
                  p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <Box>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {`Property in ${data.city}`}
                  </Typography>
                  <Typography sx={{ py: 1 }} variant='body2'>
                    {`${data.address1}, ${data.address2 || ''}`}
                    <br />
                    {data.city}
                  </Typography>
                  <Typography variant='body2'>{data.postCode}</Typography>
                </Box>
                <Box>
                  <Divider sx={{ my: 7 }} />
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <StyledBox>
                        <Box sx={{ py: 1.25, mb: 4, display: 'flex', alignItems: 'center' }}>
                          <AccountOutline sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                          <Typography variant='body2' sx={{ fontSize: '0.8rem' }}>
                            {data.tenants.length} Tenants
                          </Typography>
                        </Box>
                      </StyledBox>
                    </Grid>
                    <Grid item xs={12} sm={6} />
                    <Grid item xs={12} sm={6}>
                      <StyledBox>
                        <Box sx={{ py: 1.25, mb: 4, display: 'flex', alignItems: 'center' }}>
                          {data.includeLandlordEmergency ? (
                            <CheckIcon sx={{ color: 'green', mr: 2.5 }} fontSize='small' />
                          ) : (
                            <ClearIcon sx={{ color: 'red', mr: 2.5 }} fontSize='small' />
                          )}
                          <Typography variant='body2' sx={{ fontSize: '0.8rem' }}>
                            Landlord Emergency
                          </Typography>
                        </Box>
                      </StyledBox>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ py: 1.25, mb: 4, display: 'flex', alignItems: 'center' }}>
                        {data.includeRentGuarantee ? (
                          <CheckIcon sx={{ color: 'green', mr: 2.5 }} fontSize='small' />
                        ) : (
                          <ClearIcon sx={{ color: 'red', mr: 2.5 }} fontSize='small' />
                        )}
                        <Typography variant='body2' sx={{ fontSize: '0.8rem' }}>
                          Rent Guarantee
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Grid>
            <Grid
              item
              sm={5}
              xs={12}
              sx={{
                pt: ['0 !important', '1.5rem !important'],
                pl: ['1.5rem !important', '0 !important'],
                backgroundImage: `url(${data.subscription.stripeProduct.image})`,
                backgroundSize: 'cover'
              }}
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
                  <Typography variant='caption' sx={{ color: '#FED900', fontWeight: 800 }}>
                    Active Policy
                  </Typography>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Typography
                      variant='h3'
                      sx={{
                        lineHeight: 0.9334,
                        fontSize: '1.75rem !important',
                        color: '#FED900',
                        textTransform: 'uppercase',
                        fontWeight: 800
                      }}
                    >
                      {data.subscription.stripeProduct.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant='body1'
                    sx={{ mb: 7, display: 'flex', flexDirection: 'column', color: '#FED900', fontWeight: 800 }}
                  >
                    <span>{data.subscription.price / 100} GBP</span>
                  </Typography>
                  <Button
                    variant='contained'
                    disabled={data.includeLandlordEmergency && data.includeRentGuarantee}
                    onClick={() => router.push(`/products?property=${data.id}`)}
                  >
                    Upgrade
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </>
        )}
        {!data && (
          <Grid
            item
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
                  <Typography variant='h6' sx={{ lineHeight: 0.9334, fontSize: '1.75rem !important' }}>
                    {data.toolkit.name}
                  </Typography>
                </Box>
                <Typography variant='body1' sx={{ mb: 7, display: 'flex', flexDirection: 'column' }}>
                  <span>{data.price / 100} GBP</span>
                </Typography>
                <Button variant='contained' onClick={() => router.push('property-add')}>
                  Add Property
                </Button>
              </Box>
            </CardContent>
          </Grid>
        )}
      </Grid>
    </Card>
  )
}

export default PropertyCard
