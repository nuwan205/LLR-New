// ** MUI Imports
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Grid from '@mui/material/Grid'
import CheckIcon from 'src/icons/CheckIcon'

const WhatIsToolkit = () => {
  return (
    <Container>
      <Box
        id='what-is-toolkit'
        component='div'
        className='match-height'
        sx={{
          py: theme => `${theme.spacing(20)} !important`,
          width: '80%'
        }}
      >
        <Typography variant='h5' sx={{ mb: 10, color: 'primary.main', fontWeight: 'bold' }}>
          What is a Landlords Toolkit?
        </Typography>
        <Typography variant='body1' sx={{ mb: 6.5 }}>
          We've created the Landlords Toolkit to make getting covered as an investment property owner easy by bundling
          the mandatory coverage into three manageable bundles. The implication is straightforward: you won't spend more
          money than necessary if you buy the items separately. The fact that no available toolkit does this while also
          reducing costs is crucial.
        </Typography>

        <Typography variant='body1' sx={{ mb: 6.5 }}>
          The tool serves as your virtual property manager, keeping tabs on tenants, vetting prospective tenants, and
          managing legal documents like the Assured Shorthold Tenancy Agreement and tenant credit checks.
        </Typography>

        <Box
          sx={{
            p: 4,
            my: theme => `${theme.spacing(4)} !important`,
            background: 'linear-gradient(90.06deg, #ececec 0.05%, rgb(243 243 243 / 60%) 70.95%);'
          }}
        >
          <Grid container spacing={6} className='match-height'>
            <Grid item xs={12} md={6} sx={{ p: 4 }}>
              <Box>{renderFeatures(planBenefits1)}</Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 4 }}>
              <Box>{renderFeatures(planBenefits2)}</Box>
            </Grid>
          </Grid>
        </Box>

        {/* <Typography variant='body1' sx={{ mb: 6.5 }}>
          Yes, this is all accomplished through the Landlord's Toolkit.
        </Typography>
        <Typography variant='body1' sx={{ mb: 6.5 }}>
          You could also collect rent via the toolkit, which would *save you much more every year, thereby increasing
          your yield.
        </Typography>
        <Typography variant='body1' sx={{ mb: 6.5 }}>
          Example: Letting Agent Fee’s
        </Typography>

        <Box
          component='div'
          className='match-height'
          sx={{
            my: theme => `${theme.spacing(4)} !important`,
            background: 'linear-gradient(90.06deg, #ececec 0.05%, rgb(243 243 243 / 60%) 70.95%);'
          }}
        >
          <Typography variant='body1' sx={{ p: 4 }}>
            Fees for this service typically begin at 8% of rent in the regions and can reach as high as 15% for some
            agents in London. These fees are automatically deducted from the monthly rent. (Dale can you do the case
            study here with the examples please)
          </Typography>
        </Box> */}
      </Box>
    </Container>
  )
}
export default WhatIsToolkit

const renderFeatures = (data: string[]) => {
  return data.map((item: string, index: number) => (
    <Box key={index} sx={{ display: 'flex', alignItems: 'center', py: 0.5 }}>
      <CheckIcon />
      <Typography variant='subtitle1' sx={{ color: '#185395', pl: 2 }}>
        {item}
      </Typography>
    </Box>
  ))
}
const planBenefits1: string[] = [
  'Tenant/s information',
  'Insurance policy documents',

  // 'TDP -Tenancy deposit scheme',
  'Tenant credit check',
  'Emergency breakdown cover'

  // 'Live property inspection.'
]
const planBenefits2: string[] = [
  'Excess Protection',
  'Free Legal Documents',
  'Rent Guarantee',
  'Tax Helpline',

  // 'Rent Collection',
  'Accountancy records to help in filing to HMRC'
]
